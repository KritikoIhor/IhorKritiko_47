const table = document.createElement('table');
table.classList.add('table');

let count = 1;
for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < 10; j++) {
        let td = document.createElement('td');
        td.append(count);
        tr.append(td)
        count++;
    }

    table.append(tr);
}

document.body.append(table);