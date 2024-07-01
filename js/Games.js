export class Game {
    constructor() {}

    async getGames(categoryName) {
        try {
            const response = await fetch(
                `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}`,
                {
                    method: "GET",
                    headers: {
                        "x-rapidapi-key":
                            "bf5641f08emsh45bb281e5024cc9p13a241jsnf07506a87d51",
                        "x-rapidapi-host":
                            "free-to-play-games-database.p.rapidapi.com",
                    },
                }
            );
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }
}
