<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Post;
use Auth;

class PostController extends Controller
{
    //função que cria um novo post
    public function store(Request $request) {
        $user = Auth::user();

        if ($user) {
            $post = new Post();
            $post->name = $request->name;
            $post->text = $request->text;
            $post->photo = $request->photo;
            $post->user_id = $user->id;
            $post->save();
            return response()->json([
                'message' => 'Post criado pelo usuário '.$user->username,
                'data' => $post
            ], 200);
        } else {
            return response()->json([
                'message' => 'Usuário não autorizado!',
                'data' => null
            ], 401);
        }
    }

    //função que retorna todos os posts
    public function index() {
        return Post::all();
    }

    //função que retorna um post específico
    public function show($id) {
        $post = Post::findOrFail($id);
        return $post;
    }
}
