import Swal from 'sweetalert2';

/* eslint-disable no-magic-numbers */

const containerInfo = document.getElementsByClassName('superheroe-content')[0];
const button = document.getElementById('sortBtn');
const img = document.createElement('img');
const pName = document.getElementsByTagName('p')[0];

button.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        const myToken = 3119348995037520;
        const characterApi = `https://superheroapi.com/api.php/${myToken}`;
        const characterId = Math.floor(Math.random() * 732) + 1;
        const characterInfoApi = `${characterApi}/${characterId}/image`;
        const response = await fetch(characterInfoApi);
        const data = await response.json();
        img.src = data.url;
        containerInfo.insertAdjacentElement('afterbegin', img);
        pName.innerHTML = data.name;
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: 'Tente novamente!',
            icon: 'error',
            confirmButtonText: 'OK!',
        });
    }
});
