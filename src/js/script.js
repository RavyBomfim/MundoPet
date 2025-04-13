window.onload = function() {

    const menu_button = document.querySelector('#menu-mobile');
    const menu = document.querySelector("#menu ul");

    menu_button.addEventListener('click', function(event) {
        menu.classList.toggle('menu');

        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        const menu_clicked = menu.contains(event.target);
        const menu_button_clicked = menu_button.contains(event.target);

        if (!menu_clicked && !menu_button_clicked) {
            menu.classList.remove('menu');
        }
    });

};