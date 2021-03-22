export { } //Isola o escopo desse arquivo para não misturar com outros Scripits 


type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';

type RecordItem = {

  gameTitle: string
  gamePlatform: Platform;
  genreName: string;

}

type Game = {

  id: number;
  title: string;
  platform: Platform;

}

const gameList: Game[] = [

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


const recordItemList: RecordItem[] = [
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
]


const buildBarSeries = (games: Game[], record: RecordItem[]) => {

  const mappedGame = games.map((game) => {

    const filteredGames = record.filter(record => {
      return record.gameTitle === game.title && record.gamePlatform === game.platform
    })


    return {
      x: `${game.title} | ${game.platform}`,
      y: filteredGames.length
    }
  })

  const sortGames = mappedGame.sort((a, b) => b.y - a.y)

  return sortGames.slice(0, 3); // Mostra apenas os elementos da lista que estão nesse intervalo
}


const getPlatformChartData = (records: RecordItem[]) => {

  const platforms = ['PC', 'PLAYSTATION', 'XBOX'];

  const series = platforms.map(platform => {

    const filteredGames = records.filter(record => {
      return record.gamePlatform === platform;

    });
    return filteredGames.length;

  })


  return {
    labels: platforms,
    series: series
  }

}
getPlatformChartData(recordItemList);

console.log('Grafico de Barras:');
console.log(buildBarSeries(gameList, recordItemList));

console.log('Gráfico de Rosca:(Plataformas)');
console.log(getPlatformChartData(recordItemList));

