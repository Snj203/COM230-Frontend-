const addItemBtn = document.getElementById('add-item-btn');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const filterAllBtn = document.getElementById('filter-all');

const items = [];

filterAllBtn.addEventListener('click', function () { //filter all
    items.sort();
    itemList.innerHTML = "";
    const names = [];
    for (let i = 0; i < items.length; i++) {
        const j = items[i];
        names.push(j.name);
    }
    names.sort();
    for (let i = 0; i < names.length; i++) {
        const li = document.createElement('li');
        li.textContent = names[i];
        itemList.appendChild(li)
        itemInput.value = "";
    }
});

addItemBtn.addEventListener('click', function () {
    const itemName = itemInput.value.trim(); // Получаем текст из input

    if (itemName !== "") {
        const newItem = {
            name: itemName,
            purchased: false
        };

        items.push(newItem);

        const li = document.createElement('li');
        li.textContent = itemName;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', function () {
            itemList.removeChild(li)    //*
        });

        li.appendChild(deleteBtn);
        itemList.appendChild(li)  //*

        itemInput.value = "";
    } else {
        alert("Please enter an item name.");
    }

});
