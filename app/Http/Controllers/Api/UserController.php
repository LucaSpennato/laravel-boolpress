<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $user= User::where('email', $request->email)->first();
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response([
                    'message' => ['These credentials do not match our records.']
                ], 404);
            }
        
            $token = $user->createToken('developer-token')->plainTextToken;
        
            $response = [
                'user' => $user,
                'token' => $token
            ];
        
            return response($response, 201);
    }

    public function user()
    {
        return Auth::user()->id;
    }
}

