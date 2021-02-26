const input = document.querySelector('input');
const sectionBtn = document.querySelector('.section__btn');
const listTasc = document.querySelector('ul');
let ok = document.querySelectorAll('.ok');
let del = document.querySelectorAll('.del');


sectionBtn.addEventListener('click', () => {
    const newTask = input.value;

    listTasc.insertAdjacentHTML('beforeend', ` <li><span class="ok ">&#10003</span><span class="tasc">${newTask}</span> <span class="del ">&#10008</span></li>`);
    input.value = '';

    ok = document.querySelectorAll('.ok');
    del = document.querySelectorAll('.del');

    ok.forEach(elem => {
        elem.addEventListener('click', () => {
            elem.closest('li').classList.add('finish');
        });
    })

    del.forEach(elem => {
        elem.addEventListener('click', () => {
            elem.closest('li').remove();
        });
    })

})