<?php

namespace App\Http\Resources;
 
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'main_photo' => $this->main_photo,
            'price' => $this->price,
            "count" => $this->count,
            "old_price" => $this->old_price,
            "category_id" => $this->category_id,
            "category_name" => $this->category->name,
            "created_at" => $this->created_at,
            "updated_at"  => $this->updated_at
        ];

    }
}
