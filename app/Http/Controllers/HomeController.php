<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class HomeController extends Controller
{
    public function index(Request $request): View
    {
        $view = 'vue';
        $framework = $request->cookie('framework');

        if ($framework == 'react') {
            $view = 'react';
        };

        return view($view);
    }
}
