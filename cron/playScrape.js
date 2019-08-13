const cheerio = require("cheerio");
const logger = require("morgan");
const mongoose = require("mongoose");
const express = require("express");
const axios = require("axios");
const PORT = 3000 || process.env.PORT;
const Play = require("./playSchema");
const Games = require("./GameSchema");
// const db = require("./models");
const app = express();
// const databaseUrl = "NBA"
// const collections = ["plays", "players", "teams", "seasons"]
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/NBA", { useNewUrlParser: true });
//-------------------------------------GET MATCHUP----------------------------------------------------

//--------------------------------------GET PLAY-----------------------------------------------------

scrapePlays = async gameId => {
    // console.log(`game is ${gameId}`);
    const result = {};
    let lastPLay = {
        //store the quarters checked here at the end
        quarterArray: [],
        //define the number of the last play checked so we can skip ahead when scanning in real time
        playNumber: 0
    };
    playCounter = 0;

    const getPlay = async (quarter, $, quarterName) => {
        result.quarter = quarterName;
        console.log(`quarter is: ${quarterName}`);
        console.log(`get play says quarter is${result}`);
        const events = quarter.find("tbody tr");
        await events.each(async (i, element) => {
            playCounter++;
            let play = $(element)
                .children(".game-details")
                .text();

            let minutesToGo = $(element)
                .children(".time-stamp")
                .text();
            let combinedScore = $(element)
                .children(".combined-score")
                .text();
            //check if the resulting event in the game has a stat we care about
            if (
                /foul|make|miss|(?<!clock\s)turnover|(?<!team)\srebound|assist|steal|block|travel/g.test(
                    play
                )
            ) {
                // console.log(
                //     `\nquarter: ${quarterName}\nminutes Left: ${minutesToGo} \nplay: ${play}\nscore:${combinedScore}`
                // );
                result.minute = minutesToGo;
                result.combinedScore = combinedScore;
                //parse delves into the play and finds out what stat it contains
                console.log(" parsing play");
                await parsePlay(play);
            } else {
                console.log(
                    `------Not Capturing the following--------\n${play} \n-------------- `
                );
            }

            // if (
            //     /foul|make|miss|(?<!clock\s)turnover|(?<!team)\srebound|assist|steal|block/g.test(
            //         row.children(".game-details").text()
            //     )
            // ) {
            //     let event = row.children(".game-details").text();
            //     result.time = row.children(".time-stamp").text();
            //     result.score = row.children(".combined-score");
            //     console.log(`the event is ${event}`);
            //     console.log(`the time left is ${result.time}`);
            //     console.log(`the combined score is ${result.score}`);

            //     // determinePlay(event);
            // } else {
            //     return;
            // }
        });
        // $(".game-details").each(function(i, element) {
        //     //create empty object that will become our new data row
        //     console.log("running get play");
        //     let event = $(element);
        //     let play = event.text();
        //     console.log("this play is " + play);
        //     isPlay(play);
        //the name should be the first two words in the string
        // let ballHandler = play.split(" ").slice(0, 2);
        // //create key in the object called time and set it to the times stamp
        // result.time = event.attr(".time-stamp").text();
        // //create a key in the object called score and set it to the combined score
        // result.score = event.attr(".combined-score").text();
        // isPlay(ballHandler, result);

        //set the date of the game
        //     //set the game matchup
        // });
    };

    const parsePlay = async play => {
        console.log("determining stat in play");
        console.log(`parseplay says quarter is ${result.quarter}`);

        let ballHandler = play.split(" ").slice(0, 2);
        console.log(
            `ball handler first name is ${ballHandler[0]} his last name is${
                ballHandler[1]
            }`
        );
        let playArray = play.split(" ");
        let OtherPlayerInvolved = playArray.slice(
            playArray.length - 3,
            playArray.length - 1
        );

        // let OtherPlayerInvolved = OtherPlayerArray.join(" ");

        console.log(`\n play is ${play}`);
        //depending on what the play is make a different Mongo injection

        //for missed threes finds "misses three" and "misses 'word' three" for when there is a description of how long the attempt was
        if (/(?<=misses (((\w|\W)*\s)*))three/g.test(play)) {
            console.log(`\nthe following play returns as a miss \n ${play}`);
            result.stat = "miss";
            result.type = "three";
            result.player = ballHandler;
            console.log(
                `\nstat: ${result.stat} \ntype: ${
                    result.type
                }\nplayer credited: ${result.player}`
            );
            await addToDb();
        }

        //for made threes. same as above but matches makes
        else if (/(?<=makes (((\w|\W)*\s)*))three/g.test(play)) {
            console.log(`the following play returns as a make \n ${play}`);
            result.stat = "make";
            result.type = "three";
            result.player = ballHandler;
            console.log(
                `\nstat: ${result.stat} \ntype: ${
                    result.type
                }\nplayer credited: ${result.player}`
            );
            await addToDb();
        }
        //for  two jumpers
        else if (/(?<=makes (((\w|\W)*\s)*))two/g.test(play)) {
            console.log(`the following play returns as a make \n ${play}`);
            result.stat = "make";
            result.type = "two";
            result.player = ballHandler;
            console.log(
                `\nstat: ${result.stat} \ntype: ${
                    result.type
                }\nplayer credited: ${result.player}`
            );
            await addToDb();
        }
        //for missed two jumpers
        if (/(?<=misses (((\w|\W)*\s)*))two/g.test(play)) {
            console.log(`the following play returns as a miss \n ${play}`);
            stat = "miss";
            type = "two";
            player = ballHandler;
            console.log(
                `\nstat: ${result.stat} \ntype: ${
                    result.type
                }\nplayer credited: ${result.player}`
            );
            await addToDb();
        }

        //for dunks. matches "makes dunk" or "makes 'word' dunk"
        else if (/(?<=makes (((\w|\W)*\s)*))dunk/g.test(play)) {
            console.log(`the following play returns as a make \n ${play}`);
            result.stat = "make";
            result.type = "dunk";
            result.player = ballHandler;
            console.log(
                `\nstat: ${result.stat} \ntype: ${
                    result.type
                }\nplayer credited: ${result.player}`
            );
            await addToDb();
        }
        //for missed dunks
        else if (/(?<=misses (((\w|\W)*\s)*))dunk/g.test(play)) {
            console.log(`the follwoing play returns as a miss \n ${play}`);
            result.stat = "miss";
            result.type = "dunk";
            result.player = ballHandler;
            console.log(
                `\nstat: ${result.stat} \ntype: ${
                    result.type
                }\nplayer credited: ${result.player}`
            );
            await addToDb();
        }
        //matches "makes 'any set of characters' layup"
        else if (/(?<=makes (((\w|\W)*\s)*))layup/g.test(play)) {
            result.stat = "miss";
            result.type = "layup";
            result.player = ballHandler;
            console.log(
                `\nstat: ${result.stat} \ntype: ${
                    result.type
                }\nplayer credited: ${result.player}`
            );
            await addToDb();
        }
        //matches "misses 'any set of characters' layup"
        else if (/(?<=misses (((\w|\W)*\s)*))layup/g.test(play)) {
            console.log(`the following play returns as a miss \n ${play}`);
            result.stat = "miss";
            result.type = "layup";
            result.player = ballHandler;
            console.log(
                `\nstat: ${result.stat} \ntype: ${
                    result.type
                }\nplayer credited: ${result.player}`
            );
            await addToDb();
        }
        //match string turnover or travel
        else if (/turnover|traveling/g.test(play)) {
            console.log(`the following play returns as a turnover \n ${play}`);
            result.stat = "TO";
            result.type = "offense";
            result.player = ballHandler;
            console.log(
                `\nstat: ${result.stat} \ntype: ${
                    result.type
                }\nplayer credited: ${result.player}`
            );
            await addToDb();
            //if this turnover resulted in a steal we need to record that
            if (/steal/g.test(play)) {
                console.log(`the  play also resulted in a steal \n ${play}`);
                //in the case of a steal theres a "(" we need to remove that will ride along when scrapped
                let firstNameWhenSteal = OtherPlayerInvolved[0]
                    .split("")
                    .slice(1)
                    .join("");
                result.stat = "steal";
                result.type = "defense";
                result.player = [
                    [firstNameWhenSteal],
                    [OtherPlayerInvolved[1]]
                ];
                console.log(
                    `\nstat: ${result.stat} \ntype: ${
                        result.type
                    }\nplayer credited: ${result.player}`
                );
                await addToDb();
            }
        }
        //match string "steal"
        else if (/steal/g.test(play)) {
            console.log(`the following play returns as a steal \n ${play}`);
            //in the case of a steal theres a "(" we need to remove that will ride along when scrapped
            let firstNameWhenSteal = OtherPlayerInvolved[0]
                .split("")
                .slice(1)
                .join("");
            result.stat = "steal";
            result.type = "defense";
            result.player = `${firstNameWhenSteal} ${OtherPlayerInvolved[1]}`;
            console.log(
                `\nstat: ${result.stat} \ntype: ${
                    result.type
                }\nplayer credited: ${result.player}`
            );
            await addToDb();
        }
        //match phrase defensive rebound
        else if (/(\w*)defensive\srebound/g.test(play)) {
            console.log(
                `the following play returns as a defensive rebound \n ${play}`
            );

            result.stat = "rebound";
            result.type = "defense";
            result.player = ballHandler;
            console.log(
                `\nstat: ${result.stat} \ntype: ${
                    result.type
                }\nplayer credited: ${result.player}`
            );
            await addToDb();
        }
        //match phrase "offensive rebound"
        else if (/(\w*)offensive\srebound/g.test(play)) {
            console.log(
                `the following play returns as an offensive rebound \n ${play}`
            );

            result.stat = "rebound";
            result.type = "defense";
            result.player = ballHandler;
            console.log(
                `\nstat: ${result.stat} \ntype: ${
                    result.type
                }\nplayer credited: ${result.player}`
            );
            await addToDb();
        }
        //match fouls that arent techs
        else if (/(?<!technical\s)foul/g.test(play)) {
            console.log(
                `the following play returns as a non  technical foul \n ${play}`
            );

            result.stat = "foul";
            result.type = "personal";
            result.player = ballHandler;
            console.log(
                `\nstat: ${result.stat} \ntype: ${
                    result.type
                }\nplayer credited: ${result.player}`
            );
            await addToDb();
        }
        //match technical fouls
        else if (/(?<=technical\s)foul/g.test(play)) {
            console.log(
                `the following play returns as a technical foul \n ${play}`
            );
            result.stat = "foul";
            result.type = "technical";
            result.player = ballHandler;
            console.log(
                `\nstat: ${result.stat} \ntype: ${
                    result.type
                }\nplayer credited: ${result.player}`
            );
            await addToDb();
        }
        //match blocks
        else if (/block/g.test(play)) {
            result.stat = "block";
            result.type = "defense";
            result.player = ballHandler;
            console.log(
                `\nstat: ${result.stat} \ntype: ${
                    result.type
                }\nplayer credited: ${result.player}`
            );
            await addToDb();
        }

        //-----------------------------potentially more readable way---------------------------------------------
        // if (/makes/g.test(play)){
        //     result.stat="make"
        //     parseMake(play)
        // }
        // else if(/misses/g.test(play)){
        //     result.stat="miss"
        //     parseMiss(play)
        // }else if(/turnover|traveling/g.test(play)){
        //     console.log(`the following play returns as a turnover \n ${play}`);
        //     result.stat = "TO";
        //     result.type = "offense";
        //     result.player = ballHandler;
        //     console.log(
        //         `\nstat:${stat} \ntype:${type}\nplayer credited${player}`
        //     );
        //     addToDb();
        // }
        // else if(/steal/g.test(play)){
        //     console.log(`the following play returns as a steal \n ${play}`);
        //     result.stat = "steal";
        //     result.type = "defense";
        //     result.player = OtherPlayerInvolved;
        //     console.log(
        //         `\nstat:${stat} \ntype:${type}\nplayer credited${player}`
        //     );
        //     addToDb();
        // }
        // else if (/block/g.test(play)){
        //     result.stat = "block";
        //     result.type = "defense";
        //     result.player = ballHandler;
        //     addToDb();
        // }

        // parseMake=play=>{
        // if(){}else
        // }
    };

    const addToDb = async () => {
        // console.log(`adding ${stat}, ${type}, and ${player} to results object`);
        // result.stat = stat;
        // result.type = type;
        // result.name = player;
        console.log(`the completed result object is 
        \n quarter:${result.quarter}
        \n timeLeft:${result.minute}
        \n score:${result.combinedScore}
        \n player:${result.player}
        \n stat:${result.stat}
        \n type:${result.type}
    `);

        //-------------testing adding to db in one swoop---------------------
        let newPlay = new Play(result);
        await newPlay.save().then(() => {
            Games.find({ espnGameId: gameId }).then(game => {
                console.log(game);
                game[0].plays.push(newPlay);
                console.log("the play is");
                console.log(game[0].plays[0]);
                game[0].save();
                // game.plays.push(newPlay);
            });
        });

        // gametoUpdate.schema.paths.plays.push(newPlay);

        //----------------------------------

        // //construct play using playschema
        // const newPLay = playsDb.Play.create(result);
        // //add a play to the game
        // gamesDb.Game.plays.push(newPLay);
        // //update the score in the game collection thi
        // // lastPLay = playCounter;
        console.log("new play injected WHOOP!");
    };
    console.log("running play scrape");
    const response = await axios.get(
        `https://www.espn.com/nba/playbyplay?gameId=${gameId}`
    );
    console.log("web....");
    const $ = await cheerio.load(response.data);
    $("#gamepackage-qtrs-wrap .accordion-item").each(async (i, element) => {
        // console.log(quarter);
        const quarter = $(element);
        quarterName = quarter.find("h3").text();
        console.log("about to run getPlay");
        await getPlay(quarter, $, quarterName);

        // $("tr", quarter).each(() => {
        //     // each row
        // });
        // return Promise.resolve(result);
    });

    //
};
module.exports = scrapePlays;

