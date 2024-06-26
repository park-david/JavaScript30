const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const clear = document.querySelector('.clear')
const check = document.querySelector('.check')
const uncheck = document.querySelector('.uncheck')

function addItem(e) {
    e.preventDefault()
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }

    items.push(item)
    populateList(items, itemsList)
    localStorage.setItem('items', JSON.stringify(items))
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(e) {
    if(!e.target.matches('input')) return; // skip this unless its an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList);
}

function clearList(e) {
    localStorage.clear()
    items.length = 0
    populateList(items, itemsList)
}

function checkAll() {
    items.forEach(item => {
        item.done = true;
    });
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList);
}

function uncheckAll() {
    items.forEach(item => {
        item.done = false;
    });
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList);
}

check.addEventListener('click', checkAll)
uncheck.addEventListener('click', uncheckAll)
clear.addEventListener('click', clearList)
addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)
populateList(items, itemsList)
