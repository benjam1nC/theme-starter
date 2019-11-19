import objectFitImages from 'object-fit-images';

import Home from './renderers/home';

objectFitImages();

document.addEventListener('DOMContentLoaded', () => {
	// DOM loaded
	if (document.body.classList.contains('home')) {
        new Home();
    }
});