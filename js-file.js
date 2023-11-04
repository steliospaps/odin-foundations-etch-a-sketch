function randomColor(){
  const maxLight=200;//max 256
  const r = Math.floor(Math.random()*maxLight);
  const g=Math.floor(Math.random()*maxLight);
  const b=Math.floor(2*maxLight-r-g)/2;//emulate YUV (poor man's approximation)
  //correct would be 
  return `#${hex2(r)}${hex2(g)}${hex2(b)}`;

}
function blackColor(){
  return 'black';
}
function hex2(number){
  const str=number.toString(16);
  return str.length<2? '0'+str:str;
}
function additiveColor(div){
  const color = div.style.backgroundColor;
  if(color==='black'){
    return color;
  }
  let firstColor=255;
  if(color && color.match("^rgb\\([0-9]+, [0-9]+, [0-9]+\\)$")){
    firstColor=parseInt(color.replace(/[^0-9,]*/g,"").split(",")[0]);
    
  }
  const targetColor=Math.max(0,Math.floor(firstColor-25));
  console.log(`color=${color} targetColor=${targetColor}`)
  return `#${hex2(targetColor)}${hex2(targetColor)}${hex2(targetColor)}`;
  
}

let colorfunc=blackColor;

function paintCell(event){
 
  const div=event.target
  div.style.backgroundColor=colorfunc(div);

}
function init(size){
  const container = document.querySelector('#container');
  while(container.firstChild){
    container.removeChild(container.lastChild);
  }
  for(r=0;r<size;r++){
    const row = document.createElement('div');    
    row.classList.add("row")
    for(c=0;c<size;c++){
      const cell=document.createElement('div');
      //cell.textContent=`${r}_${c}`;
      cell.classList.add("cell");
      cell.onmouseover=(paintCell);
      row.appendChild(cell);
    }
    container.appendChild(row)
  }

}


init(16);

document.querySelector('#btSetSize').addEventListener('click',e=>{
  const size=prompt("Set GridSize (10-100)");
  if(size<10){
    init(10)
  }else if(size>100){
    init(100)
  }else{
    init(size)
  }
})

document.querySelector('#colorType').onchange=ev=>{
  console.log(ev)
  if(ev.target.value === 'black'){
    colorfunc=blackColor;
  }else if(ev.target.value === 'random'){
    colorfunc=randomColor
  }else if(ev.target.value==='additive'){
    colorfunc=additiveColor;
  }
};
  