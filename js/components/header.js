import { headerData } from "../data/headerData.js";

export function header() {

    let navbarHTML = ``;

    for (const item of headerData) {
        if (item.subMenu) {

            let subMenuHTML = '';

            for (const subItem of item.subMenu) {
                if (subItem.subMenu) {

                    let subSubMenuHTML = ``;

                    for (const subSubItem of subItem.subMenu) {
                        if (subSubItem) {
                            subSubMenuHTML += `<li><a href="${subSubItem.href}">${subSubItem.text}</a></li>`
                        }
                    }

                    subMenuHTML += `
                        <li class="sub-dropdown">
                            <a href="${subItem.href}">${subItem.text}<i class="subMenu-angle fa fa-angle-right"></i></a>
                            <div class="sub-dropdown-list underline"><ul>${subSubMenuHTML}</ul></div>
                        </li>`;

                } else {
                    subMenuHTML += `<li class="sub-dropdown underline"><a href="${subItem.href}">${subItem.text}</a></li>`
                }
            };

            navbarHTML += `
            <div class="dropdown">
                <a href="${item.href}">${item.text}<i class="subMenu-angle fa fa-angle-down"></i></a>
                <div class="dropdown-list"><i class="top-angle fa fa-caret-up"></i><ul>${subMenuHTML}</ul></div>
            </div>`;
        } else {
            navbarHTML += `<div class="dropdown"><a href="${item.href}">${item.text}</a></div>`;
        }
    }

    const HTML = `
    <div class="container-header">
        <div class="row">
            <header>
                <div class="col-10 m-1 headeris">
                    <div>
                        <a href = "#"><img class="logo" src="./img/SofaxLogo.webp" alt="logo" ></a>
                    </div>
                    <nav class="navbar">
                        <div class="main-navbar">
                        ${navbarHTML}
                        </div>
                    </nav>
                    <div class="mobile-navbar">
                        <div class="mobile-menu">
                            <div class="menu-header">
                                <i class="menu-return fa fa-angle-left"></i>
                                <span class="menu-title"></span>
                                <i class="menu-close fa fa-times"></i>
                            </div>
                            <div class="mobile-menu-links">
                                ${navbarHTML}
                            </div>
                        </div>
                        <div class="blackout"></div>
                            <button class="pink baltas none480px"> Get started</button>
                            <span class="mobile-menu-trigger fa fa-bars"></span>
                        </div>
                    </div>
            </header>
        </div>
    </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);

    const menuTriggerDOM = document.querySelector('.mobile-menu-trigger');
    const blackoutDOM = document.querySelector('.blackout');
    const mobileMenuDOM = document.querySelector('.mobile-menu');
    const closeBtnDOM = document.querySelector('.menu-close');
    const mobileDropdownDOM = document.querySelectorAll('.mobile-menu .dropdown');
    const mobileDropdownNameDOM = document.querySelectorAll('.mobile-menu-links .dropdown > a')

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


    for (const list of mobileDropdownDOM) {
        list.addEventListener('click', () => {
            const currentDropdownList = list.querySelector('.mobile-menu .dropdown-list');
            if (currentDropdownList) {
                currentDropdownList.classList.add('active');

                for (const name of mobileDropdownNameDOM) {
                    mobileMenuTitle.textContent = name.textContent;
                }
            }

        });

    }
}