function paintCell(event){
 
  const div=event.target
  div.style.backgroundColor='blue';
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


init(32);

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