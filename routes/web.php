<?php

Route::get('/', function () {
    return view('pages.landing-page.home.index');
});

Route::get('admin', function () {
    return view('pages.admin-page.home.index');
});

Route::get('sign-in', function () {
    return view('pages.auth-page.sign-in');
});

Route::get('sign-up', function () {
    return view('pages.auth-page.sign-up');
});
