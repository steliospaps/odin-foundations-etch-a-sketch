function paintCell(event){
 
  const div=event.target
  div.style.backgroundColor='blue';
}
function init(){
  const container = document.querySelector('#container');
  const size=16;
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


init();