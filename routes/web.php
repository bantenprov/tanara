<?php

Route::get('{path}', function () {
    return view('welcome');
})->where('path', '(.*)');
