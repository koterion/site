<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Koterion</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="{{asset('css/loader.css')}}">
</head>
<body class="home">
<main id="app">
    <vue-loader></vue-loader>
    <vue-header></vue-header>
    <router-view></router-view>
    <vue-footer></vue-footer>
</main>
<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{asset('css/general.css')}}">
<link rel="stylesheet" href="{{asset('css/main.css')}}">
<script src="{{asset('js/app.js')}}"></script>
</body>
</html>
