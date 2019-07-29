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
        'content'     => $faker->paragraph(10, true),
        'description' => $faker->paragraph(3, true),
        'carousel'    => json_encode(array(
            $faker->imageUrl($width = 640, $height = 480),
            $faker->imageUrl($width = 640, $height = 480),
            $faker->imageUrl($width = 640, $height = 480),
            $faker->imageUrl($width = 640, $height = 480),
        )),
        'image'       => $faker->imageUrl($width = 640, $height = 480),
        'site_url'    => $faker->url,
        'realize_at'  => $faker->date(),
    ];
});


