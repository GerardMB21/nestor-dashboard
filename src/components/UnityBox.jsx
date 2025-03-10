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
    Area,
} from "recharts";

// const dataNormal = [
//     {
//         name: "2024 - Enero",
//         quantity: 39967,
//         trash: 1040,
//         box: 304,
//         AR_refrigeration: {
//             process: 1,
//             quantity: 199,
//             box: 7,
//             rest: 3,
//             capacity: 28,
//         },
//         AR_seco: {
//             process: 14,
//             quantity: 39768,
//             box: 297,
//             rest: 1151,
//             capacity: 2649,
//         },
//         OC_refrigeration: {
//             process: 1,
//             quantity: 199,
//             box: 7,
//             rest: 3,
//             capacity: 28,
//         },
//         OC_seco: {
//             process: 14,
//             quantity: 39768,
//             box: 297,
//             rest: 1151,
//             capacity: 2649,
//         },
//     },
//     {
//         name: "2024 - Febrero",
//         quantity: 52950,
//         trash: 2750,
//         box: 687,
//         AR_refrigeration: {
//             process: 2,
//             quantity: 3562,
//             box: 62,
//             rest: 142,
//             capacity: 260,
//         },
//         AR_seco: {
//             process: 25,
//             quantity: 52875,
//             box: 625,
//             rest: 1518,
//             capacity: 3202,
//         },
//         OC_refrigeration: {
//             process: 2,
//             quantity: 3562,
//             box: 62,
//             rest: 142,
//             capacity: 260,
//         },
//         OC_seco: {
//             process: 23,
//             quantity: 49388,
//             box: 563,
//             rest: 1455,
//             capacity: 3018,
//         },
//     },
//     {
//         name: "2024 - Marzo",
//         quantity: 61977,
//         trash: 6068,
//         box: 635,
//         AR_refrigeration: {
//             process: 0,
//             quantity: 0,
//             box: 0,
//             rest: 0,
//             capacity: 0,
//         },
//         AR_seco: {
//             process: 15,
//             quantity: 61977,
//             box: 635,
//             rest: 1352,
//             capacity: 2610,
//         },
//         OC_refrigeration: {
//             process: 0,
//             quantity: 0,
//             box: 0,
//             rest: 0,
//             capacity: 0,
//         },
//         OC_seco: {
//             process: 15,
//             quantity: 61977,
//             box: 635,
//             rest: 1352,
//             capacity: 2610,
//         },
//     },
//     {
//         name: "2024 - Abril",
//         quantity: 26659,
//         trash: 4200,
//         box: 278,
//         AR_refrigeration: {
//             process: 0,
//             quantity: 0,
//             box: 0,
//             rest: 0,
//             capacity: 0,
//         },
//         AR_seco: {
//             process: 13,
//             quantity: 26659,
//             box: 278,
//             rest: 659,
//             capacity: 2179,
//         },
//         OC_refrigeration: {
//             process: 0,
//             quantity: 0,
//             box: 0,
//             rest: 0,
//             capacity: 0,
//         },
//         OC_seco: {
//             process: 12,
//             quantity: 24643,
//             box: 250,
//             rest: 659,
//             capacity: 2107,
//         },
//     },
//     {
//         name: "2024 - Mayo",
//         quantity: 40578,
//         trash: 8039,
//         box: 554,
//         AR_refrigeration: {
//             process: 8,
//             quantity: 2845,
//             box: 32,
//             rest: 297,
//             capacity: 662,
//         },
//         AR_seco: {
//             process: 13,
//             quantity: 38374,
//             box: 522,
//             rest: 301,
//             capacity: 1119,
//         },
//         OC_refrigeration: {
//             process: 6,
//             quantity: 2204,
//             box: 28,
//             rest: 296,
//             capacity: 442,
//         },
//         OC_seco: {
//             process: 13,
//             quantity: 38374,
//             box: 522,
//             rest: 301,
//             capacity: 1119,
//         },
//     },
//     {
//         name: "2024 - Junio",
//         quantity: 57086,
//         trash: 3796,
//         box: 1005,
//         AR_refrigeration: {
//             process: 2,
//             quantity: 3075,
//             box: 61,
//             rest: 19,
//             capacity: 106,
//         },
//         AR_seco: {
//             process: 14,
//             quantity: 55946,
//             box: 944,
//             rest: 308,
//             capacity: 886,
//         },
//         OC_refrigeration: {
//             process: 2,
//             quantity: 3075,
//             box: 61,
//             rest: 19,
//             capacity: 106,
//         },
//         OC_seco: {
//             process: 13,
//             quantity: 54011,
//             box: 824,
//             rest: 293,
//             capacity: 870,
//         },
//     },
//     {
//         name: "2024 - Julio",
//         quantity: 48892,
//         trash: 9433,
//         box: 533,
//         AR_refrigeration: {
//             process: 1,
//             quantity: 839,
//             box: 3,
//             rest: 209,
//             capacity: 210,
//         },
//         AR_seco: {
//             process: 17,
//             quantity: 48053,
//             box: 530,
//             rest: 754,
//             capacity: 2929,
//         },
//         OC_refrigeration: {
//             process: 1,
//             quantity: 839,
//             box: 3,
//             rest: 209,
//             capacity: 210,
//         },
//         OC_seco: {
//             process: 17,
//             quantity: 48053,
//             box: 530,
//             rest: 754,
//             capacity: 2929,
//         },
//     },
//     {
//         name: "2024 - Agosto",
//         quantity: 39086,
//         trash: 1119,
//         box: 438,
//         AR_refrigeration: {
//             process: 1,
//             quantity: 249,
//             box: 8,
//             rest: 25,
//             capacity: 28,
//         },
//         AR_seco: {
//             process: 14,
//             quantity: 38837,
//             box: 430,
//             rest: 1455,
//             capacity: 2634,
//         },
//         OC_refrigeration: {
//             process: 1,
//             quantity: 249,
//             box: 8,
//             rest: 25,
//             capacity: 28,
//         },
//         OC_seco: {
//             process: 14,
//             quantity: 38837,
//             box: 430,
//             rest: 1455,
//             capacity: 2634,
//         },
//     },
//     {
//         name: "2024 - Setiembre",
//         quantity: 58478,
//         trash: 11497,
//         box: 1055,
//         AR_refrigeration: {
//             process: 0,
//             quantity: 0,
//             box: 0,
//             rest: 0,
//             capacity: 0,
//         },
//         AR_seco: {
//             process: 14,
//             quantity: 63342,
//             box: 1055,
//             rest: 256,
//             capacity: 843,
//         },
//         OC_refrigeration: {
//             process: 0,
//             quantity: 0,
//             box: 0,
//             rest: 0,
//             capacity: 0,
//         },
//         OC_seco: {
//             process: 11,
//             quantity: 58478,
//             box: 906,
//             rest: 211,
//             capacity: 774,
//         },
//     },
//     {
//         name: "2024 - Octubre",
//         quantity: 38446,
//         trash: 3950,
//         box: 635,
//         AR_refrigeration: {
//             process: 1,
//             quantity: 900,
//             box: 4,
//             rest: 60,
//             capacity: 210,
//         },
//         AR_seco: {
//             process: 21,
//             quantity: 54808,
//             box: 631,
//             rest: 1079,
//             capacity: 2229,
//         },
//         OC_refrigeration: {
//             process: 1,
//             quantity: 900,
//             box: 4,
//             rest: 60,
//             capacity: 210,
//         },
//         OC_seco: {
//             process: 18,
//             quantity: 37546,
//             box: 462,
//             rest: 921,
//             capacity: 1861,
//         },
//     },
//     {
//         name: "2024 - Noviembre",
//         quantity: 18359,
//         trash: 444,
//         box: 257,
//         AR_refrigeration: {
//             process: 0,
//             quantity: 0,
//             box: 0,
//             rest: 0,
//             capacity: 0,
//         },
//         AR_seco: {
//             process: 7,
//             quantity: 18359,
//             box: 257,
//             rest: 777,
//             capacity: 1772,
//         },
//         OC_refrigeration: {
//             process: 0,
//             quantity: 0,
//             box: 0,
//             rest: 0,
//             capacity: 0,
//         },
//         OC_seco: {
//             process: 7,
//             quantity: 18359,
//             box: 257,
//             rest: 777,
//             capacity: 1772,
//         },
//     },
//     {
//         name: "2024 - Diciembre",
//         quantity: 60308,
//         trash: 6441,
//         box: 703,
//         AR_refrigeration: {
//             process: 2,
//             quantity: 397,
//             box: 14,
//             rest: 5,
//             capacity: 56,
//         },
//         AR_seco: {
//             process: 19,
//             quantity: 61111,
//             box: 689,
//             rest: 892,
//             capacity: 2383,
//         },
//         OC_refrigeration: {
//             process: 2,
//             quantity: 397,
//             box: 14,
//             rest: 5,
//             capacity: 56,
//         },
//         OC_seco: {
//             process: 17,
//             quantity: 59911,
//             box: 678,
//             rest: 792,
//             capacity: 2183,
//         },
//     },
//     {
//         name: "2025 - Enero",
//         quantity: 60404,
//         trash: 7990,
//         box: 501,
//         AR_refrigeration: {
//             process: 3,
//             quantity: 3462,
//             box: 67,
//             rest: 62,
//             capacity: 200,
//         },
//         AR_seco: {
//             process: 23,
//             quantity: 56942,
//             box: 434,
//             rest: 2383,
//             capacity: 4857,
//         },
//         OC_refrigeration: {
//             process: 3,
//             quantity: 3462,
//             box: 67,
//             rest: 62,
//             capacity: 200,
//         },
//         OC_seco: {
//             process: 21,
//             quantity: 55788,
//             box: 404,
//             rest: 2381,
//             capacity: 4791,
//         },
//     },
// ];
let dataNormal = [
    {
        "name": "2024 - Enero",
        "H REPS S.A.C.": {
            "quantity": 72694,
            "box": 730,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 46
        },
        "Quimica Suiza S.A.": {
            "quantity": 57214,
            "box": 902,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 184
        },
        "LABORATORIOS SIEGFRIED SAC": {
            "quantity": 2372,
            "box": 98,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 0
        },
        "REPRESENTACIONES DECO S.A.C.": {
            "quantity": 3598,
            "box": 132,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 66
        },
        "quantity": 135878,
        "box": 1862,
        "box_completes": 0,
        "box_saldo": 0,
        "palletes": 296
    },
    {
        "name": "2024 - Febrero",
        "Quimica Suiza S.A.": {
            "quantity": 39998,
            "box": 652,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 280
        },
        "LABORATORIOS SIEGFRIED SAC": {
            "quantity": 1674,
            "box": 104,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 0
        },
        "H REPS S.A.C.": {
            "quantity": 41600,
            "box": 406,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 40
        },
        "NOVARTIS BIOSCIENCES PERU": {
            "quantity": 2,
            "box": 2,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 0
        },
        "REPRESENTACIONES DECO S.A.C.": {
            "quantity": 3484,
            "box": 132,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 44
        },
        "quantity": 86758,
        "box": 1296,
        "box_completes": 0,
        "box_saldo": 0,
        "palletes": 364
    },
    {
        "name": "2024 - Marzo",
        "Quimica Suiza S.A.": {
            "quantity": 31960,
            "box": 638,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 146
        },
        "LABORATORIOS SIEGFRIED SAC": {
            "quantity": 2324,
            "box": 122,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 0
        },
        "H REPS S.A.C.": {
            "quantity": 70264,
            "box": 738,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 78
        },
        "REPRESENTACIONES DECO S.A.C.": {
            "quantity": 7590,
            "box": 154,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 42
        },
        "NOVARTIS BIOSCIENCES PERU": {
            "quantity": 2,
            "box": 2,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 2
        },
        "quantity": 112140,
        "box": 1654,
        "box_completes": 0,
        "box_saldo": 0,
        "palletes": 268
    },
    {
        "name": "2024 - Abril",
        "Quimica Suiza S.A.": {
            "quantity": 32478,
            "box": 530,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 168
        },
        "LABORATORIOS SIEGFRIED SAC": {
            "quantity": 3000,
            "box": 104,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 0
        },
        "REPRESENTACIONES DECO S.A.C.": {
            "quantity": 10482,
            "box": 206,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 46
        },
        "H REPS S.A.C.": {
            "quantity": 55668,
            "box": 600,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 90
        },
        "NOVARTIS BIOSCIENCES PERU": {
            "quantity": 2,
            "box": 2,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 0
        },
        "quantity": 101630,
        "box": 1442,
        "box_completes": 0,
        "box_saldo": 0,
        "palletes": 304
    },
    {
        "name": "2024 - Mayo",
        "Quimica Suiza S.A.": {
            "quantity": 47980,
            "box": 962,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 236
        },
        "LABORATORIOS SIEGFRIED SAC": {
            "quantity": 2174,
            "box": 120,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 0
        },
        "H REPS S.A.C.": {
            "quantity": 45860,
            "box": 494,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 48
        },
        "REPRESENTACIONES DECO S.A.C.": {
            "quantity": 5296,
            "box": 184,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 86
        },
        "NOVARTIS BIOSCIENCES PERU": {
            "quantity": 2,
            "box": 2,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 2
        },
        "quantity": 101312,
        "box": 1762,
        "box_completes": 0,
        "box_saldo": 0,
        "palletes": 372
    },
    {
        "name": "2024 - Junio",
        "QUIMICA SUIZA S.A.C.": {
            "quantity": 7448,
            "box": 218,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 80
        },
        "Quimica Suiza S.A.C.": {
            "quantity": 6364,
            "box": 98,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 10
        },
        "LABORATORIOS SIEGFRIED SAC": {
            "quantity": 2306,
            "box": 166,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 0
        },
        "H REPS SAC": {
            "quantity": 46536,
            "box": 558,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 58
        },
        "REPRESENTACIONES DECO S.A.C.": {
            "quantity": 4092,
            "box": 156,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 70
        },
        "NOVARTIS BIOSCIENCES PERU": {
            "quantity": 4,
            "box": 2,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 2
        },
        "quantity": 66750,
        "box": 1198,
        "box_completes": 0,
        "box_saldo": 0,
        "palletes": 220
    },
    {
        "name": "2024 - Julio",
        "H REPS SAC": {
            "quantity": 29516,
            "box": 238,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 32
        },
        "Quimica Suiza S.A.C.": {
            "quantity": 3322,
            "box": 56,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 16
        },
        "REPRESENTACIONES DECO S.A.C.": {
            "quantity": 5750,
            "box": 156,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 44
        },
        "QUIMICA SUIZA S.A.C.": {
            "quantity": 5634,
            "box": 196,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 46
        },
        "LABORATORIOS SIEGFRIED SAC": {
            "quantity": 782,
            "box": 72,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 2
        },
        "NOVARTIS BIOSCIENCES PERU (MAP. PAP)": {
            "quantity": 4,
            "box": 4,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 2
        },
        "quantity": 45008,
        "box": 722,
        "box_completes": 0,
        "box_saldo": 0,
        "palletes": 142
    },
    {
        "name": "2024 - Agosto",
        "QUIMICA SUIZA S.A.C.": {
            "quantity": 5258,
            "box": 232,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 72
        },
        "REPRESENTACIONES DECO S.A.C.": {
            "quantity": 5942,
            "box": 218,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 66
        },
        "H REPS SAC": {
            "quantity": 53076,
            "box": 526,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 106
        },
        "LABORATORIOS SIEGFRIED SAC": {
            "quantity": 1182,
            "box": 50,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 0
        },
        "NOVARTIS BIOSCIENCES PERU (PAP KISQA)": {
            "quantity": 4,
            "box": 4,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 4
        },
        "Quimica Suiza S.A.C.": {
            "quantity": 15690,
            "box": 260,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 44
        },
        "quantity": 81152,
        "box": 1290,
        "box_completes": 0,
        "box_saldo": 0,
        "palletes": 292
    },
    {
        "name": "2024 - Setiembre",
        "QUIMICA SUIZA S.A.C.": {
            "quantity": 19926,
            "box": 384,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 198
        },
        "Quimica Suiza S.A.C.": {
            "quantity": 9616,
            "box": 122,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 40
        },
        "REPRESENTACIONES DECO S.A.C.": {
            "quantity": 12002,
            "box": 250,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 26
        },
        "H REPS SAC": {
            "quantity": 52964,
            "box": 714,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 90
        },
        "LABORATORIOS SIEGFRIED SAC": {
            "quantity": 1726,
            "box": 80,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 0
        },
        "NOVARTIS BIOSCIENCES PERU (PAP KISQA)": {
            "quantity": 6,
            "box": 2,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 2
        },
        "NOVARTIS BIOSCIENCES PERU (MAP JAKAVI)": {
            "quantity": 12,
            "box": 2,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 2
        },
        "quantity": 96252,
        "box": 1554,
        "box_completes": 0,
        "box_saldo": 0,
        "palletes": 358
    },
    {
        "name": "2024 - Octubre",
        "REPRESENTACIONES DECO S.A.C.": {
            "quantity": 22762,
            "box": 322,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 56
        },
        "QUIMICA SUIZA S.A.C.": {
            "quantity": 9298,
            "box": 174,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 66
        },
        "LABORATORIOS SIEGFRIED SAC": {
            "quantity": 1394,
            "box": 82,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 0
        },
        "H REPS SAC": {
            "quantity": 63654,
            "box": 728,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 168
        },
        "Quimica Suiza S.A.C.": {
            "quantity": 18730,
            "box": 418,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 114
        },
        "NOVARTIS BIOSCIENCES PERU (PAP)": {
            "quantity": 12,
            "box": 6,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 6
        },
        "quantity": 115850,
        "box": 1730,
        "box_completes": 0,
        "box_saldo": 0,
        "palletes": 410
    },
    {
        "name": "2024 - Noviembre",
        "QUIMICA SUIZA S.A.C.": {
            "quantity": 15492,
            "box": 294,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 106
        },
        "LABORATORIOS SIEGFRIED SAC": {
            "quantity": 2608,
            "box": 64,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 0
        },
        "H REPS SAC": {
            "quantity": 44644,
            "box": 620,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 64
        },
        "Quimica Suiza S.A.C.": {
            "quantity": 5678,
            "box": 80,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 4
        },
        "REPRESENTACIONES DECO S.A.C.": {
            "quantity": 2584,
            "box": 100,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 26
        },
        "NOVARTIS BIOSCIENCES PERU (PAP)": {
            "quantity": 2,
            "box": 2,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 2
        },
        "quantity": 71008,
        "box": 1160,
        "box_completes": 0,
        "box_saldo": 0,
        "palletes": 202
    },
    {
        "name": "2024 - Diciembre",
        "QUIMICA SUIZA S.A.C.": {
            "quantity": 23330,
            "box": 356,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 96
        },
        "H REPS SAC": {
            "quantity": 35736,
            "box": 322,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 77
        },
        "REPRESENTACIONES DECO S.A.C.": {
            "quantity": 10064,
            "box": 186,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 42
        },
        "LABORATORIOS SIEGFRIED SAC": {
            "quantity": 588,
            "box": 26,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 0
        },
        "NOVARTIS BIOSCIENCES PERU (PAP)": {
            "quantity": 2,
            "box": 2,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 2
        },
        "NOVARTIS BIOSCIENCES PERU (PAP KISQA)": {
            "quantity": 2,
            "box": 2,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 2
        },
        "quantity": 69722,
        "box": 894,
        "box_completes": 0,
        "box_saldo": 0,
        "palletes": 219
    },
    {
        "name": "2025 - Enero",
        "QUIMICA SUIZA S.A.C.": {
            "quantity": 40,
            "box": 2,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 2
        },
        "REPRESENTACIONES DECO S.A.C.": {
            "quantity": 4452,
            "box": 174,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 46
        },
        "LABORATORIOS SIEGFRIED SAC": {
            "quantity": 2634,
            "box": 128,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 0
        },
        "H REPS SAC": {
            "quantity": 55360,
            "box": 564,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 166
        },
        "NOVARTIS BIOSCIENCES PERU (PAP)": {
            "quantity": 6,
            "box": 6,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 6
        },
        "INRETAIL PHARMA S.A.": {
            "quantity": 5844,
            "box": 82,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 6
        },
        "QS CONSUMO SAC": {
            "quantity": 13830,
            "box": 386,
            "box_completes": 0,
            "box_saldo": 0,
            "palletes": 158
        },
        "quantity": 82166,
        "box": 1342,
        "box_completes": 0,
        "box_saldo": 0,
        "palletes": 384
    },
    {
        "name": "2025 - Febrero",
        "REPRESENTACIONES DECO S.A.C.": {
            "quantity": 3056,
            "box": 86,
            "box_completes": 40,
            "box_saldo": 46,
            "palletes": 30
        },
        "H REPS SAC": {
            "quantity": 22561,
            "box": 220,
            "box_completes": 187,
            "box_saldo": 33,
            "palletes": 47
        },
        "LABORATORIOS SIEGFRIED SAC": {
            "quantity": 750,
            "box": 50,
            "box_completes": 6,
            "box_saldo": 44,
            "palletes": 0
        },
        "QS CONSUMO SAC": {
            "quantity": 7744,
            "box": 136,
            "box_completes": 124,
            "box_saldo": 12,
            "palletes": 34
        },
        "NOVARTIS BIOSCIENCES PERU (PAP KISQA)": {
            "quantity": 1,
            "box": 1,
            "box_completes": 0,
            "box_saldo": 1,
            "palletes": 1
        },
        "quantity": 34112,
        "box": 493,
        "box_completes": 357,
        "box_saldo": 136,
        "palletes": 112
    }
];
dataNormal = [
    {
        "name": "2024 - Enero",
        "quantity": 39967,
        "box": 304,
        "box_saldo": 9,
        "palletes": 25,
        "AR_seco": 14,
        "AR_refrigeration": 1,
        "OC_seco": 14,
        "OC_refrigeration": 1
    },
    {
        "name": "2024 - Febrero",
        "quantity": 56437,
        "box": 687,
        "box_saldo": 15,
        "palletes": 77,
        "AR_seco": 25,
        "AR_refrigeration": 2,
        "OC_seco": 23,
        "OC_refrigeration": 2
    },
    {
        "name": "2024 - Marzo",
        "quantity": 61977,
        "box": 635,
        "box_saldo": 7,
        "palletes": 33,
        "AR_seco": 15,
        "AR_refrigeration": 0,
        "OC_seco": 15,
        "OC_refrigeration": 0
    },
    {
        "name": "2024 - Abril",
        "quantity": 26659,
        "box": 278,
        "box_saldo": 8,
        "palletes": 38,
        "AR_seco": 13,
        "AR_refrigeration": 0,
        "OC_seco": 12,
        "OC_refrigeration": 0
    },
    {
        "name": "2024 - Mayo",
        "quantity": 41219,
        "box": 554,
        "box_saldo": 13,
        "palletes": 44,
        "AR_seco": 13,
        "AR_refrigeration": 8,
        "OC_seco": 13,
        "OC_refrigeration": 6
    },
    {
        "name": "2024 - Junio",
        "quantity": 59021,
        "box": 1005,
        "box_saldo": 10,
        "palletes": 57,
        "AR_seco": 14,
        "AR_refrigeration": 2,
        "OC_seco": 13,
        "OC_refrigeration": 2
    },
    {
        "name": "2024 - Julio",
        "quantity": 48892,
        "box": 533,
        "box_saldo": 10,
        "palletes": 77,
        "AR_seco": 17,
        "AR_refrigeration": 1,
        "OC_seco": 17,
        "OC_refrigeration": 1
    },
    {
        "name": "2024 - Agosto",
        "quantity": 39086,
        "box": 438,
        "box_saldo": 11,
        "palletes": 68,
        "AR_seco": 14,
        "AR_refrigeration": 1,
        "OC_seco": 14,
        "OC_refrigeration": 1
    },
    {
        "name": "2024 - Setiembre",
        "quantity": 63342,
        "box": 1055,
        "box_saldo": 5,
        "palletes": 74,
        "AR_seco": 14,
        "AR_refrigeration": 0,
        "OC_seco": 11,
        "OC_refrigeration": 0
    },
    {
        "name": "2024 - Octubre",
        "quantity": 55708,
        "box": 635,
        "box_saldo": 13,
        "palletes": 81,
        "AR_seco": 21,
        "AR_refrigeration": 1,
        "OC_seco": 18,
        "OC_refrigeration": 1
    },
    {
        "name": "2024 - Noviembre",
        "quantity": 18359,
        "box": 257,
        "box_saldo": 5,
        "palletes": 32,
        "AR_seco": 7,
        "AR_refrigeration": 0,
        "OC_seco": 7,
        "OC_refrigeration": 0
    },
    {
        "name": "2024 - Diciembre",
        "quantity": 61508,
        "box": 703,
        "box_saldo": 15,
        "palletes": 66,
        "AR_seco": 19,
        "AR_refrigeration": 2,
        "OC_seco": 17,
        "OC_refrigeration": 2
    },
    {
        "name": "2025 - Enero",
        "quantity": 60404,
        "box": 359,
        "box_saldo": 15,
        "palletes": 34,
        "AR_seco": 23,
        "AR_refrigeration": 3,
        "OC_seco": 21,
        "OC_refrigeration": 3
    },
    {
        "name": "2025 - Febrero",
        "quantity": 20833,
        "box": 247,
        "box_saldo": 8,
        "palletes": 20,
        "AR_seco": 9,
        "AR_refrigeration": 2,
        "OC_seco": 8,
        "OC_refrigeration": 2
    }
];
const line = {
    name: "Total de unidades",
    data: dataNormal,
};

