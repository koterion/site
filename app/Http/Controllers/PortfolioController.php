<?php

namespace App\Http\Controllers;

use App\Model\Portfolio;
use App\Traits\Controllers\HasPagination;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    use HasPagination;

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|\Illuminate\View\View
     */

    public function all(Request $request)
    {
        return Portfolio::all();
    }

    /**
     * @param Request $request
     * @param Portfolio $portfolio
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function one($id)
    {
        return Portfolio::findOrFail($id);
    }
}
