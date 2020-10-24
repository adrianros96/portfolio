const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
// const header = document.querySelector('.header.container');


const projectItemOdd = document.querySelectorAll('.all-projects .project-item.odd');
const projectItemEven = document.querySelectorAll('.all-projects .project-item.even');

const skillBoxes = document.querySelectorAll('.skill-bottom .skill-item');

const imagee = document.querySelector('.about .col-left');

const observer1 = new IntersectionObserver((entries) =>  {
    entries.forEach((entry) => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 2s forwards ease-out`
        } 
        else {
            entry.target.style.animation = 'none';
        }
    })
})

const observer2 = new IntersectionObserver((entries) =>  {

    entries.forEach((entry) => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim2 2s forwards ease-out`
        } 
        else {
            entry.target.style.animation = 'none';
        }
    })
})

const observer3 = new IntersectionObserver((entries) =>  {

    entries.forEach((entry) => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim3 2s forwards ease-out`
        } 
        else {
            entry.target.style.animation = 'none';
        }
    })
}, {
    threshold: 0.2
})

const observer4 = new IntersectionObserver((entry) =>  {
        if(entry[0].intersectionRatio > 0) {
            entry[0].target.style.animation = `anim4 2s forwards ease-out`
        } 
        else {
            entry[0].target.style.animation = 'none';
        }
})

projectItemOdd.forEach(item => {
    observer1.observe(item);
})

projectItemEven.forEach(item => {
    observer2.observe(item);
})

skillBoxes.forEach(box => {
    observer3.observe(box);
})

observer4.observe(imagee);



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = 'transparent'
    } 
})

menu_item.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobile_menu.classList.remove('active');
    })
})