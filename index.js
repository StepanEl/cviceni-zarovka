console.log('funguju!');

const bulb = document.querySelector('.bulb');

const toggleBulb = () => {
    bulb.classList.toggle('bulb--on');
};
document.addEventListener('keydown', toggleBulb);


/*kratší verze:;
document.addEventListener('keydown', () => {
    bulb.classList.toggle('bulb--on');
    });