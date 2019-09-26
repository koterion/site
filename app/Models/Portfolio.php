<?php

namespace App\Models;

use App\Models\Scopes\InOrderScope;
use App\Models\Scopes\StatusScope;
use App\Traits\Models\HasScopes;
use TCG\Voyager\Models\Post;

class Portfolio extends Post
{
    use HasScopes;

    protected $table = 'portfolios';

    protected $translatable = ['title', 'description', 'content'];

    protected static function boot()
    {
        parent::boot();

        self::bindGlobalScopes([
            new StatusScope(),
            new InOrderScope(),
        ]);
    }
}
