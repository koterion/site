<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Koterion</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <meta property="og:title">
    <meta name="twitter:title">
    <meta name="description"/>
    <meta itemprop="description">
    <meta property="og:description">
    <meta name="twitter:description">
    <meta name="robots" content="index,follow">
    <link rel="stylesheet" href="{{asset('css/loader.css')}}">
</head>
<body>
<main id="app">
    <vue-loader></vue-loader>
    <vue-transfer></vue-transfer>
    <vue-header></vue-header>
    <router-view></router-view>
    <vue-footer></vue-footer>
</main>
<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{asset('css/general.css')}}">
<link rel="stylesheet" href="{{asset('css/main.css')}}">
<script src="{{asset('js/vue.js')}}"></script>
</body>
</html>
