<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Campaign;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CampaignController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Campaign::all();
        return response()->json($posts);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $images = [];
        $folderPath = "public/";
        foreach($request->images as $value)
        {
            $base64Image = explode(";base64,", $value);
            $explodeImage = explode("image/", $base64Image[0]);
            $imageType = $explodeImage[1];
            $image_base64 = base64_decode($base64Image[1]);
            $file = uniqid() . '.'.$imageType;
            Storage::put($folderPath . $file , $image_base64);
            $images[] = $file;
        }
        $input = $request->all();
        $input['images'] = json_encode($images , JSON_UNESCAPED_UNICODE);

        $post = Campaign::create($input);
        return response()->json($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Campaign  $campaings
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request , Campaign $campaign)
    {
        $images = [];
        $input = $request->all();
        if(is_array($request->images))
        {
            $folderPath = "public/";
            foreach($request->images as $value)
            {
                $base64Image = explode(";base64,", $value);
                $explodeImage = explode("image/", $base64Image[0]);
                $imageType = $explodeImage[1];
                $image_base64 = base64_decode($base64Image[1]);
                $file = uniqid() . '.'.$imageType;
                Storage::put($folderPath . $file , $image_base64);
                $images[] = $file;
            }
        
            $input['images'] = json_encode($images , JSON_UNESCAPED_UNICODE);
        }else{
            $input['images'] = $campaign['images'];
        }
        
        $campaign->update($input);
        return response()->json($campaign);
    }
}
