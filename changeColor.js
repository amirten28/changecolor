


let body = document.querySelector('.body')
let color = ['red','blue','green','yellow','white','#7bac68','#dbac68','#dbacc3','#db3dc3','#0e8d40','#b47a4b']

function changeColor(){
 let randomIndex = Math.floor(Math.random() * color.length)   
body.style.backgroundColor = color[randomIndex];

}