const container=document.querySelector('.container')
const addDiv=document.getElementById("addDivId")

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const getRandomNumber=(max)=>{
    return Math.floor(Math.random()*max)
  }

const createDiv=()=>{
    let newDiv=document.createElement('div')
    newDiv.style.backgroundColor=getRandomColor()
    newDiv.className="newDiv"
    newDiv.id=getRandomColor()
    newDiv.style.left=`${getRandomNumber(window.innerWidth - 120)}px`
    newDiv.style.top=`${getRandomNumber(window.innerHeight - 120)}px`
    newDiv.style.width=`${getRandomNumber(101-20)+20}px`
    newDiv.style.height=`${getRandomNumber(101-20)+20}px`
    container.appendChild(newDiv)
    newDiv.addEventListener('click',(e)=>{
     let removed=e.target
     removed.remove()
    })
}
addDiv.addEventListener('click',createDiv)
