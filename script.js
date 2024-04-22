
// for menu

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.check');
    const closeButton = document.querySelector('.uncheck');
    const subMenu = document.querySelector('.menu ul');

    menuButton.addEventListener('click', function () {
        subMenu.style.display = 'block';
        menuButton.style.display = 'none';
        closeButton.style.display = 'block';
        closeButton.style.visibility = 'visible';
        subMenu.style.visibility = 'visible';
        subMenu.style.display = 'block';

    });

    closeButton.addEventListener('click', function () {
        menuButton.style.display = 'block';
        closeButton.style.display = 'none';
        closeButton.style.visibility = 'hidden';
        subMenu.style.display = 'none';

    });
});


// form submit
const form = document.querySelector("#sub_btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("Name").value;
    const email = document.getElementById("Email").value;
    const message = document.getElementById("Message").value;
    console.log(name, email, message);

form.reset();
   
})

// news letter

const subscribe = document.querySelector("#news_let");
subscribe.addEventListener("submit", (e) => {
    e.preventDefault();
    const sub_email = document.getElementById("sub_email").value;
    console.log(`News letter: ${sub_email}`);
    subscribe.reset();
})