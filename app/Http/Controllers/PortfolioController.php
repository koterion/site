<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;

class PortfolioController extends Controller
{
    public function all()
    {
        $collection = Portfolio::all()->sortBy('order');
        $group = $collection->groupBy('year')->sortKeys();

        $concatenated = collect([
            'group'      => $group,
            'collection' => $collection,
            'years'      => $group->keys(),
        ]);

        return $concatenated;
    }

    public function one($id)
    {
        $portfolio = Portfolio::all()->sortBy('id');
        $current = $portfolio->firstWhere('id', $id);

        if ($current) {
            $previous = $portfolio->filter(function ($value, $key) use ($id, $current) {
                return $value->id < $id && $value->year === $current->year;
            })->max('id');

            $next = $portfolio->filter(function ($value, $key) use ($id, $current) {
                return $value->id > $id && $value->year === $current->year;
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
