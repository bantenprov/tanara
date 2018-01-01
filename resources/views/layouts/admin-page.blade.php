<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title')</title>

        <link rel="icon" href="{{ asset('favicon.ico') }}">

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" href="{{ asset('fonts/font-awesome/css/font-awesome.min.css') }}">
    </head>
    <body class="admin-page">
        @include('includes.admin-page.navbar')

        <div class="row no-gutters">
            <div class="col-md-4 col-lg-3 admin-sidebar">
                @include('includes.admin-page.sidebar')
            </div><!-- /col -->
            <div class="col-md-8 col-lg-9 admin-main">
                <div class="admin-main-content">
                    @yield('content')
                </div>
            </div><!-- /col -->
        </div><!-- /.row -->

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
