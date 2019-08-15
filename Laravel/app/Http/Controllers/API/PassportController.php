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
    // função que retorna mensagens de erro ao usuário de acordo com o erro cometido por ele durante o cadastro
    public function messages() {
        return [
            'name.required' => 'O preenchimento deste campo é obrigatório!',
            'name.min' => 'Seu nome deve possuir no mínimo 10 caracteres.',
            'username.required' => 'O preenchimento deste campo é obrigatório!',
            'username.min' => 'Seu nome de usuário deve possuir no mínimo 5 caracteres.',
            'username.alpha_dash' => 'Seu nome de usuário deve ser constituído apenas por letras, números, hífen e underline.',
            'email.required' => 'O preenchimento deste campo é obrigatório!',
            'email.email' => 'Insira um e-mail no formato válido!',
            'password.required' => 'O preenchimento deste campo é obrigatório!',
            'password.min' => 'Sua senha deve possuir no mínimo 8 caracteres'
        ];
    }

    //função que realiza o cadastro de um novo usuário
    public function register(Request $request) {
        //dd("to aqui");
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:10', //o campo nome é obrigatório e seu tamanho mínimo são 10 caracteres
            'username' => 'required|min:5',//alpha_dash, //o campo nome de usuário é obrigatório, seu tamanho mínimo são 5 caracteres e os caracteres aceitos são letras, números, hífen e underline
            'email' => 'required|email', //o campo e-mail é obrigatório e seu formato deve ser nome@email.com
            'password' => 'required|min:8', //o campo senha é obrigatório e seu tamanho mínimo são 8 caracteres
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
        //dd("to aqui");
        $user->save();
        return response()->json([
            'message' => 'O usuário '.$user->username.' foi criado com sucesso!',
            'data' => null
        ], 200);
    }

    //função que realiza o login de um usuário
    public function login() {
        //o login será realizado através do e-mail e da senha do usuário
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $user = Auth::user();
            $token = $user->createToken('FriendFlix')->accessToken;
            return response()->json([
                'message' => 'O usuário '.$user->username.' está logado!',
                'data' => [
                    'user' => $user,
                    'token' => $token
                ]
        ], 200);
        } else {
            return response()->json([
                'message' => 'E-mail ou senha inválidos!',
                'data' => null
            ], 401);
        }
    }

    //função que realiza o logout de um usuário
    public function logout() {
        $accessToken = Auth::user()->token();
        DB::table('oauth_refresh_tokens')->where('access_token_id', $accessToken->id)->update([
            'revoked' => true
        ]);
        $accessToken->revoke();
        return response()->json(null, 204);
    }
}
