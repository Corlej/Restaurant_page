import { updateContent, updateHeroClass, updateHeroImg } from './page-load.js';

export const homeHeroImg = `url(../src/img/homeHero.jpg)`;
export const homeContent = ``;
export const homeHeroClasses = ['hero', 'home'];

let homeButton = document.querySelectorAll('.homeButton');

homeButton.forEach(button => {
    button.addEventListener('click', function() {
        updateContent(homeContent);
        updateHeroImg(homeHeroImg);
        updateHeroClass(...homeHeroClasses);
    });
});

