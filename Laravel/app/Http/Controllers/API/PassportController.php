<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\User;
use Auth;
use DB;

class PassportController extends Controller 
{
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:10', //o campo nome é obrigatório e seu tamanho mínimo são 10 caracteres
            'username' => 'required|min:5|alpha_dash', //o campo nome de usuário é obrigatório, seu tamanho mínimo são 5 caracteres e os caracteres aceitos são letras, números, hífen e underline
            'email' => 'required|email', //o campo e-mail é obrigatório e seu formato deve ser nome@email.com
            'password' => 'required|min:8' //o campo senha é obrigatório e seu tamanho mínimo são 8 caracteres
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors(),
                'data' => null
        ], 401); //caso o usuário preencha algum campo com algum dado inválido, o cadastro não será realizado e será retornada uma mensagem de erro ao usuário de acordo com o erro cometido
        }
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->username = $request->username;
        $user->role = 'common_user'; //sempre que o usuário criar uma conta, ele será um usuário comum, pois os visitantes são as pessoas que não possuem uma conta e os bloggers terão seu cargo atribuído diretamente no banco de dados
        $user->save();
        return response()->json([
            'message' => 'O usuário '.$user->username.' foi criado com sucesso!',
            'data' => null
        ], 200);
    }
}
