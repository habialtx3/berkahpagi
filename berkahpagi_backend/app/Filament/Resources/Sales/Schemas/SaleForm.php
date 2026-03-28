<?php

namespace App\Filament\Resources\Sales\Schemas;

use App\Models\Sale;
use App\Models\Stock;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class SaleForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('product_id')
                    ->relationship('product', 'name')
                    ->required(),

                Select::make('location_id')
                    ->relationship('location', 'name')
                    ->required(),

                TextInput::make('quantity')
                    ->numeric()
                    ->required()
                    ->minValue(1)
                    ->rules([
                        function ($get) {
                            return function ($attribute, $value, $fail) use ($get) {
                                $productId = $get('product_id');
                                $locationId = $get('location_id');

                                if (!$productId || !$locationId) {
                                    return;
                                }

                                $stockIn = Stock::where('product_id', $productId)
                                    ->where('location_id', $locationId)
                                    ->sum('quantity');

                                $sold = Sale::where('product_id', $productId)
                                    ->where('location_id', $locationId)
                                    ->sum('quantity');

                                $currentStock = $stockIn - $sold;

                                if ($value > $currentStock) {
                                    $fail("Stock tidak cukup. Sisa: $currentStock");
                                }
                            };
                        }
                    ]),

                DatePicker::make('date')
                    ->default(now())
                    ->required(),
            ]);
    }
}
