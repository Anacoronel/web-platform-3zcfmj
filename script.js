
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
//controla si se presiona enter//
let textarea=document.getElementById("edit")
textarea.addEventListener('keyup',(e) => {
  logMessage('Key "$(e.key)" released [event: keyup]');
  if(e.key=="Enter"){
    document.getElementById("edit").style.display="none"
 
 }}
);



function cambiar_parrafo() {
  document.getElementById("edit").style.display="block";
  let text= document.getElementById("info").innerText;
  console.log(text);
};
function funcion2(valor){
  document.getElementById("info").innerText=valor;

};
function logMessage(message){
  console.log(message + "<br>");
}
//carga el cont de un arch y lo muestra en parrafo//
function showfile(input){
  let file=input.files[0];
  alert("File name: $(file.name)");
  alert("Last modified: $(file.lastModified)");

  let reader= new FileReader();
  reader.readASText(file);
  reader.onload=function() {
    console.log(reader.result);
    document.getElementById("info").innerText=reader.result;
  };
  reader.onerror= function() {
    console.log(reader.error);
  }
};