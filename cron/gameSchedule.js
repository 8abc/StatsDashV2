const cheerio = require("cheerio");
const logger = require("morgan");
const mongoose = require("mongoose");
const express = require("express");
const axios = require("axios");
const Game = require("../models/GameSchema");
const PORT = 3000 || process.env.PORT;
const scrapePlays = require("./playScrape");
// const db = require("./models");
const app = express();
// const databaseUrl = "NBA"
// const collections = ["plays", "players", "teams", "seasons"]
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/NBA", { useNewUrlParser: true });
//every day at midnight go to the schedule page for games that day
//for each item on the page that matches the current date start running
// the app at the time its expected to start
console.log("scrapping");
//modify this to just be schedule. first testing on a working game form last season

const result = {};
const gameResult = {};
//just scraping this date to start but will eventually have it run every night iwth the current date
//lots of games
let date = "20181229";
//one game
// date = "20190425";
axios
    //later i can run another function that calls this page iwth the date using this formathttps://www.espn.com/nba/schedule/_/date/20190507
    .get(`https://www.espn.com/nba/schedule/_/date/${date}`)
    .then(async response => {
        result.combinedScore = "0-0";
        let year = date
            .split("")
            .slice(0, 4)
            .join("");
        let month = date
            .split("")
            .slice(4, 6)
            .join("");
        let day = date
            .split("")
            .slice(6)
            .join("");
        result.date = [day, month, year];

        const $ = cheerio.load(response.data);
        await Promise.all(
            $("#sched-container")
                // .children()
                .find(".responsive-table-wrap tbody")
                .first()
                .find(".home")
                .next()
                .each(async (i, element) => {
                    // element = $(element).next();
                    console.log("got gameid");
                    // console.log(element);
                    let d = $(element).text();

                    result.matchup = d.split(" ");
                    console.log(`matchup is ${result.matchup}`);
                    result.homeTeam = result.matchup[0];
                    result.awayTeam = result.matchup[2];
                    result.espnGameId = $(element)
                        .children("a")
                        .attr("href")
                        .match(/(?<=gameId=)\w*/g)
                        .join("");

                    console.log(
                        `\nhometeam: ${result.homeTeam}\nAway team: ${
                            result.awayTeam
                        }\n gameId: ${result.espnGameId}\n`
                    );
                    console.log("creating game schema");
                    // let gameResult = result;
                    // result.plays = [];
                    thisGame = new Game(result);
                    console.log("running insert to db");
                    const saveGame = async () => {
                        console.log("saving game");
                        thisGame.save();
                        console.log("game saved");
                        await scrapePlaysFunc();
                    };
                    const scrapePlaysFunc = async () => {
                        console.log("scraping plays");
                        await scrapePlays(result.espnGameId);
                    };
                    await saveGame();
                    // .then(async () => {
                    //     console.log("getting plays for this matchup");
                    //     await scrapePlays(result.espnGameId);
                    // });
                })
        ).catch(err => {
            return err;
        });

        // return Promise.resolve(result);
    })
    .catch(err => {
        return err;
    });
// const insertToDb = async result => {
//     thisGame = new Game(result);
//     console.log("running insert to db");
//     async () =>
//         thisGame.save().then(async () => {
//             console.log("getting plays for this matchup");
//             await scrapePlays(result.espnGameId);
//         });
// };
