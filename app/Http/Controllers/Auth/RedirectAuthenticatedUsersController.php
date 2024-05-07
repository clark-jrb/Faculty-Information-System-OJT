<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RedirectAuthenticatedUsersController extends Controller
{
    public function home()
    {
        if (auth()->user()->role == 'viewer') {
            return redirect('/facilities');
        }
        elseif(auth()->user()->role == 'admin'){
            return redirect('/admin/dashboard');
        }
        else{
            return auth()->logout();
        }
    }
}
