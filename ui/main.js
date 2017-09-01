console.log('Loaded!');
//chage the text of the maintext div
var element=document.getElementById('maintext');
element.innerHTML='This is my webpage';

var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft +10;
    img.style.marginLeft=marginLeft + 'px';
    }
   img.Onclick=function()
{
    var interval = setInterval (moveRight, 100);
};