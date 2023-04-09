const backgroundColor = () => {
  const options = document.getElementsByClassName('background-options');
  const body = document.getElementsByTagName('body')[0];

  for (let index = 0; index < options.length; index += 1) {
    options[index].addEventListener('click', (event) => {
      const targetButtom = event.target;
      body.style.backgroundColor = targetButtom.innerHTML;
      const color = body.style.backgroundColor;
      localStorage.setItem("backgroundColor", color)
    });
  }
};

const fontColor = () => {
  const options = document.getElementsByClassName('color-options'); 
  const body = document.getElementsByTagName('body')[0];

  for (let index = 0; index < options.length; index += 1) {
    options[index].addEventListener('click', (event) => {
      const targetButtom = event.target;
      body.style.color = targetButtom.innerHTML;
      const color = body.style.color;
      localStorage.setItem("fontColor", color)
    });
  }
};

const fontSize = () => {
  const options = document.getElementsByClassName('font-size-options');
  const body = document.getElementsByTagName('body')[0];

  for (let index = 0; index < options.length; index += 1) {
    options[index].addEventListener('click', (event) => {
      const targetButtom = event.target;
      body.style.fontSize = targetButtom.innerHTML;
      const size = body.style.fontSize
      localStorage.setItem("fontSize", size)
    });
  }
};

const lineHeight = () => {
  const options = document.getElementsByClassName('line-height-options');
  const body = document.getElementsByTagName('body')[0];

  for (let index = 0; index < options.length; index += 1) {
    options[index].addEventListener('click', (event) => {
      const targetButtom = event.target;
      body.style.lineHeight = targetButtom.innerHTML;
      const height = body.style.fontSize;
      localStorage.setItem("lineHeight", height)
    });
  }
};

const fontFamily = () => {
  const options = document.getElementsByClassName('font-family-options');
  const body = document.getElementsByTagName('body')[0];

  for (let index = 0; index < options.length; index += 1) {
    options[index].addEventListener('click', (event) => {
      const targetButtom = event.target;
      body.style.fontFamily = targetButtom.innerHTML;
      const family = body.style.fontFamily;
      localStorage.setItem("fontFamily", family)
    });
  }
};

const initialize = () => {
  const body = document.getElementsByTagName('body')[0];
  const savedBackgroundColor = localStorage.getItem("backgroundColor");
  const savedFontColor = localStorage.getItem("fontColor");
  const savedFontSize = localStorage.getItem("fontSize");
  const savedLineHeight = localStorage.getItem("lineHeight");
  const savedFontFamily = localStorage.getItem("fontFamily");

  if (savedBackgroundColor) {
    body.style.backgroundColor = savedBackgroundColor;
  }
  if (savedFontColor) {
    body.style.color = savedFontColor;
  }
  if (savedFontSize) {
    body.style.fontSize = savedFontSize;
  }
  if (savedLineHeight) {
    body.style.lineHeight = savedLineHeight;
  }
  if (savedFontFamily) {
    body.style.fontFamily = savedFontFamily;
  }
};


window.onload = () => {
  initialize()
  backgroundColor();
  fontColor();
  fontSize();
  lineHeight();
  fontFamily();
  saveBodyStyle();
};



