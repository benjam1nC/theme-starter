<?php

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style( 'styles', get_template_directory_uri() . '/dist/app.css', [ ] );
    wp_deregister_script( 'jquery' );
    wp_enqueue_script( 'scripts', get_template_directory_uri() . '/dist/app.js', [ ] );
} );

add_action( 'init', function () {
    register_nav_menu( 'main-menu', 'Menu Principal' );
    register_nav_menu( 'footer-menu', 'Menu bas de page' );
} );

add_theme_support( 'soil-clean-up' );
add_theme_support( 'soil-jquery-cdn' );
add_theme_support( 'soil-js-to-footer' );
add_theme_support( 'soil-nav-walker' );