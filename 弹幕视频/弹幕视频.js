const input = document.querySelector("input");
const btn = document.querySelector("button");
const color = document.querySelector(".color");
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

var nowColor = color.value;
var time = 3;
var texts = [];
canvas.width = 500;
canvas.height = 200;

color.addEventListener('change',()=>{
    nowColor = color.value;
})
btn.addEventListener('click',()=>{
    let nowTxt = input.value;
    if(nowTxt!=''){           
     input.value = '';
     
     texts.push({
         txt:nowTxt,
         x:canvas.width,
         y:Math.random()*(canvas.height-16)+16,
         color:nowColor
     })            
    }        
})
input.addEventListener('keydown',e=>{
     if(e.keyCode==13){
          btn.click();
     }
})
function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
 
        for(let i=0;i<texts.length;i++){                
            texts[i].x -= 1;
            if(texts[i].x<-500) texts.splice(i,1);
        }

    texts.forEach(item=>{
        ctx.font = "16px Arial";
        ctx.fillStyle = item.color;
        ctx.fillText(item.txt,item.x,item.y);
    })       
    window.requestAnimationFrame(update);
}
update();


