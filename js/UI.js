

export class UI{
    constructor(){}
    showGames(gameList){
        let box = ``;
        for(const game of gameList){
            box += `
                <div class="game-card col-md-6 col-lg-4 col-xl-3 px-3 my-3">
                    <div class="inner h-100">
                        <div class="p-3 rounded-top-3 border border-1 h-85 border-dark">
                            <img src="${game.thumbnail}" alt="${game.title}" class="w-100">
                            <div class="d-flex justify-content-between align-items-center pt-3">
                                <h5 class="font-size-14">${game.title}</h5>
                                <button class="btn btn-primary btn-sm">Free</button>
                            </div>
                            <p class="text-center text-secondary m-0">${game.short_description.split(' ').splice(0,8).toString()}</p>
                        </div>
                        <div class="d-flex justify-content-between rounded-bottom-3 align-items-center border border-1 border-dark p-3">
                            <h5 class="rounded-5 px-2 bg-darkGray m-0 font-size-11 fw-bolder">${game.genre}</h5>
                            <h5 class="rounded-5 px-2 bg-darkGray m-0 font-size-11 fw-bolder">${game.platform}</h5>
                        </div>
                    </div>
                </div>
            `
        }
        return box;
    }

    showGameDetails(gameDetails){
        let box = ``;

        box = `
            <div class="header d-flex justify-content-between">
                <h3>Details Game</h3>
                <button class="btn text-secondary closeDetails p-0"><i class="fa-solid fa-xmark fs-2"></i></button>
            </div>
            <div class="row my-4">
                <div class="game-image col-md-4 pe-2">
                    <img src="${gameDetails.thumbnail}" alt="${gameDetails.title}" class="w-100">
                </div>
                <div class="game-info mt-3 mt-md-0 col-md-8 ps-2">
                        <h3>Title: ${gameDetails.title}</h3>
                        <ul class="list-unstyled">
                            <li class="mb-3">Category: <span class="bg-info text-dark font-size-11 fw-bolder px-2 py-1 rounded-3">${gameDetails.genre}</span></li>
                            <li class="my-3">Platform: <span class="bg-info text-dark font-size-11 fw-bolder px-2 py-1 rounded-3">${gameDetails.platform}</span></li>
                            <li class="my-3">Status: <span class="bg-info text-dark font-size-11 fw-bolder px-2 py-1 rounded-3">${gameDetails.status}</span></li>
                        </ul>
                        <p class="font-size-14">
                            ${gameDetails.description}
                        </p>
                        <button id="showGame" class="btn btn-outline-warning text-white">Show Game</button>
                </div>
            </div>
        `

        return box;
    }
}


// thumbnail: "https://www.freetogame.com/g/582/thumbnail.jpg"
// title: "Tarisland"
// description: "Tarisland is a free-to-play cross-platform MMORPG developed by Level Infinite and Published by Tencent. \r\n\r\nAvailable on PC and mobile devices, the game allows players to easily move between both, taking the game with them when they can’t be at their desk. The game is designed to appeal to players of MMOs like World of Warcraft, offering players nine playable classes and 18 specializations.\r\n\r\nEach class features an extensive talent tree system and can be customized. Players of existing MMOs will be familiar with the standard tank, DPS, and healer lineup, necessary for the game’s classic raid and dungeon system. Explore a vast game world and solve mysteries. Pick up various trades such as gathering, mining, and crafting, and sell your items on the auction house."
// genre: "MMORPG"
// platform: "Windows"
// status: "Live"

// developer: "Level Infinite"
// freetogame_profile_url: "https://www.freetogame.com/tarisland"
// game_url: "https://www.freetogame.com/open/tarisland"
// id: 582
// minimum_system_requirements: {os: 'Windows 10 64-bit', processor: 'Intel Core i5-4590 or AMD FX-8350', memory: '8 GB', graphics: 'Nvidia GeForce GTX 960 or AMD Radeon R9 280', storage: '20 GB'}
// publisher: "Tencent"
// release_date: "2024-06-22"
// screenshots: (3) [{…}, {…}, {…}]
// short_description: "A cross-platform MMORPG developed by Level Infinite and Published by Tencent."







// genre: "MMORPG"
// platform: "PC (Windows)"
// title: "Tarisland"
// short_description: "A cross-platform MMORPG developed by Level Infinite and Published by Tencent."
// thumbnail: "https://www.freetogame.com/g/582/thumbnail.jpg"



// developer: "Level Infinite"
// freetogame_profile_url: "https://www.freetogame.com/tarisland"
// game_url: "https://www.freetogame.com/open/tarisland"
// id: 582
// publisher: "Tencent"
// release_date: "2024-06-22"