// app.listen(PORT, function() {
//     console.log(`app listening on port ${PORT}`);
// });
//changed the swithc to check for treu so the switch cases will work now....ENCORPORATE LATER!!!!q
// switch (true) {
//     //for missed threes finds "misses three" and "misses 'word' three" for when there is a description of how long the attempt was
//     case /(?<=misses (((\w|\W)*\s)*))three/g.test(play):
//         console.log(`\nthe following play returns as a miss \n ${play}`);
//         stat = "miss";
//         type = "three";
//         player = ballHandler;
//         console.log(
//             `\nstat:${stat} \ntype:${type}\nplayer credited${player}`
//         );
//         addToDb(event, type, player);

//         break;
//     //for made threes. same as above but matches makes
//     case /(?<=makes (((\w|\W)*\s)*))three/g.test(play):
//         console.log(`the following play returns as a make \n ${play}`);
//         stat = "make";
//         type = "three";
//         player = ballHandler;
//         console.log(
//             `\nstat:${stat} \ntype:${type}\nplayer credited${player}`
//         );
//         addToDb(event, type, player);
//         break;
//     //for  two jumpers
//     case /(?<=makes (((\w|\W)*\s)*))two/g.test(play):
//         console.log(`the following play returns as a make \n ${play}`);
//         stat = "make";
//         type = "two";
//         player = ballHandler;
//         console.log(
//             `\nstat:${stat} \ntype:${type}\nplayer credited${player}`
//         );
//         addToDb(event, type, player);
//         break;
//     //for missed two jumpers
//     case /(?<=misses (((\w|\W)*\s)*))two/g.test(play):
//         console.log(`the following play returns as a miss \n ${play}`);
//         stat = "miss";
//         type = "two";
//         player = ballHandler;
//         console.log(
//             `\nstat:${stat} \ntype:${type}\nplayer credited${player}`
//         );
//         addToDb(event, type, player);
//         break;

