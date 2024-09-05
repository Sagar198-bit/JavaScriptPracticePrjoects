const PlaceHolder = document.getElementById('texxt');
const text = document.getElementById('Press');

PlaceHolder.addEventListener('keydown' ,(event)=>{
    text.innerHTML = `${event.code}`
    text.style.color = '#ffff00'
})