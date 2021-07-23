<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    //protected $fillable = ['names', 'surname', 'email', 'password'];
    public $timestamps = false;
    protected $guarded = [];
    protected $hidden = [
        'password'
    ];

}
