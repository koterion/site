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
        $collection = Portfolio::all()->sortBy('year');
        $group = $collection->groupBy('year');

        return [
            'group'      => $group,
            'collection' => $collection->sortBy('id'),
            'years'      => $group->keys(),
        ];
    }

    /**
     * @param Request $request
     * @param Portfolio $portfolio
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function one($id)
    {
        $portfolio = Portfolio::all()->sortBy('id');
        $current = $portfolio->firstWhere('id', $id);

        if ($current) {
            $previous = $portfolio->filter(function ($value, $key) use ($id) {
                return $value->id < $id;
            })->max('id');

            $next = $portfolio->filter(function ($value, $key) use ($id) {
                return $value->id > $id;
            })->min('id');

            $concatenated = collect([
                'prev'    => $previous,
                'current' => $current,
                'next'    => $next
            ]);

            return $concatenated;
        }

        abort(404);
    }
}
