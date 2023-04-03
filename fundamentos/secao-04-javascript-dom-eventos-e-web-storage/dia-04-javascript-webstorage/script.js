const backgroundButtom = () => {
  const backgroundOptions = document.getElementsByClassName('background-options');
  const body = document.getElementsByTagName('bobdy')[0];

  for (let index = 0; index < backgroundOptions.length; index += 1) {
    backgroundOptions[index].addEventListener('click', (event) => {
      body.style.backgroundColor = event.target.innerHTML;
    });
  }
};

backgroundButtom();