<?php
namespace App\Traits\Controllers;

use Illuminate\Pagination\LengthAwarePaginator;

trait HasPagination
{
    /**
     * @param LengthAwarePaginator $paginator
     * @return bool
     */
    protected function isPageExist(LengthAwarePaginator $paginator) : bool
    {
        if($paginator->currentPage() > $paginator->lastPage()){
            return false;
        }else{
            return true;
        }
    }
}