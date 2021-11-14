
function injectCss(file = 'style.css') {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      let stl = document.createElement('style');
      stl.innerHTML = data;
      document.head.appendChild(stl);
    });
}

function injectAll() {
  let links = document.getElementsByTagName('link');
  for (stl of links) {
    injectCss(stl.href);
  }
}

window.onload = injectAll;