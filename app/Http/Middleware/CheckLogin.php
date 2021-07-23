<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /*if(! Auth::attempt(['email' => $request->email, 'password' => $request->password], false)){
            //return redirect('dashboard');
            //return $next($request);
            return redirect('login');
        }
        return $next($request);*/
        if(!(Auth::check())){
            return redirect('login');
        }
        return $next($request);
    }
}
