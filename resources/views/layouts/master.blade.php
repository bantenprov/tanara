@php
$polyfills = [
    'Promise',
    'Object.assign',
    'Object.values',
    'Array.prototype.find',
    'Array.prototype.findIndex',
    'Array.prototype.includes',
    'String.prototype.includes',
    'String.prototype.startsWith',
    'String.prototype.endsWith',
];
@endphp
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Tanara</title>

    <link rel="icon" href="{{ asset('favicon.ico') }}">

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('fonts/font-awesome/css/font-awesome.min.css') }}">
</head>
<body>

    <div id="app"></div>

    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features={{ implode(',', $polyfills) }}"></script>
    <script async src="{{ asset('js/app.js') }}"></script>
</body>
</html>
