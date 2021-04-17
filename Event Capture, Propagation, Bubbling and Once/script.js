const divs = document.querySelectorAll('div');
const button = document.querySelector('.button');

function logText(e){
    console.log(this.classList.value);
    e.stopPropagation(); //stop bubbling
}

divs.forEach(div => div.addEventListener('click', logText, 
    {capture: false,    // sets trigger from last to first // when true sets triggers from first to last
        once: true  // helps to trigger click once
    }));
    
button.addEventListener('click', () => {
    console.log('Click!!!');
  }, {
    once: true
  });