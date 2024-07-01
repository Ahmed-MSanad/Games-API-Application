'use strict'

import {Game} from './Games.js'
import {UI} from './UI.js'
import {GameDetails} from './GameDetails.js'

const game = new Game();
const display = new UI();
const gameDetails = new GameDetails();

const spinner = document.querySelector('.spinner');
const gamesSection = document.querySelector('.games-sec');
const placeGamesHere = document.querySelector('.placeGamesHere');
const allLinks = {
    mmorpg : document.querySelector('#mmorpg'),
    shooter : document.querySelector('#shooter'),
    sailing : document.querySelector('#sailing'),
    permadeath : document.querySelector('#permadeath'),
    superhero : document.querySelector('#superhero'),
    pixel : document.querySelector('#pixel'),
}
let currentActive = '';
const gameDetailsSection = document.querySelector('.game-details-sec');
const placeGameDetails = document.querySelector('.placeDetailsHere');


class MainClass{
    constructor(){}

    cardEvents(listOfGames){
        for(let i = 0 ; i < listOfGames.length ; i++){
            placeGamesHere.children[i].addEventListener('click',async function(){
                gamesSection.classList.add('d-none');
                gameDetailsSection.classList.remove('d-none');
                placeGameDetails.innerHTML = spinner.outerHTML;
                let allDetails = await gameDetails.getGameDetails(listOfGames[i].id);
                placeGameDetails.innerHTML = display.showGameDetails(allDetails);
                document.querySelector('.closeDetails').addEventListener('click',function(eventInfo){
                    gamesSection.classList.remove('d-none');
                    gameDetailsSection.classList.add('d-none');
                });
                document.getElementById('showGame').addEventListener('click',function(eventInfo){
                    window.open(listOfGames[i].game_url,'_blank');
                });
            });
        }
    }

    changeActiveSection(newSection){
        allLinks[currentActive].classList.remove('active');
        allLinks[newSection].classList.add('active');
        currentActive = newSection;
    }

    async setUp(){
        currentActive = 'mmorpg';
        const mmorpgGamesList = await game.getGames('mmorpg');
        placeGamesHere.innerHTML = display.showGames(mmorpgGamesList);
        this.cardEvents(mmorpgGamesList);

        for(const category in allLinks){
            allLinks[category].addEventListener('click',async (eventInfo) => {
                if(currentActive != `${category}`){ /* to prevent refetching the data when re-click the current active navLink */
                    placeGamesHere.innerHTML = spinner.outerHTML;
                    const gameList = await game.getGames(`${category}`);
                    placeGamesHere.innerHTML = display.showGames(gameList);
                    this.cardEvents(gameList);
                    this.changeActiveSection(`${category}`);
                }
            });
        }
    }
}

const mainClass = new MainClass;

mainClass.setUp();









// allLinks.mmorpg.addEventListener('click',async function(eventInfo){
//     if(currentActive != 'mmorpg'){
//         placeGamesHere.innerHTML = spinner.outerHTML;
//         const mmorpgGamesList = await game.getGames('mmorpg');
//         placeGamesHere.innerHTML = display.showGames(mmorpgGamesList);

//         cardEvents(mmorpgGamesList);

//         changeActiveSection('mmorpg');
//     }
// });

// allLinks.shooter.addEventListener('click',async function(eventInfo){
//     if(currentActive != 'shooter'){
//         placeGamesHere.innerHTML = spinner.outerHTML;
//         const shooterGamesList = await game.getGames('shooter');
//         placeGamesHere.innerHTML = display.showGames(shooterGamesList);

//         cardEvents(shooterGamesList);

//         changeActiveSection('shooter');
//     }
// });

// allLinks.sailing.addEventListener('click',async function(eventInfo){
//     if(currentActive != 'sailing'){
//         placeGamesHere.innerHTML = spinner.outerHTML;
//         const sailingGamesList = await game.getGames('sailing');
//         placeGamesHere.innerHTML = display.showGames(sailingGamesList);

//         cardEvents(sailingGamesList);

//         changeActiveSection('sailing');
//     }
// });


// allLinks.permadeath.addEventListener('click',async function(eventInfo){
//     if(currentActive != 'permadeath'){
//         placeGamesHere.innerHTML = spinner.outerHTML;
//         const permadeathGamesList = await game.getGames('permadeath');
//         placeGamesHere.innerHTML = display.showGames(permadeathGamesList);

//         cardEvents(permadeathGamesList);

//         changeActiveSection('permadeath');
//     }
// });


// allLinks.superhero.addEventListener('click',async function(eventInfo){
//     if(currentActive != 'superhero'){
//         placeGamesHere.innerHTML = spinner.outerHTML;
//         const superheroGamesList = await game.getGames('superhero');
//         placeGamesHere.innerHTML = display.showGames(superheroGamesList);

//         cardEvents(superheroGamesList);

//         changeActiveSection('superhero');
//     }
// });


// allLinks.pixel.addEventListener('click',async function(eventInfo){
//     if(currentActive != 'pixel'){
//         placeGamesHere.innerHTML = spinner.outerHTML;
//         const pixelGamesList = await game.getGames('pixel');
//         placeGamesHere.innerHTML = display.showGames(pixelGamesList);

//         cardEvents(pixelGamesList);

//         changeActiveSection('pixel');
//     }
// });



