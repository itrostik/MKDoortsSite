import "../styles/style.scss"


const arrow = document.querySelector('.header-top__menu-arrow')
const menuDoors = document.querySelector('.menu-doors')
const menu = document.querySelector('.header-top__menu')
const menuItem = document.querySelectorAll('.header-top__menu-item:not(.menu-doors)')

menuDoors.addEventListener('click', () => {
        if (arrow.style.transform === 'matrix(1, 0, 0, -1, 0, 0)') {
            arrow.style.transform = 'matrix(1, 0, 0, 1, 0, 0)'
            menu.classList.remove('--open')
            for (let i = 0; i < menuItem.length; i++) {
                // menuItem[i].style.display = 'none';
            }
        }
        else {
            arrow.style.transform = 'matrix(1, 0, 0, -1, 0, 0)'
            for (let i = 0; i < menuItem.length; i++) {
                menuItem[i].style.display = 'flex'
            }
            menu.classList.add('--open')
        }
    }
)


const arrowInfo = document.querySelector('.arrowInfo')
const button = document.querySelector('.info-text-body')
const storeBlocks = document.querySelector('.header-top__info-blocks')

button.addEventListener('click', () => {
    if (arrowInfo.style.transform === 'matrix(1, 0, 0, -1, 0, 0)') {
        arrowInfo.style.transform = 'matrix(1, 0, 0, 1, 0, 0)'
        storeBlocks.style.animation = '0.7s forwards close';
    }
    else {
        arrowInfo.style.transform = 'matrix(1, 0, 0, -1, 0, 0)'
        storeBlocks.classList.add('open');
        storeBlocks.style.animation = '0.7s forwards open';
    }
})



const arrowCompany = document.querySelector('.item-arrow')
const arrowCompanyBlock = document.querySelector('.company-arrow')
const blockCompany = document.querySelector('.list-item-company')


arrowCompanyBlock.addEventListener('click', () => {
    if (arrowCompany.style.transform === 'matrix(1, 0, 0, -1, 0, 0)') {
        arrowCompany.style.transform = 'matrix(1, 0, 0, 1, 0, 0)'
        blockCompany.style.animation = '0.2s forwards closeCompany'
    }
    else {
        arrowCompany.style.transform = 'matrix(1, 0, 0, -1, 0, 0)'
        blockCompany.style.display = 'flex'
        blockCompany.classList.add('-open')
        blockCompany.style.animation = '0.2s forwards openCompany'
    }
})




const bottomMenu = document.querySelector('.header-bottom-menu')

const bottom = bottomMenu.parentNode

const buttonSearch = document.querySelector('.header-bottom-search')
const buttonSearchInput = document.querySelector('.inputSearch')
const buttonIconSearch = document.querySelector('.uil-search');
const buttonIconCross = document.createElement('i');
buttonIconCross.classList.add('uil')
buttonIconCross.classList.add('uil-times')
bottomMenu.style.display = 'block'
buttonSearch.addEventListener('click', () => {
    if (bottomMenu.style.display === 'block') {
        bottomMenu.style.display = 'none'
        buttonSearch.removeChild(buttonIconSearch)
        buttonSearch.append(buttonIconCross)
        buttonSearchInput.style.display = 'block';
    }
    else{
        bottomMenu.style.display = 'block'
        buttonSearchInput.style.display = 'none';
        buttonSearch.removeChild(buttonIconCross)
        buttonSearch.append(buttonIconSearch)
    }
})

// console.log(bottom.children[1] === bottomMenu)
// console.log((bottomMenu.style.display === 'block'))
// console.log(bottom)