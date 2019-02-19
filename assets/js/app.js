import objectFitImages from 'object-fit-images';
import WebFont from 'webfontloader';

import Home from './renderers/home';

objectFitImages();

WebFont.load({
    google: {
        families: ['IBM Plex Mono:700', 'IBM Plex Sans:300,300i,400,600'],
    },
});

document.addEventListener('DOMContentLoaded', () => {
	// DOM loaded
	if (document.body.classList.contains('home')) {
        new Home();
    }
});