const loaderProduct = async () => {

  const response = await fetch('https://rickandmortyapi.com/api/episode');
  const data = await response.json();
  const characterList = new Set();

  for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 10; j++) {
        characterList.add(data.results[i].characters[j]);
      }
  }
  for (const item of characterList) {
  const response1 = await fetch(item);
  const data1 = await response1.json();
  console.log(data1.name + ' ' + data1.species )
  }
  //console.log(typeof characterList);
};
loaderProduct()
