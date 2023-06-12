const table = document.createElement('table');
table.classList.add('table');

const fragment = document.createDocumentFragment();

let count = 1;

for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < 10; j++) {
        let td = document.createElement('td');
        td.append(count);
        tr.append(td)
        count++;
    }

    fragment.append(tr);
}

table.append(fragment);
document.body.append(table);