//     //for dunks. matches "makes dunk" or "makes 'word' dunk"
//     case /(?<=makes (((\w|\W)*\s)*))dunk/g.test(play):
//         console.log(`the following play returns as a make \n ${play}`);
//         stat = "make";
//         type = "dunk";
//         player = ballHandler;
//         console.log(
//             `\nstat:${stat} \ntype:${type}\nplayer credited${player}`
//         );
//         addToDb(event, type, player);
//         break;
//     //for missed dunks
//     case /(?<=misses (((\w|\W)*\s)*))dunk/g.test(play):
//         console.log(`the follwoing play returns as a miss \n ${play}`);
//         stat = "miss";
//         type = "dunk";
//         player = ballHandler;
//         console.log(
//             `\nstat:${stat} \ntype:${type}\nplayer credited${player}`
//         );
//         addToDb(event, type, player);
//         break;
//     //matches "makes 'any set of characters' layup"
//     case /(?<=makes (((\w|\W)*\s)*))layup/g.test(play):
//         stat = "miss";
//         type = "layup";
//         player = ballHandler;
//         console.log(
//             `\nstat:${stat} \ntype:${type}\nplayer credited${player}`
//         );
//         addToDb(event, type, player);
//         break;
//     //matches "misses 'any set of characters' layup"
//     case /(?<=misses (((\w|\W)*\s)*))layup/g.test(play):
//         console.log(`the following play returns as a miss \n ${play}`);
//         stat = "miss";
//         type = "layup";
//         player = ballHandler;
//         console.log(
//             `\nstat:${stat} \ntype:${type}\nplayer credited${player}`
//         );
//         addToDb(event, type, player);
//         break;
//     //match string turnover or travel
//     case /turnover|traveling/g.test(play):
//         console.log(`the following play returns as a turnover \n ${play}`);
//         stat = "TO";
//         type = "offense";
//         player = ballHandler;
//         console.log(
//             `\nstat:${stat} \ntype:${type}\nplayer credited${player}`
//         );
//         addToDb(event, type, player);
//         break;
//     //match string "steal"
//     case /steal/g.test(play):
//         console.log(`the following play returns as a steal \n ${play}`);

