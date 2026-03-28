<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Models\Stock;
use App\Http\Requests\SaleRequest;

class SaleController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'Success',
            'data' => Sale::with(['product', 'location'])->latest()->get()
        ]);
    }

    public function store(SaleRequest $request)
    {
        $data = $request->validated();

        $stockTotal = Stock::where('product_id', $data['product_id'])
            ->where('location_id', $data['location_id'])
            ->sum('quantity');

        $salesTotal = Sale::where('product_id', $data['product_id'])
            ->where('location_id', $data['location_id'])
            ->sum('quantity');

        $available = $stockTotal - $salesTotal;

        if ($data['quantity'] > $available) {
            return response()->json([
                'message' => 'Stock not enough'
            ], 400);
        }

        $sale = Sale::create($data);

        return response()->json([
            'message' => 'Success',
            'data' => $sale
        ]);
    }
}
