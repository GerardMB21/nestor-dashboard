import { useEffect, useState } from "react";
import { cn } from "../utils/ui";
import DispatchAll from "./DispatchAll"
import DispatchMonth from "./DispatchMonth";

const data = [
    {
        "name":"2024 - Enero",
        "clients":{
            "H REPS S.A.C.":{
                "box":365,
                "palletes":23
            },
            "Quimica Suiza S.A.":{
                "box":451,
                "palletes":92
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":49,
                "palletes":0
            },
            "REPRESENTACIONES DECO S.A.C.":{
                "box":66,
                "palletes":33
            }
        }
    },
    {
        "name":"2024 - Febrero",
        "clients":{
            "Quimica Suiza S.A.":{
                "box":326,
                "palletes":140
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":52,
                "palletes":0
            },
            "H REPS S.A.C.":{
                "box":203,
                "palletes":20
            },
            "NOVARTIS BIOSCIENCES PERU":{
                "box":1,
                "palletes":0
            },
            "REPRESENTACIONES DECO S.A.C.":{
                "box":66,
                "palletes":22
            }
        }
    },
    {
        "name":"2024 - Marzo",
        "clients":{
            "Quimica Suiza S.A.":{
                "box":319,
                "palletes":73
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":61,
                "palletes":0
            },
            "H REPS S.A.C.":{
                "box":369,
                "palletes":39
            },
            "REPRESENTACIONES DECO S.A.C.":{
                "box":77,
                "palletes":21
            },
            "NOVARTIS BIOSCIENCES PERU":{
                "box":1,
                "palletes":1
            }
        }
    },
    {
        "name":"2024 - Abril",
        "clients":{
            "Quimica Suiza S.A.":{
                "box":265,
                "palletes":84
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":52,
                "palletes":0
            },
            "REPRESENTACIONES DECO S.A.C.":{
                "box":103,
                "palletes":23
            },
            "H REPS S.A.C.":{
                "box":300,
                "palletes":45
            },
            "NOVARTIS BIOSCIENCES PERU":{
                "box":1,
                "palletes":0
            }
        }
    },
    {
        "name":"2024 - Mayo",
        "clients":{
            "Quimica Suiza S.A.":{
                "box":481,
                "palletes":118
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":60,
                "palletes":0
            },
            "H REPS S.A.C.":{
                "box":247,
                "palletes":24
            },
            "REPRESENTACIONES DECO S.A.C.":{
                "box":92,
                "palletes":43
            },
            "NOVARTIS BIOSCIENCES PERU":{
                "box":1,
                "palletes":1
            }
        }
    },
    {
        "name":"2024 - Junio",
        "clients":{
            "QUIMICA SUIZA S.A.C.":{
                "box":109,
                "palletes":40
            },
            "Quimica Suiza S.A.C.":{
                "box":49,
                "palletes":5
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":83,
                "palletes":0
            },
            "H REPS SAC":{
                "box":279,
                "palletes":29
            },
            "REPRESENTACIONES DECO S.A.C.":{
                "box":78,
                "palletes":35
            },
            "NOVARTIS BIOSCIENCES PERU":{
                "box":1,
                "palletes":1
            }
        }
    },
    {
        "name":"2024 - Julio",
        "clients":{
            "H REPS SAC":{
                "box":119,
                "palletes":16
            },
            "Quimica Suiza S.A.C.":{
                "box":28,
                "palletes":8
            },
            "REPRESENTACIONES DECO S.A.C.":{
                "box":78,
                "palletes":22
            },
            "QUIMICA SUIZA S.A.C.":{
                "box":98,
                "palletes":23
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":36,
                "palletes":1
            },
            "NOVARTIS BIOSCIENCES PERU (MAP. PAP)":{
                "box":2,
                "palletes":1
            }
        }
    },
    {
        "name":"2024 - Agosto",
        "clients":{
            "QUIMICA SUIZA S.A.C.":{
                "box":116,
                "palletes":36
            },
            "REPRESENTACIONES DECO S.A.C.":{
                "box":109,
                "palletes":33
            },
            "H REPS SAC":{
                "box":263,
                "palletes":53
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":25,
                "palletes":0
            },
            "NOVARTIS BIOSCIENCES PERU (PAP KISQA)":{
                "box":2,
                "palletes":2
            },
            "Quimica Suiza S.A.C.":{
                "box":130,
                "palletes":22
            }
        }
    },
    {
        "name":"2024 - Setiembre",
        "clients":{
            "QUIMICA SUIZA S.A.C.":{
                "box":192,
                "palletes":99
            },
            "Quimica Suiza S.A.C.":{
                "box":61,
                "palletes":20
            },
            "REPRESENTACIONES DECO S.A.C.":{
                "box":125,
                "palletes":13
            },
            "H REPS SAC":{
                "box":357,
                "palletes":45
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":40,
                "palletes":0
            },
            "NOVARTIS BIOSCIENCES PERU (PAP KISQA)":{
                "box":1,
                "palletes":1
            },
            "NOVARTIS BIOSCIENCES PERU (MAP JAKAVI)":{
                "box":1,
                "palletes":1
            }
        }
    },
    {
        "name":"2024 - Octubre",
        "clients":{
            "REPRESENTACIONES DECO S.A.C.":{
                "box":161,
                "palletes":28
            },
            "QUIMICA SUIZA S.A.C.":{
                "box":87,
                "palletes":33
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":41,
                "palletes":0
            },
            "H REPS SAC":{
                "box":364,
                "palletes":84
            },
            "Quimica Suiza S.A.C.":{
                "box":209,
                "palletes":57
            },
            "NOVARTIS BIOSCIENCES PERU (PAP)":{
                "box":3,
                "palletes":3
            }
        }
    },
    {
        "name":"2024 - Noviembre",
        "clients":{
            "QUIMICA SUIZA S.A.C.":{
                "box":147,
                "palletes":53
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":32,
                "palletes":0
            },
            "H REPS SAC":{
                "box":310,
                "palletes":32
            },
            "Quimica Suiza S.A.C.":{
                "box":40,
                "palletes":2
            },
            "REPRESENTACIONES DECO S.A.C.":{
                "box":50,
                "palletes":13
            },
            "NOVARTIS BIOSCIENCES PERU (PAP)":{
                "box":1,
                "palletes":1
            }
        }
    },
    {
        "name":"2024 - Diciembre",
        "clients":{
            "QUIMICA SUIZA S.A.C.":{
                "box":178,
                "palletes":48
            },
            "H REPS SAC":{
                "box":161,
                "palletes":38
            },
            "REPRESENTACIONES DECO S.A.C.":{
                "box":93,
                "palletes":21
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":13,
                "palletes":0
            },
            "NOVARTIS BIOSCIENCES PERU (PAP)":{
                "box":1,
                "palletes":1
            },
            "NOVARTIS BIOSCIENCES PERU (PAP KISQA)":{
                "box":1,
                "palletes":1
            }
        }
    },
    {
        "name":"2025 - Enero",
        "clients":{
            "QUIMICA SUIZA S.A.C.":{
                "box":1,
                "palletes":1
            },
            "REPRESENTACIONES DECO S.A.C.":{
                "box":87,
                "palletes":23
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":64,
                "palletes":0
            },
            "H REPS SAC":{
                "box":282,
                "palletes":83
            },
            "NOVARTIS BIOSCIENCES PERU (PAP)":{
                "box":3,
                "palletes":3
            },
            "INRETAIL PHARMA S.A.":{
                "box":41,
                "palletes":3
            },
            "QS CONSUMO SAC":{
                "box":193,
                "palletes":79
            }
        }
    }
]
let dataMonths = {
    "2024 - Enero":[
        {
            "name":"H REPS S.A.C.",
            "value":{
            "box":365,
            "palletes":23
            }
        },
        {
            "name":"Quimica Suiza S.A.",
            "value":{
            "box":451,
            "palletes":92
            }
        },
        {
            "name":"LABORATORIOS SIEGFRIED SAC",
            "value":{
            "box":49,
            "palletes":0
            }
        },
        {
            "name":"REPRESENTACIONES DECO S.A.C.",
            "value":{
            "box":66,
            "palletes":33
            }
        }
    ],
    "2024 - Febrero":[
        {
            "name":"Quimica Suiza S.A.",
            "value":{
            "box":326,
            "palletes":140
            }
        },
        {
            "name":"LABORATORIOS SIEGFRIED SAC",
            "value":{
            "box":52,
            "palletes":0
            }
        },
        {
            "name":"H REPS S.A.C.",
            "value":{
            "box":203,
            "palletes":20
            }
        },
        {
            "name":"NOVARTIS BIOSCIENCES PERU",
            "value":{
            "box":1,
            "palletes":0
            }
        },
        {
            "name":"REPRESENTACIONES DECO S.A.C.",
            "value":{
            "box":66,
            "palletes":22
            }
        }
    ],
    "2024 - Marzo":[
        {
            "name":"Quimica Suiza S.A.",
            "value":{
            "box":319,
            "palletes":73
            }
        },
        {
            "name":"LABORATORIOS SIEGFRIED SAC",
            "value":{
            "box":61,
            "palletes":0
            }
        },
        {
            "name":"H REPS S.A.C.",
            "value":{
            "box":369,
            "palletes":39
            }
        },
        {
            "name":"REPRESENTACIONES DECO S.A.C.",
            "value":{
            "box":77,
            "palletes":21
            }
        },
        {
            "name":"NOVARTIS BIOSCIENCES PERU",
            "value":{
            "box":1,
            "palletes":1
            }
        }
    ],
    "2024 - Abril":[
        {
            "name":"Quimica Suiza S.A.",
            "value":{
            "box":265,
            "palletes":84
            }
        },
        {
            "name":"LABORATORIOS SIEGFRIED SAC",
            "value":{
            "box":52,
            "palletes":0
            }
        },
        {
            "name":"REPRESENTACIONES DECO S.A.C.",
            "value":{
            "box":103,
            "palletes":23
            }
        },
        {
            "name":"H REPS S.A.C.",
            "value":{
            "box":300,
            "palletes":45
            }
        },
        {
            "name":"NOVARTIS BIOSCIENCES PERU",
            "value":{
            "box":1,
            "palletes":0
            }
        }
    ],
    "2024 - Mayo":[
        {
            "name":"Quimica Suiza S.A.",
            "value":{
            "box":481,
            "palletes":118
            }
        },
        {
            "name":"LABORATORIOS SIEGFRIED SAC",
            "value":{
            "box":60,
            "palletes":0
            }
        },
        {
            "name":"H REPS S.A.C.",
            "value":{
            "box":247,
            "palletes":24
            }
        },
        {
            "name":"REPRESENTACIONES DECO S.A.C.",
            "value":{
            "box":92,
            "palletes":43
            }
        },
        {
            "name":"NOVARTIS BIOSCIENCES PERU",
            "value":{
            "box":1,
            "palletes":1
            }
        }
    ],
    "2024 - Junio":[
        {
            "name":"QUIMICA SUIZA S.A.C.",
            "value":{
            "box":109,
            "palletes":40
            }
        },
        {
            "name":"Quimica Suiza S.A.C.",
            "value":{
            "box":49,
            "palletes":5
            }
        },
        {
            "name":"LABORATORIOS SIEGFRIED SAC",
            "value":{
            "box":83,
            "palletes":0
            }
        },
        {
            "name":"H REPS SAC",
            "value":{
            "box":279,
            "palletes":29
            }
        },
        {
            "name":"REPRESENTACIONES DECO S.A.C.",
            "value":{
            "box":78,
            "palletes":35
            }
        },
        {
            "name":"NOVARTIS BIOSCIENCES PERU",
            "value":{
            "box":1,
            "palletes":1
            }
        }
    ],
    "2024 - Julio":[
        {
            "name":"H REPS SAC",
            "value":{
            "box":119,
            "palletes":16
            }
        },
        {
            "name":"Quimica Suiza S.A.C.",
            "value":{
            "box":28,
            "palletes":8
            }
        },
        {
            "name":"REPRESENTACIONES DECO S.A.C.",
            "value":{
            "box":78,
            "palletes":22
            }
        },
        {
            "name":"QUIMICA SUIZA S.A.C.",
            "value":{
            "box":98,
            "palletes":23
            }
        },
        {
            "name":"LABORATORIOS SIEGFRIED SAC",
            "value":{
            "box":36,
            "palletes":1
            }
        },
        {
            "name":"NOVARTIS BIOSCIENCES PERU (MAP. PAP)",
            "value":{
            "box":2,
            "palletes":1
            }
        }
    ],
    "2024 - Agosto":[
        {
            "name":"QUIMICA SUIZA S.A.C.",
            "value":{
            "box":116,
            "palletes":36
            }
        },
        {
            "name":"REPRESENTACIONES DECO S.A.C.",
            "value":{
            "box":109,
            "palletes":33
            }
        },
        {
            "name":"H REPS SAC",
            "value":{
            "box":263,
            "palletes":53
            }
        },
        {
            "name":"LABORATORIOS SIEGFRIED SAC",
            "value":{
            "box":25,
            "palletes":0
            }
        },
        {
            "name":"NOVARTIS BIOSCIENCES PERU (PAP KISQA)",
            "value":{
            "box":2,
            "palletes":2
            }
        },
        {
            "name":"Quimica Suiza S.A.C.",
            "value":{
            "box":130,
            "palletes":22
            }
        }
    ],
    "2024 - Setiembre":[
        {
            "name":"QUIMICA SUIZA S.A.C.",
            "value":{
            "box":192,
            "palletes":99
            }
        },
        {
            "name":"Quimica Suiza S.A.C.",
            "value":{
            "box":61,
            "palletes":20
            }
        },
        {
            "name":"REPRESENTACIONES DECO S.A.C.",
            "value":{
            "box":125,
            "palletes":13
            }
        },
        {
            "name":"H REPS SAC",
            "value":{
            "box":357,
            "palletes":45
            }
        },
        {
            "name":"LABORATORIOS SIEGFRIED SAC",
            "value":{
            "box":40,
            "palletes":0
            }
        },
        {
            "name":"NOVARTIS BIOSCIENCES PERU (PAP KISQA)",
            "value":{
            "box":1,
            "palletes":1
            }
        },
        {
            "name":"NOVARTIS BIOSCIENCES PERU (MAP JAKAVI)",
            "value":{
            "box":1,
            "palletes":1
            }
        }
    ],
    "2024 - Octubre":[
        {
            "name":"REPRESENTACIONES DECO S.A.C.",
            "value":{
            "box":161,
            "palletes":28
            }
        },
        {
            "name":"QUIMICA SUIZA S.A.C.",
            "value":{
            "box":87,
            "palletes":33
            }
        },
        {
            "name":"LABORATORIOS SIEGFRIED SAC",
            "value":{
            "box":41,
            "palletes":0
            }
        },
        {
            "name":"H REPS SAC",
            "value":{
            "box":364,
            "palletes":84
            }
        },
        {
            "name":"Quimica Suiza S.A.C.",
            "value":{
            "box":209,
            "palletes":57
            }
        },
        {
            "name":"NOVARTIS BIOSCIENCES PERU (PAP)",
            "value":{
            "box":3,
            "palletes":3
            }
        }
    ],
    "2024 - Noviembre":[
        {
            "name":"QUIMICA SUIZA S.A.C.",
            "value":{
            "box":147,
            "palletes":53
            }
        },
        {
            "name":"LABORATORIOS SIEGFRIED SAC",
            "value":{
            "box":32,
            "palletes":0
            }
        },
        {
            "name":"H REPS SAC",
            "value":{
            "box":310,
            "palletes":32
            }
        },
        {
            "name":"Quimica Suiza S.A.C.",
            "value":{
            "box":40,
            "palletes":2
            }
        },
        {
            "name":"REPRESENTACIONES DECO S.A.C.",
            "value":{
            "box":50,
            "palletes":13
            }
        },
        {
            "name":"NOVARTIS BIOSCIENCES PERU (PAP)",
            "value":{
            "box":1,
            "palletes":1
            }
        }
    ],
    "2024 - Diciembre":[
        {
            "name":"QUIMICA SUIZA S.A.C.",
            "value":{
            "box":178,
            "palletes":48
            }
        },
        {
            "name":"H REPS SAC",
            "value":{
            "box":161,
            "palletes":38
            }
        },
        {
            "name":"REPRESENTACIONES DECO S.A.C.",
            "value":{
            "box":93,
            "palletes":21
            }
        },
        {
            "name":"LABORATORIOS SIEGFRIED SAC",
            "value":{
            "box":13,
            "palletes":0
            }
        },
        {
            "name":"NOVARTIS BIOSCIENCES PERU (PAP)",
            "value":{
            "box":1,
            "palletes":1
            }
        },
        {
            "name":"NOVARTIS BIOSCIENCES PERU (PAP KISQA)",
            "value":{
            "box":1,
            "palletes":1
            }
        }
    ],
    "2025 - Enero":[
        {
            "name":"QUIMICA SUIZA S.A.C.",
            "value":{
            "box":1,
            "palletes":1
            }
        },
        {
            "name":"REPRESENTACIONES DECO S.A.C.",
            "value":{
            "box":87,
            "palletes":23
            }
        },
        {
            "name":"LABORATORIOS SIEGFRIED SAC",
            "value":{
            "box":64,
            "palletes":0
            }
        },
        {
            "name":"H REPS SAC",
            "value":{
            "box":282,
            "palletes":83
            }
        },
        {
            "name":"NOVARTIS BIOSCIENCES PERU (PAP)",
            "value":{
            "box":3,
            "palletes":3
            }
        },
        {
            "name":"INRETAIL PHARMA S.A.",
            "value":{
            "box":41,
            "palletes":3
            }
        },
        {
            "name":"QS CONSUMO SAC",
            "value":{
            "box":193,
            "palletes":79
            }
        }
    ]
}
dataMonths = {
    "2024 - Enero": [
        {
            "name": "H Reps S.A.C.",
            "value": {
                "box": 365,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 23
            }
        },
        {
            "name": "Quimica Suiza S.A.C.",
            "value": {
                "box": 451,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 92
            }
        },
        {
            "name": "Laboratorios Siegfried S.A.C.",
            "value": {
                "box": 49,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "REPRESENTACIONES DECO S.A.C.",
            "value": {
                "box": 66,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 33
            }
        }
    ],
    "2024 - Febrero": [
        {
            "name": "Quimica Suiza S.A.C.",
            "value": {
                "box": 326,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 140
            }
        },
        {
            "name": "Laboratorios Siegfried S.A.C.",
            "value": {
                "box": 52,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "H Reps S.A.C.",
            "value": {
                "box": 203,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 20
            }
        },
        {
            "name": "NOVARTIS BIOSCIENCES PERU",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "REPRESENTACIONES DECO S.A.C.",
            "value": {
                "box": 66,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 22
            }
        }
    ],
    "2024 - Marzo": [
        {
            "name": "Quimica Suiza S.A.C.",
            "value": {
                "box": 319,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 73
            }
        },
        {
            "name": "Laboratorios Siegfried S.A.C.",
            "value": {
                "box": 61,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "H Reps S.A.C.",
            "value": {
                "box": 369,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 39
            }
        },
        {
            "name": "REPRESENTACIONES DECO S.A.C.",
            "value": {
                "box": 77,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 21
            }
        },
        {
            "name": "NOVARTIS BIOSCIENCES PERU",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    ],
    "2024 - Abril": [
        {
            "name": "Quimica Suiza S.A.C.",
            "value": {
                "box": 265,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 84
            }
        },
        {
            "name": "Laboratorios Siegfried S.A.C.",
            "value": {
                "box": 52,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "REPRESENTACIONES DECO S.A.C.",
            "value": {
                "box": 103,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 23
            }
        },
        {
            "name": "H Reps S.A.C.",
            "value": {
                "box": 300,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 45
            }
        },
        {
            "name": "NOVARTIS BIOSCIENCES PERU",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        }
    ],
    "2024 - Mayo": [
        {
            "name": "Quimica Suiza S.A.C.",
            "value": {
                "box": 481,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 118
            }
        },
        {
            "name": "Laboratorios Siegfried S.A.C.",
            "value": {
                "box": 60,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "H Reps S.A.C.",
            "value": {
                "box": 247,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 24
            }
        },
        {
            "name": "REPRESENTACIONES DECO S.A.C.",
            "value": {
                "box": 92,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 43
            }
        },
        {
            "name": "NOVARTIS BIOSCIENCES PERU",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    ],
    "2024 - Junio": [
        {
            "name": "Quimica Suiza S.A.C.",
            "value": {
                "box": 158,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 45
            }
        },
        {
            "name": "Laboratorios Siegfried S.A.C.",
            "value": {
                "box": 83,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "H Reps S.A.C.",
            "value": {
                "box": 279,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 29
            }
        },
        {
            "name": "REPRESENTACIONES DECO S.A.C.",
            "value": {
                "box": 78,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 35
            }
        },
        {
            "name": "NOVARTIS BIOSCIENCES PERU",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    ],
    "2024 - Julio": [
        {
            "name": "H Reps S.A.C.",
            "value": {
                "box": 119,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 16
            }
        },
        {
            "name": "Quimica Suiza S.A.C.",
            "value": {
                "box": 126,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 31
            }
        },
        {
            "name": "REPRESENTACIONES DECO S.A.C.",
            "value": {
                "box": 78,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 22
            }
        },
        {
            "name": "Laboratorios Siegfried S.A.C.",
            "value": {
                "box": 36,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        },
        {
            "name": "NOVARTIS BIOSCIENCES PERU (MAP. PAP)",
            "value": {
                "box": 2,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    ],
    "2024 - Agosto": [
        {
            "name": "Quimica Suiza S.A.C.",
            "value": {
                "box": 246,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 58
            }
        },
        {
            "name": "REPRESENTACIONES DECO S.A.C.",
            "value": {
                "box": 109,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 33
            }
        },
        {
            "name": "H Reps S.A.C.",
            "value": {
                "box": 263,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 53
            }
        },
        {
            "name": "Laboratorios Siegfried S.A.C.",
            "value": {
                "box": 25,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "NOVARTIS BIOSCIENCES PERU (PAP KISQA)",
            "value": {
                "box": 2,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 2
            }
        }
    ],
    "2024 - Setiembre": [
        {
            "name": "Quimica Suiza S.A.C.",
            "value": {
                "box": 253,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 119
            }
        },
        {
            "name": "REPRESENTACIONES DECO S.A.C.",
            "value": {
                "box": 125,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 13
            }
        },
        {
            "name": "H Reps S.A.C.",
            "value": {
                "box": 357,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 45
            }
        },
        {
            "name": "Laboratorios Siegfried S.A.C.",
            "value": {
                "box": 40,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "NOVARTIS BIOSCIENCES PERU (PAP KISQA)",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        },
        {
            "name": "NOVARTIS BIOSCIENCES PERU (MAP JAKAVI)",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    ],
    "2024 - Octubre": [
        {
            "name": "REPRESENTACIONES DECO S.A.C.",
            "value": {
                "box": 161,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 28
            }
        },
        {
            "name": "Quimica Suiza S.A.C.",
            "value": {
                "box": 296,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 90
            }
        },
        {
            "name": "Laboratorios Siegfried S.A.C.",
            "value": {
                "box": 41,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "H Reps S.A.C.",
            "value": {
                "box": 364,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 84
            }
        },
        {
            "name": "NOVARTIS BIOSCIENCES PERU (PAP)",
            "value": {
                "box": 3,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 3
            }
        }
    ],
    "2024 - Noviembre": [
        {
            "name": "Quimica Suiza S.A.C.",
            "value": {
                "box": 187,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 55
            }
        },
        {
            "name": "Laboratorios Siegfried S.A.C.",
            "value": {
                "box": 32,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "H Reps S.A.C.",
            "value": {
                "box": 310,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 32
            }
        },
        {
            "name": "REPRESENTACIONES DECO S.A.C.",
            "value": {
                "box": 50,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 13
            }
        },
        {
            "name": "NOVARTIS BIOSCIENCES PERU (PAP)",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    ],
    "2024 - Diciembre": [
        {
            "name": "Quimica Suiza S.A.C.",
            "value": {
                "box": 178,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 48
            }
        },
        {
            "name": "H Reps S.A.C.",
            "value": {
                "box": 161,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 39
            }
        },
        {
            "name": "REPRESENTACIONES DECO S.A.C.",
            "value": {
                "box": 93,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 21
            }
        },
        {
            "name": "Laboratorios Siegfried S.A.C.",
            "value": {
                "box": 13,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "NOVARTIS BIOSCIENCES PERU (PAP)",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        },
        {
            "name": "NOVARTIS BIOSCIENCES PERU (PAP KISQA)",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    ],
    "2025 - Enero": [
        {
            "name": "Quimica Suiza S.A.C.",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        },
        {
            "name": "REPRESENTACIONES DECO S.A.C.",
            "value": {
                "box": 87,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 7
            }
        },
        {
            "name": "Laboratorios Siegfried S.A.C.",
            "value": {
                "box": 64,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "H Reps S.A.C.",
            "value": {
                "box": 282,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 18
            }
        },
        {
            "name": "NOVARTIS BIOSCIENCES PERU (PAP)",
            "value": {
                "box": 3,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 3
            }
        },
        {
            "name": "INRETAIL PHARMA S.A.",
            "value": {
                "box": 41,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 3
            }
        },
        {
            "name": "QS CONSUMO SAC",
            "value": {
                "box": 193,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 11
            }
        }
    ],
    "2025 - Febrero": [
        {
            "name": "REPRESENTACIONES DECO S.A.C.",
            "value": {
                "box": 86,
                "box_completes": 40,
                "box_saldo": 46,
                "palletes": 6
            }
        },
        {
            "name": "H Reps S.A.C.",
            "value": {
                "box": 220,
                "box_completes": 187,
                "box_saldo": 33,
                "palletes": 18
            }
        },
        {
            "name": "Laboratorios Siegfried S.A.C.",
            "value": {
                "box": 50,
                "box_completes": 6,
                "box_saldo": 44,
                "palletes": 0
            }
        },
        {
            "name": "QS CONSUMO SAC",
            "value": {
                "box": 136,
                "box_completes": 124,
                "box_saldo": 12,
                "palletes": 12
            }
        },
        {
            "name": "NOVARTIS BIOSCIENCES PERU (PAP KISQA)",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 1,
                "palletes": 1
            }
        }
    ]
};
const dataClients = {
    "H Reps SAC": [
        {
            "name": "2024 - Enero",
            "value": {
                "box": 365,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 23
            }
        },
        {
            "name": "2024 - Febrero",
            "value": {
                "box": 203,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 20
            }
        },
        {
            "name": "2024 - Marzo",
            "value": {
                "box": 369,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 39
            }
        },
        {
            "name": "2024 - Abril",
            "value": {
                "box": 300,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 45
            }
        },
        {
            "name": "2024 - Mayo",
            "value": {
                "box": 247,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 24
            }
        },
        {
            "name": "2024 - Junio",
            "value": {
                "box": 279,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 29
            }
        },
        {
            "name": "2024 - Julio",
            "value": {
                "box": 119,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 16
            }
        },
        {
            "name": "2024 - Agosto",
            "value": {
                "box": 263,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 53
            }
        },
        {
            "name": "2024 - Setiembre",
            "value": {
                "box": 357,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 45
            }
        },
        {
            "name": "2024 - Octubre",
            "value": {
                "box": 364,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 84
            }
        },
        {
            "name": "2024 - Noviembre",
            "value": {
                "box": 310,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 32
            }
        },
        {
            "name": "2024 - Diciembre",
            "value": {
                "box": 161,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 39
            }
        },
        {
            "name": "2025 - Enero",
            "value": {
                "box": 282,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 18
            }
        },
        {
            "name": "2025 - Febrero",
            "value": {
                "box": 220,
                "box_completes": 187,
                "box_saldo": 33,
                "palletes": 18
            }
        }
    ],
    "Quimica Suiza SAC": [
        {
            "name": "2024 - Enero",
            "value": {
                "box": 451,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 92
            }
        },
        {
            "name": "2024 - Febrero",
            "value": {
                "box": 326,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 140
            }
        },
        {
            "name": "2024 - Marzo",
            "value": {
                "box": 319,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 73
            }
        },
        {
            "name": "2024 - Abril",
            "value": {
                "box": 265,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 84
            }
        },
        {
            "name": "2024 - Mayo",
            "value": {
                "box": 481,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 118
            }
        },
        {
            "name": "2024 - Junio",
            "value": {
                "box": 158,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 45
            }
        },
        {
            "name": "2024 - Julio",
            "value": {
                "box": 126,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 31
            }
        },
        {
            "name": "2024 - Agosto",
            "value": {
                "box": 246,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 58
            }
        },
        {
            "name": "2024 - Setiembre",
            "value": {
                "box": 253,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 119
            }
        },
        {
            "name": "2024 - Octubre",
            "value": {
                "box": 296,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 90
            }
        },
        {
            "name": "2024 - Noviembre",
            "value": {
                "box": 187,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 55
            }
        },
        {
            "name": "2024 - Diciembre",
            "value": {
                "box": 178,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 48
            }
        },
        {
            "name": "2025 - Enero",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    ],
    "Laboratorios Siegfried SAC": [
        {
            "name": "2024 - Enero",
            "value": {
                "box": 49,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "2024 - Febrero",
            "value": {
                "box": 52,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "2024 - Marzo",
            "value": {
                "box": 61,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "2024 - Abril",
            "value": {
                "box": 52,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "2024 - Mayo",
            "value": {
                "box": 60,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "2024 - Junio",
            "value": {
                "box": 83,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "2024 - Julio",
            "value": {
                "box": 36,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        },
        {
            "name": "2024 - Agosto",
            "value": {
                "box": 25,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "2024 - Setiembre",
            "value": {
                "box": 40,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "2024 - Octubre",
            "value": {
                "box": 41,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "2024 - Noviembre",
            "value": {
                "box": 32,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "2024 - Diciembre",
            "value": {
                "box": 13,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "2025 - Enero",
            "value": {
                "box": 64,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "2025 - Febrero",
            "value": {
                "box": 50,
                "box_completes": 6,
                "box_saldo": 44,
                "palletes": 0
            }
        }
    ],
    "REPRESENTACIONES DECO SAC": [
        {
            "name": "2024 - Enero",
            "value": {
                "box": 66,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 33
            }
        },
        {
            "name": "2024 - Febrero",
            "value": {
                "box": 66,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 22
            }
        },
        {
            "name": "2024 - Marzo",
            "value": {
                "box": 77,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 21
            }
        },
        {
            "name": "2024 - Abril",
            "value": {
                "box": 103,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 23
            }
        },
        {
            "name": "2024 - Mayo",
            "value": {
                "box": 92,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 43
            }
        },
        {
            "name": "2024 - Junio",
            "value": {
                "box": 78,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 35
            }
        },
        {
            "name": "2024 - Julio",
            "value": {
                "box": 78,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 22
            }
        },
        {
            "name": "2024 - Agosto",
            "value": {
                "box": 109,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 33
            }
        },
        {
            "name": "2024 - Setiembre",
            "value": {
                "box": 125,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 13
            }
        },
        {
            "name": "2024 - Octubre",
            "value": {
                "box": 161,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 28
            }
        },
        {
            "name": "2024 - Noviembre",
            "value": {
                "box": 50,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 13
            }
        },
        {
            "name": "2024 - Diciembre",
            "value": {
                "box": 93,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 21
            }
        },
        {
            "name": "2025 - Enero",
            "value": {
                "box": 87,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 7
            }
        },
        {
            "name": "2025 - Febrero",
            "value": {
                "box": 86,
                "box_completes": 40,
                "box_saldo": 46,
                "palletes": 6
            }
        }
    ],
    "NOVARTIS BIOSCIENCES PERU": [
        {
            "name": "2024 - Febrero",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "2024 - Marzo",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        },
        {
            "name": "2024 - Abril",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        },
        {
            "name": "2024 - Mayo",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        },
        {
            "name": "2024 - Junio",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    ],
    "NOVARTIS BIOSCIENCES PERU (MAP PAP)": [
        {
            "name": "2024 - Julio",
            "value": {
                "box": 2,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    ],
    "NOVARTIS BIOSCIENCES PERU (PAP KISQA)": [
        {
            "name": "2024 - Agosto",
            "value": {
                "box": 2,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 2
            }
        },
        {
            "name": "2024 - Setiembre",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        },
        {
            "name": "2024 - Diciembre",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        },
        {
            "name": "2025 - Febrero",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 1,
                "palletes": 1
            }
        }
    ],
    "NOVARTIS BIOSCIENCES PERU (MAP JAKAVI)": [
        {
            "name": "2024 - Setiembre",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    ],
    "NOVARTIS BIOSCIENCES PERU (PAP)": [
        {
            "name": "2024 - Octubre",
            "value": {
                "box": 3,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 3
            }
        },
        {
            "name": "2024 - Noviembre",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        },
        {
            "name": "2024 - Diciembre",
            "value": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        },
        {
            "name": "2025 - Enero",
            "value": {
                "box": 3,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 3
            }
        }
    ],
    "INRETAIL PHARMA SA": [
        {
            "name": "2025 - Enero",
            "value": {
                "box": 41,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 3
            }
        }
    ],
    "QS CONSUMO SAC": [
        {
            "name": "2025 - Enero",
            "value": {
                "box": 193,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 11
            }
        },
        {
            "name": "2025 - Febrero",
            "value": {
                "box": 136,
                "box_completes": 124,
                "box_saldo": 12,
                "palletes": 12
            }
        }
    ]
}
const defaultFilters = {
    "all": "",
    "month": "2024 - Enero",
    "client": "H REPS S.A.C."
}
const optionsFilter = {
    month: [
        {
            name: "2024 - Enero",
            value: "2024 - Enero",
        },
        {
            name: "2024 - Febrero",
            value: "2024 - Febrero",
        },
        {
            name: "2024 - Marzo",
            value: "2024 - Marzo",
        },
        {
            name: "2024 - Abril",
            value: "2024 - Abril",
        },
        {
            name: "2024 - Mayo",
            value: "2024 - Mayo",
        },
        {
            name: "2024 - Junio",
            value: "2024 - Junio",
        },
        {
            name: "2024 - Julio",
            value: "2024 - Julio",
        },
        {
            name: "2024 - Agosto",
            value: "2024 - Agosto",
        },
        {
            name: "2024 - Setiembre",
            value: "2024 - Setiembre",
        },
        {
            name: "2024 - Octubre",
            value: "2024 - Octubre",
        },
        {
            name: "2024 - Noviembre",
            value: "2024 - Noviembre",
        },
        {
            name: "2024 - Diciembre",
            value: "2024 - Diciembre",
        },
        {
            name: "2025 - Enero",
            value: "2025 - Enero",
        },
        {
            name: "2025 - Febrero",
            value: "2025 - Febrero",
        },
    ],
    client: [
        {
           "name":"REPRESENTACIONES DECO SAC",
           "value":"REPRESENTACIONES DECO SAC"
        },
        {
           "name":"Quimica Suiza SAC",
           "value":"Quimica Suiza SAC"
        },
        {
           "name":"Laboratorios Siegfried SAC",
           "value":"Laboratorios Siegfried SAC"
        },
        // {
        //    "name":"CINTHIA DIAZ PORTUGAL",
        //    "value":"CINTHIA DIAZ PORTUGAL"
        // },
        // {
        //    "name":"CASTELLANO TALLEDO LUIS ALBERTO",
        //    "value":"CASTELLANO TALLEDO LUIS ALBERTO"
        // },
        // {
        //    "name":"HERSIL REPRESENTACIONES SAC",
        //    "value":"HERSIL REPRESENTACIONES SAC"
        // },
        // {
        //    "name":"DANY CESAR REA HURTADO",
        //    "value":"DANY CESAR REA HURTADO"
        // },
        // {
        //    "name":"MEDICINA AVANZADA SA",
        //    "value":"MEDICINA AVANZADA SA"
        // },
        // {
        //    "name":"NOVARTIS BIOSCIENCES PERU",
        //    "value":"NOVARTIS BIOSCIENCES PERU"
        // },
        {
           "name":"H Reps SAC",
           "value":"H Reps SAC"
        },
        // {
        //    "name":"NOVARTIS BIOSCIENCES PERU (MAP PAP)",
        //    "value":"NOVARTIS BIOSCIENCES PERU (MAP PAP)"
        // },
        {
           "name":"NOVARTIS BIOSCIENCES PERU (PAP KISQA)",
           "value":"NOVARTIS BIOSCIENCES PERU (PAP KISQA)"
        },
        // {
        //    "name":"NOVARTIS BIOSCIENCES PERU (MAP JAKAVI)",
        //    "value":"NOVARTIS BIOSCIENCES PERU (MAP JAKAVI)"
        // },
        {
           "name":"NOVARTIS BIOSCIENCES PERU (PAP)",
           "value":"NOVARTIS BIOSCIENCES PERU (PAP)"
        },
        {
           "name":"INRETAIL PHARMA SA",
           "value":"INRETAIL PHARMA SA"
        },
        {
           "name":"QS CONSUMO SAC",
           "value":"QS CONSUMO SAC"
        }
    ]
}

const Dispatch = ({ typeFilter, yearSelected }) => {

    const [typeFilterTwo, setTypeFilerTwo] = useState("");

    switch (typeFilter) {
        case "month":
            return (
                <>
                    {typeFilter !== "all" ?
                        <div className='w-full mt-6 p-3 flex items-center justify-between gap-x-4 rounded-lg bg-gray-three'>
                            {optionsFilter[typeFilter].map(({ name, value }, index) => (
                                <button key={"optionOcupability-" + index} className={cn('w-full p-2 text-center text-sm font-semibold rounded-lg transition-all duration-500 cursor-pointer hover:bg-white', typeFilterTwo == value ? "border bg-white border-black-two" : "bg-gray-two")} onClick={() => setTypeFilerTwo(value)}>
                                    {name}
                                </button>
                            ))}
                        </div> :
                        <></>
                    }
                    <DispatchMonth data={dataMonths[typeFilterTwo]} />
                </>
            )
        
        case "client":
            return (
                <>
                    {typeFilter !== "all" ?
                        <div className='w-full mt-6 p-3 flex items-center justify-between gap-x-4 rounded-lg bg-gray-three'>
                            {optionsFilter[typeFilter].map(({ name, value }, index) => (
                                <button key={"optionOcupability-" + index} className={cn('w-full p-2 text-center text-sm font-semibold rounded-lg transition-all duration-500 cursor-pointer hover:bg-white', typeFilterTwo == value ? "border bg-white border-black-two" : "bg-gray-two")} onClick={() => setTypeFilerTwo(value)}>
                                    {name}
                                </button>
                            ))}
                        </div> :
                        <></>
                    }
                    <DispatchMonth data={dataClients[typeFilterTwo]} yearSelected={yearSelected} />
                </>
            )
    
        default:
            return (
                <>
                    {typeFilter !== "all" ?
                        <div className='w-full mt-6 p-3 flex items-center justify-between gap-x-4 rounded-lg bg-gray-three'>
                            {optionsFilter[typeFilter].map(({ name, value }, index) => (
                                <button key={"optionOcupability-" + index} className={cn('w-full p-2 text-center text-sm font-semibold rounded-lg transition-all duration-500 cursor-pointer hover:bg-white', typeFilterTwo == value ? "border bg-white border-black-two" : "bg-gray-two")} onClick={() => setTypeFilerTwo(value)}>
                                    {name}
                                </button>
                            ))}
                        </div> :
                        <></>
                    }
                    <DispatchAll yearSelected={yearSelected} />
                </>
            )
    }
}

export default Dispatch