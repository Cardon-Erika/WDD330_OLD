'use strict'

const form = document.forms[0];
class Item {
    constructor(name) {
        this.name = name;
    }
}

const controller = {
    watch(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.add(form.name.value);
        }, false);
    },
    add(name) {
        const item = new Item(name);
        view.render(item);
    }
};

const view = {
    render(item) {
        const list = document.getElementById('buildList');
        const li = document.createElement('li');
        li.innerHTML = "<input type='checkbox'>" + item.name + "<button type='submit'>X</button>";
        list.appendChild(li);
        form.name.value = '';
    }
};

controller.watch(form);