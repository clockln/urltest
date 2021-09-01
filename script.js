window.onload = function(){

const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('nav');

const imgDisplay = document.getElementById('imgdisplay');
 
btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu')

  history.replaceState('','','?param=param');
  const param = location.search
  console.log(param)

  if(imgDisplay.disabled == true){
    imgDisplay.disabled = false;
  }else{
    imgDisplay.disabled = true;
  }
  console.log(imgDisplay.disabled);
});

}



