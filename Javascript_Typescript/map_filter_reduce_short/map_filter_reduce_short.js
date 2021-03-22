"use strict";
exports.__esModule = true;
var gameList = [
    {
        "id": 1,
        "title": "The Witcher 3",
        "platform": "XBOX"
    },
    {
        "id": 2,
        "title": "The Witcher 3",
        "platform": "PLAYSTATION"
    },
    {
        "id": 3,
        "title": "Overwatch",
        "platform": "PC"
    }
];
var recordItemList = [
    {
        "gameTitle": "The Witcher 3",
        "gamePlatform": "PLAYSTATION",
        "genreName": "RPG"
    },
    {
        "gameTitle": "The Witcher 3",
        "gamePlatform": "XBOX",
        "genreName": "RPG"
    },
    {
        "gameTitle": "Overwatch",
        "gamePlatform": "PC",
        "genreName": "Shooter"
    },
    {
        "gameTitle": "Overwatch",
        "gamePlatform": "PC",
        "genreName": "Shooter"
    },
    {
        "gameTitle": "The Witcher 3",
        "gamePlatform": "PLAYSTATION",
        "genreName": "RPG"
    },
];
var buildBarSeries = function (games, record) {
    var mappedGame = games.map(function (game) {
        var filteredGames = record.filter(function (record) {
            return record.gameTitle === game.title && record.gamePlatform === game.platform;
        });
        return {
            x: game.title + " | " + game.platform,
            y: filteredGames.length
        };
    });
    var sortGames = mappedGame.sort(function (a, b) { return b.y - a.y; });
    return sortGames.slice(0, 3); // Mostra apenas os elementos da lista que estão nesse intervalo
};
var getPlatformChartData = function (records) {
    var platforms = ['PC', 'PLAYSTATION', 'XBOX'];
    var series = platforms.map(function (platform) {
        var filteredGames = records.filter(function (record) {
            return record.gamePlatform === platform;
        });
        return filteredGames.length;
    });
    return {
        labels: platforms,
        series: series
    };
};
getPlatformChartData(recordItemList);
console.log('Grafico de Barras:');
console.log(buildBarSeries(gameList, recordItemList));
console.log('Gráfico de Rosca:(Plataformas)');
console.log(getPlatformChartData(recordItemList));
