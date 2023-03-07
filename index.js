const table = document.createElement('table');
let contentOne = 1;
for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    for (let b = 0; b < 10; b++){
        tr.insertAdjacentHTML('beforeend', `<td> ${contentOne++} </td>`);
    }
}
document.querySelector('.tableT').append(table);