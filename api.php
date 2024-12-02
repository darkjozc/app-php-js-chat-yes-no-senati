<?php

header("Access-Control-Allow-Origin: *");

$metodo = $_SERVER['REQUEST_METHOD'];
$respuesta = [];
switch ($metodo) {
    case 'GET':
        $respuesta = [
            'mensaje' => 'metodo get correcto',
            'data' => $_GET
        ];

        break;

    case 'POST':
        $datos = json_decode(file_get_contents('php://input'), true);
        $respuesta = [
            'mensaje' => 'metodo get correcto',
            'data' => $datos,
        ];

        break;

        //hacer un put
        case 'PUT':
            $datos = json_decode(file_get_contents('php://input'), true);
            $respuesta = [
                'mensaje' => 'metodo put correcto',
                'data' => $datos,
            ];
            break;
            // hacer un dele
            case 'DELETE':
                $respuesta = [
                   'mensaje' => 'metodo delete correcto',
                    'data' => [],
                ];
                break;
                


    default:
        # code...
        break;
}
echo json_encode($respuesta);