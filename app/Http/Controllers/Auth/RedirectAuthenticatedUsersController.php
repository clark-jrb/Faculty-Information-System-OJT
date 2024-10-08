<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RedirectAuthenticatedUsersController extends Controller
{
    public function home()
    {
        if (auth()->user()->role == 'faculty') {
            return redirect('/home');
        }
        elseif(auth()->user()->role == 'admin'){
            return redirect('/admin/dashboard');
        }
        else{
            return auth()->logout();
        }
    }
}
