<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePortfoliosTable extends Migration
{
    protected static $table = 'portfolios';

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable(self::$table)) {
            Schema::create(self::$table, function (Blueprint $table) {
                $table->increments('id');
                $table->string('title');
                $table->text('description')->nullable();
                $table->text('content')->nullable();
                $table->string('image')->nullable();
                $table->string('carousel')->nullable();
                $table->string('site_url')->nullable();
                $table->unsignedInteger('author_id')->index();
                $table->timestamp('realize_at')->nullable();
                $table->timestamps();
            });
        } else {
            echo 'Table ' . self::$table . ' already exist!';
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(self::$table);
    }
}
