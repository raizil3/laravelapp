<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use DB;
use Auth;
use Session;
use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Http;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function showLoginForm(){
        return view('auth.login');
    }


    public function adduser(Request $request){
        $validation = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',

        ]);

        $user = User::create($data);
        $response["last_inserted_id"] = $user->id;
        $response["code"] = 200;

    }

    
    public function authenticate(Request $request)
    {
    $request->validate([
        'email'    => 'required|string',
        'password' => 'required|string',
    ]);

    DB::beginTransaction();
    try {
        $email     = $request->email;
        $password  = $request->password;

        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            $user = Auth::user();

            Session::put('name', $user->name);
            Session::put('email', $user->email);
            // ... (other session data)

            DB::commit();

            return redirect()->intended('/');
        } else {
            DB::rollback();

            return redirect()->route('login')->withErrors([
                'email' => 'Wrong username or password. Please try again.',
            ]);
        }
    } catch (\Exception $e) {
        DB::rollback();

        return redirect()->back()->withErrors([
            'email' => 'An error occurred while trying to log in. Please try again.',
        ]);
    }
    }


}
