<?php
namespace App\Traits\Models;

use Illuminate\Support\Facades\Route;
use Illuminate\Database\Eloquent\Concerns\HasGlobalScopes;

trait HasScopes
{
    use HasGlobalScopes;

    protected static function bindGlobalScopes(array $scopes)
    {
        if (!is_null($route = Route::current())) {
            $isAdminPanel = $route->getPrefix() == config('voyager.user.redirect') ? true : false;
            if (!$isAdminPanel) {
                foreach ($scopes as $scope) {
                    static::addGlobalScope($scope);
                }
            }
        }
    }
}