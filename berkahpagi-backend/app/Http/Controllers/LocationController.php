<?php

namespace App\Http\Controllers;

use App\Models\Location;

class LocationController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'Success',
            'data' => Location::all()
        ]);
    }
}
