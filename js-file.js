function init(){
  const container = document.querySelector('#container');
  const size=16;
  for(r=0;r<size;r++){
    const row = document.createElement('div');
    for(c=0;c<size;c++){
      const cell=document.createElement('div');
      cell.textContent=`${r}_${c}`;
      row.appendChild(cell);
    }
    container.appendChild(row)
  }
}

init();