//         stat = "steal";
//         type = "defense";
//         player = OtherPlayerInvolved;
//         console.log(
//             `\nstat:${stat} \ntype:${type}\nplayer credited${player}`
//         );
//         addToDb(event, type, player);
//         break;
//     //match phrase defensive rebound
//     case /(\w*)defensive\srebound/g.test(play):
//         console.log(
//             `the following play returns as a defensive rebound \n ${play}`
//         );

//         stat = "rebound";
//         type = "defense";
//         player = ballHandler;
//         console.log(
//             `\nstat:${stat} \ntype:${type}\nplayer credited${player}`
//         );
//         addToDb(event, type, player);
//         break;
//     //match phrase "offensive rebound"
//     case /(\w*)offensive\srebound/g.test(play):
//         console.log(
//             `the following play returns as an offensive rebound \n ${play}`
//         );

//         stat = "rebound";
//         type = "defense";
//         player = ballHandler;
//         console.log(
//             `\nstat:${stat} \ntype:${type}\nplayer credited${player}`
//         );
//         addToDb(event, type, player);
//         break;
//     //match fouls that arent techs
//     case /(?<!technical\s)foul/g.test(play):
//         console.log(
//             `the following play returns as a non  technical foul \n ${play}`
//         );

//         stat = "foul";
//         type = "personal";
//         player = ballHandler;
//         console.log(
//             `\nstat:${stat} \ntype:${type}\nplayer credited${player}`
//         );
//         addToDb(event, type, player);
//         break;
//     //match technical fouls
//     case /(?<=technical\s)foul/g.test(play):
//         console.log(
//             `the following play returns as a technical foul \n ${play}`
//         );
//         stat = "foul";
//         type = "technical";
//         player = ballHandler;
//         console.log(
//             `\nstat:${stat} \ntype:${type}\nplayer credited${player}`
//         );
//         addToDb(event, type, player);

