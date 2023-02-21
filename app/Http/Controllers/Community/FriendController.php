<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Multicaret\Acquaintances\Models\Friendship;
use Illuminate\Support\Facades\Auth;

class FriendController extends Controller
{
  public function index(): Response
  {
    $userFriendships = Friendship::with('recipient')
      ->where(function ($query) {
        $query->where('sender_id', Auth::user()->id);
      })
      ->where(function ($query) {
        $query->where('status', 'accepted');
      })
      ->latest()->get();


    return Inertia::render('Community/Friends', [
      'userFriendships' => $userFriendships
    ]);
  }
}
