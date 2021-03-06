const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const checkAll = document.querySelector('#check');
const clearAll = document.querySelector('#clear');
const uncheckAll = document.querySelector('#uncheck');
  
function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function removeItems(){
    let plates = document.querySelector('.plates');
    plates.innerHTML = '';
    localStorage.clear();
    window.location.reload(true);
}

function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate, i) => {
        return`
            <li>
                <input type = "checkbox" name = "allChecks" data-index = ${i} id = "item${i}" 
                    ${plate.done ? 'checked' : ''}/>
                <label for = "item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

function checkEvery(){
    var items = document.getElementsByName('allChecks');
        for (var i = 0; i < items.length; i++) {
            if (items[i].type === 'checkbox')
                items[i].checked = true;
        }
}

function unCheckEvery(){
    var items = document.getElementsByName('allChecks');
        for (var i = 0; i < items.length; i++) {
            if (items[i].type === 'checkbox')
                items[i].checked = false;
        }
}

function toggleDone(e){
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}
  
addItems.addEventListener('submit', addItem);

clearAll.addEventListener('click', removeItems);

checkAll.addEventListener('click', checkEvery);

uncheckAll.addEventListener('click', unCheckEvery);

itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