const colorsUnity = {
    "quantity": "#1d5786",
    "box": "#1b2642",
    "box_completes": "#22c55e",
    "box_saldo": "#f59e0b",
};

const nameDataKey = {
    "box": "Cajas",
    "box_completes": "Cajas Completas",
    "box_saldo": "Cajas Saldo",
    "quantity": "Unidades",
    "palletes": "Palletes",
}

const CustomLabel = ({ x, y, width, height, value }) => {
    if (!value || value === 0) return null;
    return (
        <text
            x={x + width / 2}
            y={y + height / 2}
            textAnchor="middle"
            fontSize={12}
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
      fontSize={20}
      fill="#000"
    >
      {value}
    </text>
  );
};
const CustomTooltipTotal = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
        <div
            style={{ background: "white", padding: 10, border: "1px solid #ccc" }}
        >
            <p>
            <strong>{payload[1].payload.name}</strong>
            </p>
            <p>Total Unidades: {payload[1].payload.quantity}</p>
            <p>Total Palletes: {payload[1].payload.palletes}</p>
            <p>Total Cajas Completas: {payload[1].payload.box}</p>
            <p>Total Cajas Saldo: {payload[1].payload.box_saldo}</p>
        </div>
        );
    }
    return null;
};
const CustomLegend = ({ payload }) => {
    return (<div className="flex items-center justify-center gap-4">
        {payload.map(i => (<div className="flex items-center justify-center gap-2">
            {i.type == "rect" ?
            <div className="size-4" style={{ backgroundColor: i.color }}></div> :
            <div className="w-5 h-1" style={{ backgroundColor: i.color }}></div>}
            <span className="text-base font-semibold" style={{ color: i.color }}>{nameDataKey[i.dataKey]}</span>
        </div>))}
    </div>)
}

