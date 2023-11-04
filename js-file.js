function getColor(){
  const maxLight=200;//max 256
  const r = Math.floor(Math.random()*maxLight);
  const g=Math.floor(Math.random()*maxLight);
  const b=Math.floor(2*maxLight-r-g)/2;//emulate YUV (poor man's approximation)
  //correct would be 
  return `#${r.toString(16)}${g.toString(16)}`;

}
function paintCell(event){
 
  const div=event.target
  div.style.backgroundColor=getColor();
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