<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
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
        $collection = Portfolio::all()->sortBy('year')->groupBy('year');

        return [
            'data'  => $collection,
            'years' => $collection->keys()
        ];
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
