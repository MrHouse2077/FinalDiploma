<?php

namespace App\Http\Controllers;

use App\Helpers\RequestHelper;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;
use App\Http\Resources\CategoryResource;

use Illuminate\Support\Facades\Validator;
use App\Models\Category;

class ShopController extends Controller
{
    public function listProductsAction(Request $request){

        //return $request;

        if(isset($request['filter']['secelctPriceProduct']) && !empty($request['filter']['secelctPriceProduct'])){
            $products = ProductResource::collection(Product::where("price", "<", $request['filter']['secelctPriceProduct'])->get());
        }
        else{
            $products = ProductResource::collection(Product::all());
        }

        

        return RequestHelper::write(200, 'sucess', $products);

    }
    public function categoriesAction(){

        // $categories = Category::get();
        $categories = CategoryResource::collection(Category::all());


        return RequestHelper::write(200, 'sucess', $categories);
        
    }

    public function addNewCategoryAction(Request $request){
        dd($request);

        $validated = Validator::make($request->all(),[
            'name' => 'required|min:2|max:200',
            'description' => 'max:1000',
        ],
        [
            'name.required' => 'Название категории обязательно для заполнения',
            'name.min:2' => 'Название категории минимум 2 символа',
            'name.max:200' => 'Название категории максимум 200 символов',
            'description.max:1000' => 'Превышена максимальная длина описани. Максимум 1000 символов'
        ]
        );

        // if ($validated->fails()) {
        //     return redirect()->route('admin_categories')->withErrors($validated)->with('error', 'Ошибка! Категория не добавлена')->withInput();
        // }

        $category = new Category;

        $category->name = $request->fieldName;
        $category->description = $request->fieldDescription;
    
        $category->save();

        return $category;
        //redirect()->route('admin_categories')->with('success', 'Ок! Категория успешно добавлена');
    }
}
