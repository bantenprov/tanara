<?php

Route::get('/', function () {
    return view('welcome');
});

// Route::group(['prefix' => 'api/auth', 'middleware' => ['cas']], function() {
Route::group(['prefix' => 'api/auth'], function() {
	
    Route::get('/server', function () {
        dd($_SERVER);
    });

    Route::get('/login', function () {
        if (cas()->checkAuthentication()) {
			return redirect('/');
		} else {
			cas()->authenticate();
		}
    });

    Route::get('/logout', [ 'middleware' => 'cas.auth', function () {
        cas()->logout();
    }]);

    Route::get('/logged', function () {
        $data = cas()->checkAuthentication();
		return response()->json($data);
    });

    Route::get('/current', function () {
		$data = cas()->checkAuthentication() ? cas()->getCurrentUser() : "";
		return response()->json($data);
    });

    Route::get('/attributes/{key?}', function ($key = null) {
        if (cas()->checkAuthentication()) {
			if ($key) {
				$data = cas()->getAttribute($key);
			} else {
				$data = cas()->getAttributes();
			}
		} else {
			$data = "";
		}
		return response()->json($data);
    });

});
