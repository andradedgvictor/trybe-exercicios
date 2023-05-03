const dogBtn = document.getElementsByClassName('dogBtn')[0];
const catBtn = document.getElementsByClassName('catBtn')[0];
const surpriseBtn = document.getElementsByClassName('surprise-btn')[0];
const pRandom = document.getElementsByTagName('p')[0];
const imgPet = document.createElement('img');
const imageContainer = document.getElementsByClassName('image-container')[0];

dogBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const BASE_URL = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(BASE_URL);
    const data = await response.json();
    imgPet.src = data.message;
    pRandom.innerHTML = '';
    imageContainer.appendChild(imgPet);
});

catBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
    const response = await fetch(BASE_URL);
    const data = await response.json();
    imgPet.src = data[0].url;
    pRandom.innerHTML = '';
    imageContainer.appendChild(imgPet);
});

surpriseBtn.addEventListener('click', (event) => {
    event.preventDefault();
    Promise.any([
        fetch('https://dog.ceo/api/breeds/image/random'),
        fetch('https://api.thecatapi.com/v1/images/search'),
    ])
        .then((response) => response.json())
        .then((data) => {
            let petURL;
            if (data.message) {
                petURL = data.message;
            } else {
                petURL = data[0].url;
            }
            pRandom.innerHTML = '';
            imgPet.src = petURL;
            imageContainer.appendChild(imgPet);
        });
});
