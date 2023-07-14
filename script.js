const btn=document.querySelector('button');
const body=document.querySelector('body');
const color=['deeppink','skyblue','red',,'yellow','blue'];
body.style.backgroundColor="deepskyblue"
document.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
});