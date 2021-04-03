const pressed = [];
const secretWord = 'kitty';

window.addEventListener('keyup', (e) =>{
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretWord.length -1, pressed.length -secretWord.length);
    if(pressed.join('').includes(secretWord)){
        console.log('Yes! yes! yes!');
        cornify_add();
    }
    console.log(pressed);
});