const UnityBox = ({ typeUnity, yearSelected }) => {

    const [dataFilter, setDataFilter] = useState(dataNormal);
    const [dataFilterLine, setDataFilterLine] = useState(line);

    useEffect(() => {
        const dataFilter = dataNormal.filter(i => i.name.includes(yearSelected));
        const lineFilter = {
            ...line,
            data: dataFilter
        }

        setDataFilter(dataFilter);
        setDataFilterLine(lineFilter);
    },[yearSelected]);

    switch (typeUnity) {
        case "todos":
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
        
                        <Tooltip content={<CustomTooltipTotal />} />
                        <Legend />
        
                        {/* <Bar dataKey="box" stackId="oc" fill="#708090">
                            <LabelList dataKey="box" content={CustomLabel} />
                        </Bar> */}
                        <Bar dataKey="quantity" stackId="oc" fill="#1d5786">
                            {/* <LabelList dataKey="quantity" content={CustomLabel} /> */}
                            <LabelList dataKey="quantity" content={CustomTotalLabel} />
                        </Bar>
        
                        {/* <Line
                            type="monotone"
                            dataKey="quantity"
                            data={line.data}
                            name={line.name}
                            key={line.name}
                        /> */}
        
                        <Line
                            type="monotone"
                            dataKey="box"
                            strokeWidth={4}
                            data={dataFilterLine.data}
                            name={dataFilterLine.name}
                            key={dataFilterLine.name}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            )
    
        case "palletes":
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
        
                        <Tooltip content={<CustomTooltipTotal />} />
                        <Legend content={<CustomLegend />} />
        
                        <Bar dataKey="palletes" stackId="oc" fill="#1d5786">
                            {/* <LabelList dataKey="palletes" content={CustomLabel} /> */}
                            <LabelList dataKey="palletes" content={CustomTotalLabel} />
                        </Bar>
        
                        <Line
                            type="monotone"
                            dataKey="palletes"
                            strokeWidth={4}
                            data={dataFilterLine.data}
                            name={dataFilterLine.name}
                            key={dataFilterLine.name}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            )
    
        case "quantity":
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
        
                        <Tooltip content={<CustomTooltipTotal />} />
                        <Legend content={<CustomLegend />} />
        
                        <Bar dataKey={"quantity"} stackId="oc" fill={colorsUnity["quantity"]}>
                            {/* <LabelList dataKey={"quantity"} content={CustomLabel} /> */}
                            <LabelList dataKey={"quantity"} content={CustomTotalLabel} />
                        </Bar>
        
                        <Line
                            type="monotone"
                            strokeWidth={4}
                            dataKey={"quantity"}
                            data={dataFilterLine.data}
                            name={dataFilterLine.name}
                            key={dataFilterLine.name}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            )
    
        case "box":
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
        
                        <Tooltip content={<CustomTooltipTotal />} />
                        <Legend content={<CustomLegend />} />
        
                        <Area
                            type="monotone"
                            strokeWidth={4}
                            dataKey={"box"}
                            data={dataFilterLine.data}
                            name={dataFilterLine.name}
                            key={dataFilterLine.name}
                        />
        
                        <Bar dataKey={"box"} stackId="ec" fill={colorsUnity["box"]}>
                            {/* <LabelList dataKey={"box"} content={CustomLabel} /> */}
                            <LabelList dataKey={"box"} content={CustomTotalLabel} />
                        </Bar>
                        <Bar dataKey={"box_saldo"} stackId="ar" fill={colorsUnity["box_saldo"]}>
                            {/* <LabelList dataKey={"box_saldo"} content={CustomLabel} /> */}
                            <LabelList dataKey={"box_saldo"} content={CustomTotalLabel} />
                        </Bar>
                    </ComposedChart>
                </ResponsiveContainer>
            )
    
        default:
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
        
                        <Tooltip content={<CustomTooltipTotal />} />
                        <Legend />
        
                        <Bar dataKey={typeUnity} stackId="oc" fill={colorsUnity[typeUnity]}>
                            <LabelList dataKey={typeUnity} content={CustomLabel} />
                        </Bar>
        
                        <Line
                            type="monotone"
                            strokeWidth={4}
                            dataKey={typeUnity}
                            data={dataFilterLine.data}
                            name={dataFilterLine.name}
                            key={dataFilterLine.name}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            )
    }
}

export default UnityBox