//         break;
//     //match blocks
//     case /block/g.test(play):
//         stat = "block";
//         type = "defense";
//         player = ballHandler;
//         addToDb(stat, type, player);
// }

//------------------------------------LEGACY CODE-----------------------------------
// getQuarter = () => {
//     console.log("getting quarter");
//     result.quarter = lastPLay.quarter | "1";
//     console.log(`quarter is: ${result.quarter}`);
// };
// getTime = $ => {
//     $(".time-stamp").each(function(i, element) {
//         playCounter++;
//         if (playCounter < lastPLay) {
//             return;
//         } else {
//             //create empty object that will become our new data row
//             console.log("running get time");
//             let event = $(element);
//             result.time = event.text();
//             console.log("the time is " + time);
//             getPlay($);
//             //the name should be the first two words in the string
//             // let ballHandler = play.split(" ").slice(0, 2);
//             // //create key in the object called time and set it to the times stamp
//             // result.time = event.attr(".time-stamp").text();
//             // //create a key in the object called score and set it to the combined score
//             // result.score = event.attr(".combined-score").text();
//             // isPlay(ballHandler, result);

//             //set the date of the game
//             //set the game matchup}
//         }
//     });
// };

// isPlay = (ballHandler, result) => {
//     if (
//         /foul|make|miss|(?<!clock\s)turnover|(?<!team)\srebound|assist|steal|block/g.test(
//             play
//         )
//     ) {
//         console.log(`this a play`);
//         console.log("getting MAtchup");
//         getMatchup($);

//         //in the case wherer no none is attributed bc its a live game end the search and dont plus into db
//     } else {
//         console.log(
//             `the follwing is not a play we track. getting next play: ${play}`
//         );
//     }
// };

// getMatchup = $ => {
//     //determine the teams and matchup
//     $(".mediaList").each(function(i, element) {
//         //should get "teamAcronym vs otherAcronym videos"
//         let matchup = $(element)
//             .find("h1")
//             .text()
//             .split(" ");
//         result.homeTeam = matchup[0];
//         result.awayTeam = matchup[2];
//         result.matchup = matchup.slice(0, 2);
//         console.log(matchup);
//     });
// };
