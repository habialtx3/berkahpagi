<?php

namespace App\Http\Controllers;

use App\Models\Stock;
use App\Http\Requests\StockRequest;

class StockController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'Success',
            'data' => Stock::with(['product', 'location'])->latest()->get()
        ]);
    }

    public function store(StockRequest $request)
    {
        $stock = Stock::create($request->validated());

        return response()->json([
            'message' => 'Success',
            'data' => $stock
        ]);
    }
}