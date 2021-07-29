const myHeaders = new Headers(); myHeaders.append("X-eBirdApiToken", "cbf0pmjd3n1t");
const requestOptions = { method: 'GET', headers: myHeaders, redirect: 'follow' };

export const getBirds = (currentState) => {
  return fetch(`https://api.ebird.org/v2/data/obs/US-${currentState}/recent`, requestOptions)
  .then(response => response.json())
}

export const getImages = (birdName, num) => {
  return fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=50906f9c24e50a02f0d6034a3c6df6d7&per_page=${num}&format=json&nojsoncallback=1&sort=relevance&text=${birdName}`)
    .then(response => response.json())
}
