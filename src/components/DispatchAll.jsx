import { useEffect, useState } from "react";
import {
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList,
    Line,
    ComposedChart,
} from "recharts";

let data = [
    {
        "name":"2024 - Enero",
        "clients":{
            "H REPS SAC":{
                "box":365,
                "palletes":23
            },
            "Quimica Suiza SAC":{
                "box":451,
                "palletes":92
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":49,
                "palletes":0
            },
            "REPRESENTACIONES DECO SAC":{
                "box":66,
                "palletes":33
            }
        }
    },
    {
        "name":"2024 - Febrero",
        "clients":{
            "Quimica Suiza SAC":{
                "box":326,
                "palletes":140
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":52,
                "palletes":0
            },
            "H REPS SAC.":{
                "box":203,
                "palletes":20
            },
            "NOVARTIS BIOSCIENCES PAP":{
                "box":1,
                "palletes":0
            },
            "REPRESENTACIONES DECO SAC.":{
                "box":66,
                "palletes":22
            }
        }
    },
    {
        "name":"2024 - Marzo",
        "clients":{
            "Quimica Suiza SAC":{
                "box":319,
                "palletes":73
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":61,
                "palletes":0
            },
            "H REPS SAC.":{
                "box":369,
                "palletes":39
            },
            "REPRESENTACIONES DECO SAC.":{
                "box":77,
                "palletes":21
            },
            "NOVARTIS BIOSCIENCES PAP":{
                "box":1,
                "palletes":1
            }
        }
    },
    {
        "name":"2024 - Abril",
        "clients":{
            "Quimica Suiza SAC":{
                "box":265,
                "palletes":84
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":52,
                "palletes":0
            },
            "REPRESENTACIONES DECO SAC.":{
                "box":103,
                "palletes":23
            },
            "H REPS SAC.":{
                "box":300,
                "palletes":45
            },
            "NOVARTIS BIOSCIENCES PAP":{
                "box":1,
                "palletes":0
            }
        }
    },
    {
        "name":"2024 - Mayo",
        "clients":{
            "Quimica Suiza SAC":{
                "box":481,
                "palletes":118
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":60,
                "palletes":0
            },
            "H REPS SAC.":{
                "box":247,
                "palletes":24
            },
            "REPRESENTACIONES DECO SAC.":{
                "box":92,
                "palletes":43
            },
            "NOVARTIS BIOSCIENCES PAP":{
                "box":1,
                "palletes":1
            }
        }
    },
    {
        "name":"2024 - Junio",
        "clients":{
            "Quimica Suiza SAC":{
                "box":158,
                "palletes":45
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":83,
                "palletes":0
            },
            "H REPS SAC.":{
                "box":279,
                "palletes":29
            },
            "REPRESENTACIONES DECO SAC.":{
                "box":78,
                "palletes":35
            },
            "NOVARTIS BIOSCIENCES PAP":{
                "box":1,
                "palletes":1
            }
        }
    },
    {
        "name":"2024 - Julio",
        "clients":{
            "H REPS SAC.":{
                "box":119,
                "palletes":16
            },
            "Quimica Suiza SAC":{
                "box":126,
                "palletes":31
            },
            "REPRESENTACIONES DECO SAC.":{
                "box":78,
                "palletes":22
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":36,
                "palletes":1
            },
            "NOVARTIS BIOSCIENCES PAP":{
                "box":2,
                "palletes":1
            }
        }
    },
    {
        "name":"2024 - Agosto",
        "clients":{
            "REPRESENTACIONES DECO SAC.":{
                "box":109,
                "palletes":33
            },
            "H REPS SAC.":{
                "box":263,
                "palletes":53
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":25,
                "palletes":0
            },
            "NOVARTIS BIOSCIENCES PAP":{
                "box":2,
                "palletes":2
            },
            "Quimica Suiza SAC":{
                "box":246,
                "palletes":58
            }
        }
    },
    {
        "name":"2024 - Setiembre",
        "clients":{
            "Quimica Suiza SAC":{
                "box":253,
                "palletes":119
            },
            "REPRESENTACIONES DECO SAC.":{
                "box":125,
                "palletes":13
            },
            "H REPS SAC.":{
                "box":357,
                "palletes":45
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":40,
                "palletes":0
            },
            "NOVARTIS BIOSCIENCES PAP":{
                "box":2,
                "palletes":2
            },
        }
    },
    {
        "name":"2024 - Octubre",
        "clients":{
            "REPRESENTACIONES DECO SAC.":{
                "box":161,
                "palletes":28
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":41,
                "palletes":0
            },
            "H REPS SAC.":{
                "box":364,
                "palletes":84
            },
            "Quimica Suiza SAC":{
                "box":296,
                "palletes":90
            },
            "NOVARTIS BIOSCIENCES PAP":{
                "box":3,
                "palletes":3
            }
        }
    },
    {
        "name":"2024 - Noviembre",
        "clients":{
            "LABORATORIOS SIEGFRIED SAC":{
                "box":32,
                "palletes":0
            },
            "H REPS SAC.":{
                "box":310,
                "palletes":32
            },
            "Quimica Suiza SAC":{
                "box":187,
                "palletes":55
            },
            "REPRESENTACIONES DECO SAC.":{
                "box":50,
                "palletes":13
            },
            "NOVARTIS BIOSCIENCES PAP":{
                "box":1,
                "palletes":1
            }
        }
    },
    {
        "name":"2024 - Diciembre",
        "clients":{
            "Quimica Suiza SAC":{
                "box":178,
                "palletes":48
            },
            "H REPS SAC.":{
                "box":161,
                "palletes":38
            },
            "REPRESENTACIONES DECO SAC.":{
                "box":93,
                "palletes":21
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":13,
                "palletes":0
            },
            "NOVARTIS BIOSCIENCES PAP":{
                "box":2,
                "palletes":2
            },
        }
    },
    {
        "name":"2025 - Enero",
        "clients":{
            "Quimica Suiza SAC":{
                "box":1,
                "palletes":1
            },
            "REPRESENTACIONES DECO SAC.":{
                "box":87,
                "palletes":23
            },
            "LABORATORIOS SIEGFRIED SAC":{
                "box":64,
                "palletes":0
            },
            "H REPS SAC.":{
                "box":282,
                "palletes":83
            },
            "NOVARTIS BIOSCIENCES PAP":{
                "box":3,
                "palletes":3
            },
            "INRETAIL PHARMA SA":{
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
data = [
    {
        "name": "2024 - Enero",
        "clients": {
            "H Reps SAC": {
                "box": 365,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 23
            },
            "Quimica Suiza SAC": {
                "box": 451,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 92
            },
            "Laboratorios Siegfried SAC": {
                "box": 49,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            },
            "REPRESENTACIONES DECO SAC": {
                "box": 66,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 33
            }
        }
    },
    {
        "name": "2024 - Febrero",
        "clients": {
            "Quimica Suiza SAC": {
                "box": 326,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 140
            },
            "Laboratorios Siegfried SAC": {
                "box": 52,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            },
            "H Reps SAC": {
                "box": 203,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 20
            },
            "NOVARTIS BIOSCIENCES PERU": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            },
            "REPRESENTACIONES DECO SAC": {
                "box": 66,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 22
            }
        }
    },
    {
        "name": "2024 - Marzo",
        "clients": {
            "Quimica Suiza SAC": {
                "box": 319,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 73
            },
            "Laboratorios Siegfried SAC": {
                "box": 61,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            },
            "H Reps SAC": {
                "box": 369,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 39
            },
            "REPRESENTACIONES DECO SAC": {
                "box": 77,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 21
            },
            "NOVARTIS BIOSCIENCES PERU": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    },
    {
        "name": "2024 - Abril",
        "clients": {
            "Quimica Suiza SAC": {
                "box": 265,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 84
            },
            "Laboratorios Siegfried SAC": {
                "box": 52,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            },
            "REPRESENTACIONES DECO SAC": {
                "box": 103,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 23
            },
            "H Reps SAC": {
                "box": 300,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 45
            },
            "NOVARTIS BIOSCIENCES PERU": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            }
        }
    },
    {
        "name": "2024 - Mayo",
        "clients": {
            "Quimica Suiza SAC": {
                "box": 481,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 118
            },
            "Laboratorios Siegfried SAC": {
                "box": 60,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            },
            "H Reps SAC": {
                "box": 247,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 24
            },
            "REPRESENTACIONES DECO SAC": {
                "box": 92,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 43
            },
            "NOVARTIS BIOSCIENCES PERU": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    },
    {
        "name": "2024 - Junio",
        "clients": {
            "Quimica Suiza SAC": {
                "box": 158,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 45
            },
            "Laboratorios Siegfried SAC": {
                "box": 83,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            },
            "H Reps SAC": {
                "box": 279,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 29
            },
            "REPRESENTACIONES DECO SAC": {
                "box": 78,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 35
            },
            "NOVARTIS BIOSCIENCES PERU": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    },
    {
        "name": "2024 - Julio",
        "clients": {
            "H Reps SAC": {
                "box": 119,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 16
            },
            "Quimica Suiza SAC": {
                "box": 126,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 31
            },
            "REPRESENTACIONES DECO SAC": {
                "box": 78,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 22
            },
            "Laboratorios Siegfried SAC": {
                "box": 36,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            },
            "NOVARTIS BIOSCIENCES PERU (MAP PAP)": {
                "box": 2,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    },
    {
        "name": "2024 - Agosto",
        "clients": {
            "Quimica Suiza SAC": {
                "box": 246,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 58
            },
            "REPRESENTACIONES DECO SAC": {
                "box": 109,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 33
            },
            "H Reps SAC": {
                "box": 263,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 53
            },
            "Laboratorios Siegfried SAC": {
                "box": 25,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            },
            "NOVARTIS BIOSCIENCES PERU (PAP KISQA)": {
                "box": 2,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 2
            }
        }
    },
    {
        "name": "2024 - Setiembre",
        "clients": {
            "Quimica Suiza SAC": {
                "box": 253,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 119
            },
            "REPRESENTACIONES DECO SAC": {
                "box": 125,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 13
            },
            "H Reps SAC": {
                "box": 357,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 45
            },
            "Laboratorios Siegfried SAC": {
                "box": 40,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            },
            "NOVARTIS BIOSCIENCES PERU (PAP KISQA)": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            },
            "NOVARTIS BIOSCIENCES PERU (MAP JAKAVI)": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    },
    {
        "name": "2024 - Octubre",
        "clients": {
            "REPRESENTACIONES DECO SAC": {
                "box": 161,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 28
            },
            "Quimica Suiza SAC": {
                "box": 296,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 90
            },
            "Laboratorios Siegfried SAC": {
                "box": 41,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            },
            "H Reps SAC": {
                "box": 364,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 84
            },
            "NOVARTIS BIOSCIENCES PERU (PAP)": {
                "box": 3,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 3
            }
        }
    },
    {
        "name": "2024 - Noviembre",
        "clients": {
            "Quimica Suiza SAC": {
                "box": 187,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 55
            },
            "Laboratorios Siegfried SAC": {
                "box": 32,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            },
            "H Reps SAC": {
                "box": 310,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 32
            },
            "REPRESENTACIONES DECO SAC": {
                "box": 50,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 13
            },
            "NOVARTIS BIOSCIENCES PERU (PAP)": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    },
    {
        "name": "2024 - Diciembre",
        "clients": {
            "Quimica Suiza SAC": {
                "box": 178,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 48
            },
            "H Reps SAC": {
                "box": 161,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 39
            },
            "REPRESENTACIONES DECO SAC": {
                "box": 93,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 21
            },
            "Laboratorios Siegfried SAC": {
                "box": 13,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            },
            "NOVARTIS BIOSCIENCES PERU (PAP)": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            },
            "NOVARTIS BIOSCIENCES PERU (PAP KISQA)": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            }
        }
    },
    {
        "name": "2025 - Enero",
        "clients": {
            "Quimica Suiza SAC": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 1
            },
            "REPRESENTACIONES DECO SAC": {
                "box": 87,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 7
            },
            "Laboratorios Siegfried SAC": {
                "box": 64,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 0
            },
            "H Reps SAC": {
                "box": 282,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 18
            },
            "NOVARTIS BIOSCIENCES PERU (PAP)": {
                "box": 3,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 3
            },
            "INRETAIL PHARMA SA": {
                "box": 41,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 3
            },
            "QS CONSUMO SAC": {
                "box": 193,
                "box_completes": 0,
                "box_saldo": 0,
                "palletes": 11
            }
        }
    },
    {
        "name": "2025 - Febrero",
        "clients": {
            "REPRESENTACIONES DECO SAC": {
                "box": 86,
                "box_completes": 40,
                "box_saldo": 46,
                "palletes": 6
            },
            "H Reps SAC": {
                "box": 220,
                "box_completes": 187,
                "box_saldo": 33,
                "palletes": 18
            },
            "Laboratorios Siegfried SAC": {
                "box": 50,
                "box_completes": 6,
                "box_saldo": 44,
                "palletes": 0
            },
            "QS CONSUMO SAC": {
                "box": 136,
                "box_completes": 124,
                "box_saldo": 12,
                "palletes": 12
            },
            "NOVARTIS BIOSCIENCES PERU (PAP KISQA)": {
                "box": 1,
                "box_completes": 0,
                "box_saldo": 1,
                "palletes": 1
            }
        }
    }
]
const clientsBox = [
    "clients.REPRESENTACIONES DECO SAC.box",
    "clients.Quimica Suiza SAC.box",
    "clients.Laboratorios Siegfried SAC.box",
    "clients.CINTHIA DIAZ PORTUGAL.box",
    "clients.CASTELLANO TALLEDO LUIS ALBERTO.box",
    "clients.HERSIL REPRESENTACIONES SAC.box",
    "clients.DANY CESAR REA HURTADO.box",
    "clients.MEDICINA AVANZADA SA.box",
    "clients.NOVARTIS BIOSCIENCES PERU.box",
    "clients.H Reps SAC.box",
    "clients.NOVARTIS BIOSCIENCES PERU (MAP PAP).box",
    "clients.NOVARTIS BIOSCIENCES PERU (PAP KISQA).box",
    "clients.NOVARTIS BIOSCIENCES PERU (MAP JAKAVI).box",
    "clients.NOVARTIS BIOSCIENCES PERU (PAP).box",
    "clients.INRETAIL PHARMA SA.box",
    "clients.QS CONSUMO SAC.box"
]
const clientPalletes = [
    "clients.REPRESENTACIONES DECO SAC.palletes",
    "clients.Quimica Suiza SAC.palletes",
    "clients.Laboratorios Siegfried SAC.palletes",
    "clients.CINTHIA DIAZ PORTUGAL.palletes",
    "clients.CASTELLANO TALLEDO LUIS ALBERTO.palletes",
    "clients.HERSIL REPRESENTACIONES SAC.palletes",
    "clients.DANY CESAR REA HURTADO.palletes",
    "clients.MEDICINA AVANZADA SA.palletes",
    "clients.NOVARTIS BIOSCIENCES PERU.palletes",
    "clients.H Reps SAC.palletes",
    "clients.NOVARTIS BIOSCIENCES PERU (MAP PAP).palletes",
    "clients.NOVARTIS BIOSCIENCES PERU (PAP KISQA).palletes",
    "clients.NOVARTIS BIOSCIENCES PERU (MAP JAKAVI).palletes",
    "clients.NOVARTIS BIOSCIENCES PERU (PAP).palletes",
    "clients.INRETAIL PHARMA SA.palletes",
    "clients.QS CONSUMO SAC.palletes"
]

const colorsClientsBox = {
    "clients.REPRESENTACIONES DECO SAC.box":"#ef4444",
    "clients.Quimica Suiza SAC.box":"#f97316",
    "clients.Laboratorios Siegfried SAC.box":"#f59e0b",
    "clients.CINTHIA DIAZ PORTUGAL.box":"#eab308",
    "clients.CASTELLANO TALLEDO LUIS ALBERTO.box":"#84cc16",
    "clients.HERSIL REPRESENTACIONES SAC.box":"#22c55e",
    "clients.DANY CESAR REA HURTADO.box":"#10b981",
    "clients.MEDICINA AVANZADA SA.box":"#14b8a6",
    "clients.NOVARTIS BIOSCIENCES PERU.box":"#06b6d4",
    "clients.H Reps SAC.box":"#0ea5e9",
    "clients.NOVARTIS BIOSCIENCES PERU (MAP PAP).box":"#3b82f6",
    "clients.NOVARTIS BIOSCIENCES PERU (PAP KISQA).box":"#6366f1",
    "clients.NOVARTIS BIOSCIENCES PERU (MAP JAKAVI).box":"#8b5cf6",
    "clients.NOVARTIS BIOSCIENCES PERU (PAP).box":"#a855f7",
    "clients.INRETAIL PHARMA SA.box":"#d946ef",
    "clients.QS CONSUMO SAC.box":"#ec4899"
}
const colorsClientsPalletes = {
    "clients.REPRESENTACIONES DECO SAC.palletes":"#737373",
    "clients.Quimica Suiza SAC.palletes":"#78716c",
    "clients.Laboratorios Siegfried SAC.palletes":"#a16207",
    "clients.CINTHIA DIAZ PORTUGAL.palletes":"#f472b6",
    "clients.CASTELLANO TALLEDO LUIS ALBERTO.palletes":"#ec4899",
    "clients.HERSIL REPRESENTACIONES SAC.palletes":"#d946ef",
    "clients.DANY CESAR REA HURTADO.palletes":"#a855f7",
    "clients.MEDICINA AVANZADA SA.palletes":"#8b5cf6",
    "clients.NOVARTIS BIOSCIENCES PERU.palletes":"#6366f1",
    "clients.H Reps SAC.palletes":"#3b82f6",
    "clients.NOVARTIS BIOSCIENCES PERU (MAP PAP).palletes":"#0ea5e9",
    "clients.NOVARTIS BIOSCIENCES PERU (PAP KISQA).palletes":"#06b6d4",
    "clients.NOVARTIS BIOSCIENCES PERU (MAP JAKAVI).palletes":"#14b8a6",
    "clients.NOVARTIS BIOSCIENCES PERU (PAP).palletes":"#10b981",
    "clients.INRETAIL PHARMA SA.palletes":"#22c55e",
    "clients.QS CONSUMO SAC.palletes":"#84cc16"
}

const CustomLabel = ({ x, y, width, height, value }) => {
    if (!value || value === 0) return null;
    return (
        <text
            x={x + width / 2}
            y={y + height / 2}
            textAnchor="middle"
            fontSize={20}
            fill="white"
        >
            {value}
        </text>
    );
};
const CustomTotalLabel = ({ x, y, width, value }) => {
    if (!value || value === 0) return null;
    return (
        <text
            x={x + width / 2}
            y={y - 10}
            textAnchor="middle"
            fontSize={14}
            fill="#000"
        >
            {value}
        </text>
    );
};
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const listBox = []
        const listPalletes = []
        let box = 0
        let palletes = 0

        for (let i = 0; i < payload.length; i++) {
            const element = payload[i];
            const keys = element.name.split(".")

            if (keys[2] == "box") {
                listBox.push(<p className="text-lg font-semibold" style={{ color: element.color }}>{keys[1]}: <strong>{element.value}</strong></p>)
                box = box + element.value
            }

            if (keys[2] == "palletes") {
                listPalletes.push(<p className="text-lg font-semibold" style={{ color: element.color }}>{keys[1]}: <strong>{element.value}</strong></p>)
                palletes = palletes + element.value
            }
        }

        return (
        <div style={{ background: "white", padding: 10, border: "1px solid #ccc" }}>
            <p className="text-2xl font-semibold mb-4">
                <strong>{payload[0].payload.name}</strong>
            </p>
            <p className="text-2xl my-4">Total Cajas: <strong>{box}</strong></p>
            <p className="text-2xl my-4">Total Paletas: <strong>{palletes}</strong></p>
            <div className="my-4">
                <p className="text-xl font-semibold">Cajas:</p>
                {listBox}
            </div>
            <div className="my-4">
                <p className="text-xl font-semibold">Paletas:</p>
                {listPalletes}
            </div>
        </div>
        );
    }
    return null;
};

const DispatchAll = ({ yearSelected }) => {

    const [dataFilter, setDataFilter] = useState(data);

    useEffect(() => {
        const dataFilter = data.filter(i => i.name.includes(yearSelected));

        setDataFilter(dataFilter);
    },[yearSelected]);

    return (
        <ResponsiveContainer width="98%" height="85%">
            <ComposedChart
                width={500}
                height={300}
                data={dataFilter}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={"name"} />
                <YAxis />

                <Tooltip content={<CustomTooltip />} />
                {/* <Legend /> */}

                {clientsBox.map((i, index) => (
                    <Bar key={`box-${index}`} dataKey={i} stackId="ar" fill={colorsClientsBox[i]}>
                        <LabelList dataKey={i} content={CustomLabel} />
                    </Bar>
                ))}

                {clientPalletes.map((i, index) => (
                    <Bar key={`palletes-${index}`} dataKey={i} stackId="oc" fill={colorsClientsPalletes[i]}>
                        <LabelList dataKey={i} content={CustomLabel} />
                    </Bar>
                ))}

            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default DispatchAll