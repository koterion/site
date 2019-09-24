<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(\App\Models\Portfolio::class, function (Faker $faker) {
    $author = App\User::first();

    return [
        'title'       => $faker->text(40),
        'author_id'   => !empty($author) ? $author->id : '',
        'content'     => '<p>' . $faker->paragraph(10, true) . '</p>',
        'description' => $faker->paragraph(3, true),
        'video'       => '/video/portfolio.mp4',
        'carousel'    => json_encode(array(
            '/img/portfolio.png',
            '/img/portfolio.png',
            '/img/portfolio.png',
            '/img/portfolio.png',
        )),
        'image'       => '/img/portfolio.png',
        'site'        => $faker->url,
        'year'        => $faker->year($max = 'now'),
    ];
});


