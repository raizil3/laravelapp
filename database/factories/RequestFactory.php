<?php

namespace Database\Factories;
use App\Models\Request;
use App\Models\User;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Request>
 */
class RequestFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition()
    {
        return [
            'user_id' => 1,
            'request_details' => $this->faker->paragraph,
            'release_date' => $this->faker->dateTimeThisYear,
        ];
    }
}
