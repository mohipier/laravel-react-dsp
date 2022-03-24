<?php

namespace Database\Seeders;

use App\Models\Campaign;
use App\Models\CreativeUpload;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class CampaignCreateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $today = Carbon::now()->format('Y-m-d H:i:s');
        DB::beginTransaction();
        $campaign = Campaign::create([
            'name' => 'test campaign',
            'daily_budget' => 500,
            'total_budget' => 10000,
            'from' => $today,
            'to' => Carbon::now()->addDays(20)->format('Y-m-d H:i:s'),
            'images' => null,
        ]);


        Cache::forget('campaigns');
        DB::commit();
    }
}
