export function mobileNavbar() {
    const menuTriggerDOM = document.querySelector('.mobile-menu-trigger');
    const blackoutDOM = document.querySelector('.blackout');
    const mobileMenuDOM = document.querySelector('.mobile-menu');
    const closeBtnDOM = document.querySelector('.menu-close');
    const mobileDropdownDOM = document.querySelectorAll('.mobile-menu .dropdown');
    const mobileDropdownNameDOM = document.querySelectorAll('.mobile-menu-links .dropdown > a');


    const mobileMenuTitle = document.querySelector('.menu-title')

    menuTriggerDOM.addEventListener('click', () => {
        blackoutDOM.classList.add('active')
        mobileMenuDOM.classList.add('active')
    });

    blackoutDOM.addEventListener('click', () => {
        blackoutDOM.classList.remove('active')
        mobileMenuDOM.classList.remove('active')
    })

    closeBtnDOM.addEventListener('click', () => {
        blackoutDOM.classList.remove('active')
        mobileMenuDOM.classList.remove('active')
    })

    const menuReturnDOM = document.querySelector('.menu-return');

    menuReturnDOM.addEventListener('click', () => {
        const activeDropdowns = document.querySelectorAll('.mobile-menu .dropdown-list.active');
        for (const dropdown of activeDropdowns) {
            dropdown.classList.remove('active');
        }

        mobileMenuTitle.textContent = '';
    });


    for (const list of mobileDropdownDOM) {
        list.addEventListener('click', () => {
            const currentDropdownList = list.querySelector('.dropdown-list');
            const dropdownName = list.querySelector('a');

            if (currentDropdownList) {
                currentDropdownList.classList.add('active');
            }

            if (dropdownName) {
                mobileMenuTitle.textContent = dropdownName.textContent;
            }
        });
    }
}