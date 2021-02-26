const input = document.querySelector('input');
const sectionBtn = document.querySelector('.section__btn');
const listTasc = document.querySelector('ul');



sectionBtn.addEventListener('click', () => {
    const newTask = input.value;

    listTasc.insertAdjacentHTML('beforeend', ` <li><span class="ok ">&#10003</span><span class="tasc">${newTask}</span> <span class="del ">&#10008</span></li>`);
    input.value = '';

    let tasc = document.querySelectorAll('.tasc'),
        ok = document.querySelectorAll('.ok'),
        del = document.querySelectorAll('.del');

    ok.forEach(elem => {
        elem.addEventListener('click', () => {
            elem.closest('li').classList.toggle('finish');
        });
    })

    del.forEach(elem => {
        elem.addEventListener('click', () => {
            elem.closest('li').remove();
        });
    })

    tasc.forEach(elem => {
        elem.addEventListener('dblclick', () => {
            elem.innerHTML = prompt('Введите новую задачу');
        });
    })

})