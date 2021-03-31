const checkboxes = document.querySelectorAll('.container input[\n\
type = "checkbox"');

let lastChecked;

function handleCheck(e){
    let inBetween = false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
                console.log('yes');
            }
            if(inBetween){
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));