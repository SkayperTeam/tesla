const arrowDown = document.querySelector('.arrow-down')
const linkItem = document.querySelectorAll('.link__item')
// console.log(linkItem[0]);
// const linkItemUnderline = () => {
//     linkItem[i].classList.remove('link__item_underline')
//     linkItem[i].classList.add('link__item_underline')
// }
// linkItemUnderline()
for (let i = 0; i<linkItem.length; i++) {
    linkItem[i].addEventListener('click', (event) => {
        // console.log(event.target);
    for (let i = 0; i<linkItem.length; i++) {
        linkItem[i].classList.remove('link__item_underline')
        event.target.classList.add('link__item_underline')
    }
    })
}
arrowDown.addEventListener('click', (e) => {
e.preventDefault();
document.querySelector('#down').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
})
})



// const linkItem = document.querySelectorAll('.link__item')

// for (i=0; i<linkItem.length; i++) {
//     linkItem[i].style.border-bottom = '2px';    
// }