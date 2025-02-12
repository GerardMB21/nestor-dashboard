import { PureComponent, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList, LineChart, Line, ComposedChart } from 'recharts';

const dataAROC = [
    {
       "name":"AR - 2024 - Enero - OC",
       "quantity":39967,
       "AR_refrigeration":{
          "process":1,
          "quantity":199,
          "box":7,
          "rest":3,
          "capacity":28
       },
       "AR_seco":{
          "process":14,
          "quantity":39768,
          "box":297,
          "rest":1151,
          "capacity":2649
       },
       "OC_refrigeration":{
          "process":1,
          "quantity":199,
          "box":7,
          "rest":3,
          "capacity":28
       },
       "OC_seco":{
          "process":14,
          "quantity":39768,
          "box":297,
          "rest":1151,
          "capacity":2649
       }
    },
    {
       "name":"AR - 2024 - Febrero - OC",
       "quantity":52950,
       "AR_refrigeration":{
          "process":2,
          "quantity":3562,
          "box":62,
          "rest":142,
          "capacity":260
       },
       "AR_seco":{
          "process":25,
          "quantity":52875,
          "box":625,
          "rest":1518,
          "capacity":3202
       },
       "OC_refrigeration":{
          "process":2,
          "quantity":3562,
          "box":62,
          "rest":142,
          "capacity":260
       },
       "OC_seco":{
          "process":23,
          "quantity":49388,
          "box":563,
          "rest":1455,
          "capacity":3018
       }
    },
    {
       "name":"AR - 2024 - Marzo - OC",
       "quantity":61977,
       "AR_refrigeration":{
          "process":0,
          "quantity":0,
          "box":0,
          "rest":0,
          "capacity":0
       },
       "AR_seco":{
          "process":15,
          "quantity":61977,
          "box":635,
          "rest":1352,
          "capacity":2610
       },
       "OC_refrigeration":{
          "process":0,
          "quantity":0,
          "box":0,
          "rest":0,
          "capacity":0
       },
       "OC_seco":{
          "process":15,
          "quantity":61977,
          "box":635,
          "rest":1352,
          "capacity":2610
       }
    },
    {
       "name":"AR - 2024 - Abril - OC",
       "quantity":26659,
       "AR_refrigeration":{
          "process":0,
          "quantity":0,
          "box":0,
          "rest":0,
          "capacity":0
       },
       "AR_seco":{
          "process":13,
          "quantity":26659,
          "box":278,
          "rest":659,
          "capacity":2179
       },
       "OC_refrigeration":{
          "process":0,
          "quantity":0,
          "box":0,
          "rest":0,
          "capacity":0
       },
       "OC_seco":{
          "process":12,
          "quantity":24643,
          "box":250,
          "rest":659,
          "capacity":2107
       }
    },
    {
       "name":"AR - 2024 - Mayo - OC",
       "quantity":40578,
       "AR_refrigeration":{
          "process":8,
          "quantity":2845,
          "box":32,
          "rest":297,
          "capacity":662
       },
       "AR_seco":{
          "process":13,
          "quantity":38374,
          "box":522,
          "rest":301,
          "capacity":1119
       },
       "OC_refrigeration":{
          "process":6,
          "quantity":2204,
          "box":28,
          "rest":296,
          "capacity":442
       },
       "OC_seco":{
          "process":13,
          "quantity":38374,
          "box":522,
          "rest":301,
          "capacity":1119
       }
    },
    {
       "name":"AR - 2024 - Junio - OC",
       "quantity":57086,
       "AR_refrigeration":{
          "process":2,
          "quantity":3075,
          "box":61,
          "rest":19,
          "capacity":106
       },
       "AR_seco":{
          "process":14,
          "quantity":55946,
          "box":944,
          "rest":308,
          "capacity":886
       },
       "OC_refrigeration":{
          "process":2,
          "quantity":3075,
          "box":61,
          "rest":19,
          "capacity":106
       },
       "OC_seco":{
          "process":13,
          "quantity":54011,
          "box":824,
          "rest":293,
          "capacity":870
       }
    },
    {
       "name":"AR - 2024 - Julio - OC",
       "quantity":48892,
       "AR_refrigeration":{
          "process":1,
          "quantity":839,
          "box":3,
          "rest":209,
          "capacity":210
       },
       "AR_seco":{
          "process":17,
          "quantity":48053,
          "box":530,
          "rest":754,
          "capacity":2929
       },
       "OC_refrigeration":{
          "process":1,
          "quantity":839,
          "box":3,
          "rest":209,
          "capacity":210
       },
       "OC_seco":{
          "process":17,
          "quantity":48053,
          "box":530,
          "rest":754,
          "capacity":2929
       }
    },
    {
       "name":"AR - 2024 - Agosto - OC",
       "quantity":39086,
       "AR_refrigeration":{
          "process":1,
          "quantity":249,
          "box":8,
          "rest":25,
          "capacity":28
       },
       "AR_seco":{
          "process":14,
          "quantity":38837,
          "box":430,
          "rest":1455,
          "capacity":2634
       },
       "OC_refrigeration":{
          "process":1,
          "quantity":249,
          "box":8,
          "rest":25,
          "capacity":28
       },
       "OC_seco":{
          "process":14,
          "quantity":38837,
          "box":430,
          "rest":1455,
          "capacity":2634
       }
    },
    {
       "name":"AR - 2024 - Setiembre - OC",
       "quantity":58478,
       "AR_refrigeration":{
          "process":0,
          "quantity":0,
          "box":0,
          "rest":0,
          "capacity":0
       },
       "AR_seco":{
          "process":14,
          "quantity":63342,
          "box":1055,
          "rest":256,
          "capacity":843
       },
       "OC_refrigeration":{
          "process":0,
          "quantity":0,
          "box":0,
          "rest":0,
          "capacity":0
       },
       "OC_seco":{
          "process":11,
          "quantity":58478,
          "box":906,
          "rest":211,
          "capacity":774
       }
    },
    {
       "name":"AR - 2024 - Octubre - OC",
       "quantity":38446,
       "AR_refrigeration":{
          "process":1,
          "quantity":900,
          "box":4,
          "rest":60,
          "capacity":210
       },
       "AR_seco":{
          "process":21,
          "quantity":54808,
          "box":631,
          "rest":1079,
          "capacity":2229
       },
       "OC_refrigeration":{
          "process":1,
          "quantity":900,
          "box":4,
          "rest":60,
          "capacity":210
       },
       "OC_seco":{
          "process":18,
          "quantity":37546,
          "box":462,
          "rest":921,
          "capacity":1861
       }
    },
    {
       "name":"AR - 2024 - Noviembre - OC",
       "quantity":18359,
       "AR_refrigeration":{
          "process":0,
          "quantity":0,
          "box":0,
          "rest":0,
          "capacity":0
       },
       "AR_seco":{
          "process":7,
          "quantity":18359,
          "box":257,
          "rest":777,
          "capacity":1772
       },
       "OC_refrigeration":{
          "process":0,
          "quantity":0,
          "box":0,
          "rest":0,
          "capacity":0
       },
       "OC_seco":{
          "process":7,
          "quantity":18359,
          "box":257,
          "rest":777,
          "capacity":1772
       }
    },
    {
       "name":"AR - 2024 - Diciembre - OC",
       "quantity":60308,
       "AR_refrigeration":{
          "process":2,
          "quantity":397,
          "box":14,
          "rest":5,
          "capacity":56
       },
       "AR_seco":{
          "process":19,
          "quantity":61111,
          "box":689,
          "rest":892,
          "capacity":2383
       },
       "OC_refrigeration":{
          "process":2,
          "quantity":397,
          "box":14,
          "rest":5,
          "capacity":56
       },
       "OC_seco":{
          "process":17,
          "quantity":59911,
          "box":678,
          "rest":792,
          "capacity":2183
       }
    },
    {
       "name":"AR - 2025 - Enero - OC",
       "quantity":60404,
       "AR_refrigeration":{
          "process":3,
          "quantity":3462,
          "box":67,
          "rest":62,
          "capacity":200
       },
       "AR_seco":{
          "process":23,
          "quantity":56942,
          "box":434,
          "rest":2383,
          "capacity":4857
       },
       "OC_refrigeration":{
          "process":3,
          "quantity":3462,
          "box":67,
          "rest":62,
          "capacity":200
       },
       "OC_seco":{
          "process":21,
          "quantity":55788,
          "box":404,
          "rest":2381,
          "capacity":4791
       }
    }
];
const dataNormal = [
    {
       "name":"2024 - Enero",
       "quantity":39967,
       "trash":1040,
       "box":304,
       "AR_refrigeration":{
          "process":1,
          "quantity":199,
          "box":7,
          "rest":3,
          "capacity":28
       },
       "AR_seco":{
          "process":14,
          "quantity":39768,
          "box":297,
          "rest":1151,
          "capacity":2649
       },
       "OC_refrigeration":{
          "process":1,
          "quantity":199,
          "box":7,
          "rest":3,
          "capacity":28
       },
       "OC_seco":{
          "process":14,
          "quantity":39768,
          "box":297,
          "rest":1151,
          "capacity":2649
       }
    },
    {
       "name":"2024 - Febrero",
       "quantity":52950,
       "trash":2750,
       "box":687,
       "AR_refrigeration":{
          "process":2,
          "quantity":3562,
          "box":62,
          "rest":142,
          "capacity":260
       },
       "AR_seco":{
          "process":25,
          "quantity":52875,
          "box":625,
          "rest":1518,
          "capacity":3202
       },
       "OC_refrigeration":{
          "process":2,
          "quantity":3562,
          "box":62,
          "rest":142,
          "capacity":260
       },
       "OC_seco":{
          "process":23,
          "quantity":49388,
          "box":563,
          "rest":1455,
          "capacity":3018
       }
    },
    {
       "name":"2024 - Marzo",
       "quantity":61977,
       "trash":6068,
       "box":635,
       "AR_refrigeration":{
          "process":0,
          "quantity":0,
          "box":0,
          "rest":0,
          "capacity":0
       },
       "AR_seco":{
          "process":15,
          "quantity":61977,
          "box":635,
          "rest":1352,
          "capacity":2610
       },
       "OC_refrigeration":{
          "process":0,
          "quantity":0,
          "box":0,
          "rest":0,
          "capacity":0
       },
       "OC_seco":{
          "process":15,
          "quantity":61977,
          "box":635,
          "rest":1352,
          "capacity":2610
       }
    },
    {
       "name":"2024 - Abril",
       "quantity":26659,
       "trash":4200,
       "box":278,
       "AR_refrigeration":{
          "process":0,
          "quantity":0,
          "box":0,
          "rest":0,
          "capacity":0
       },
       "AR_seco":{
          "process":13,
          "quantity":26659,
          "box":278,
          "rest":659,
          "capacity":2179
       },
       "OC_refrigeration":{
          "process":0,
          "quantity":0,
          "box":0,
          "rest":0,
          "capacity":0
       },
       "OC_seco":{
          "process":12,
          "quantity":24643,
          "box":250,
          "rest":659,
          "capacity":2107
       }
    },
    {
       "name":"2024 - Mayo",
       "quantity":40578,
       "trash":8039,
       "box":554,
       "AR_refrigeration":{
          "process":8,
          "quantity":2845,
          "box":32,
          "rest":297,
          "capacity":662
       },
       "AR_seco":{
          "process":13,
          "quantity":38374,
          "box":522,
          "rest":301,
          "capacity":1119
       },
       "OC_refrigeration":{
          "process":6,
          "quantity":2204,
          "box":28,
          "rest":296,
          "capacity":442
       },
       "OC_seco":{
          "process":13,
          "quantity":38374,
          "box":522,
          "rest":301,
          "capacity":1119
       }
    },
    {
       "name":"2024 - Junio",
       "quantity":57086,
       "trash":3796,
       "box":1005,
       "AR_refrigeration":{
          "process":2,
          "quantity":3075,
          "box":61,
          "rest":19,
          "capacity":106
       },
       "AR_seco":{
          "process":14,
          "quantity":55946,
          "box":944,
          "rest":308,
          "capacity":886
       },
       "OC_refrigeration":{
          "process":2,
          "quantity":3075,
          "box":61,
          "rest":19,
          "capacity":106
       },
       "OC_seco":{
          "process":13,
          "quantity":54011,
          "box":824,
          "rest":293,
          "capacity":870
       }
    },
    {
       "name":"2024 - Julio",
       "quantity":48892,
       "trash":9433,
       "box":533,
       "AR_refrigeration":{
          "process":1,
          "quantity":839,
          "box":3,
          "rest":209,
          "capacity":210
       },
       "AR_seco":{
          "process":17,
          "quantity":48053,
          "box":530,
          "rest":754,
          "capacity":2929
       },
       "OC_refrigeration":{
          "process":1,
          "quantity":839,
          "box":3,
          "rest":209,
          "capacity":210
       },
       "OC_seco":{
          "process":17,
          "quantity":48053,
          "box":530,
          "rest":754,
          "capacity":2929
       }
    },
    {
       "name":"2024 - Agosto",
       "quantity":39086,
       "trash":1119,
       "box":438,
       "AR_refrigeration":{
          "process":1,
          "quantity":249,
          "box":8,
          "rest":25,
          "capacity":28
       },
       "AR_seco":{
          "process":14,
          "quantity":38837,
          "box":430,
          "rest":1455,
          "capacity":2634
       },
       "OC_refrigeration":{
          "process":1,
          "quantity":249,
          "box":8,
          "rest":25,
          "capacity":28
       },
       "OC_seco":{
          "process":14,
          "quantity":38837,
          "box":430,
          "rest":1455,
          "capacity":2634
       }
    },
    {
       "name":"2024 - Setiembre",
       "quantity":58478,
       "trash":11497,
       "box":1055,
       "AR_refrigeration":{
          "process":0,
          "quantity":0,
          "box":0,
          "rest":0,
          "capacity":0
       },
       "AR_seco":{
          "process":14,
          "quantity":63342,
          "box":1055,
          "rest":256,
          "capacity":843
       },
       "OC_refrigeration":{
          "process":0,
          "quantity":0,
          "box":0,
          "rest":0,
          "capacity":0
       },
       "OC_seco":{
          "process":11,
          "quantity":58478,
          "box":906,
          "rest":211,
          "capacity":774
       }
    },
    {
       "name":"2024 - Octubre",
       "quantity":38446,
       "trash":3950,
       "box":635,
       "AR_refrigeration":{
          "process":1,
          "quantity":900,
          "box":4,
          "rest":60,
          "capacity":210
       },
       "AR_seco":{
          "process":21,
          "quantity":54808,
          "box":631,
          "rest":1079,
          "capacity":2229
       },
       "OC_refrigeration":{
          "process":1,
          "quantity":900,
          "box":4,
          "rest":60,
          "capacity":210
       },
       "OC_seco":{
          "process":18,
          "quantity":37546,
          "box":462,
          "rest":921,
          "capacity":1861
       }
    },
    {
       "name":"2024 - Noviembre",
       "quantity":18359,
       "trash":444,
       "box":257,
       "AR_refrigeration":{
          "process":0,
          "quantity":0,
          "box":0,
          "rest":0,
          "capacity":0
       },
       "AR_seco":{
          "process":7,
          "quantity":18359,
          "box":257,
          "rest":777,
          "capacity":1772
       },
       "OC_refrigeration":{
          "process":0,
          "quantity":0,
          "box":0,
          "rest":0,
          "capacity":0
       },
       "OC_seco":{
          "process":7,
          "quantity":18359,
          "box":257,
          "rest":777,
          "capacity":1772
       }
    },
    {
       "name":"2024 - Diciembre",
       "quantity":60308,
       "trash":6441,
       "box":703,
       "AR_refrigeration":{
          "process":2,
          "quantity":397,
          "box":14,
          "rest":5,
          "capacity":56
       },
       "AR_seco":{
          "process":19,
          "quantity":61111,
          "box":689,
          "rest":892,
          "capacity":2383
       },
       "OC_refrigeration":{
          "process":2,
          "quantity":397,
          "box":14,
          "rest":5,
          "capacity":56
       },
       "OC_seco":{
          "process":17,
          "quantity":59911,
          "box":678,
          "rest":792,
          "capacity":2183
       }
    },
    {
       "name":"2025 - Enero",
       "quantity":60404,
       "trash":7990,
       "box":501,
       "AR_refrigeration":{
          "process":3,
          "quantity":3462,
          "box":67,
          "rest":62,
          "capacity":200
       },
       "AR_seco":{
          "process":23,
          "quantity":56942,
          "box":434,
          "rest":2383,
          "capacity":4857
       },
       "OC_refrigeration":{
          "process":3,
          "quantity":3462,
          "box":67,
          "rest":62,
          "capacity":200
       },
       "OC_seco":{
          "process":21,
          "quantity":55788,
          "box":404,
          "rest":2381,
          "capacity":4791
       }
    }
];
const dataOcupability = [
    {
       "name":"2024 - Enero",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":1,
       "Rechazados":8,
       "PT Muestra Médica":11,
       "Material de empaque":74,
       "Material promocional":1,
       "PT Disponible":190,
       "Mat Embalaje":96
    },
    {
       "name":"2024 - Febrero",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":1,
       "Rechazados":12,
       "PT Muestra Médica":11,
       "Material de empaque":73,
       "Material promocional":1,
       "PT Disponible":167,
       "Mat Embalaje":94
    },
    {
       "name":"2024 - Marzo",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":4,
       "Rechazados":14,
       "PT Muestra Médica":16,
       "Material de empaque":72,
       "Material promocional":1,
       "PT Disponible":107,
       "PT Cuarentena":58,
       "Mat Embalaje":90
    },
    {
       "name":"2024 - Abril",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":5,
       "Rechazados":14,
       "PT Muestra Médica":15,
       "Material de empaque":70,
       "Material promocional":1,
       "PT Disponible":101,
       "PT Cuarentena":50,
       "Mat Embalaje":81
    },
    {
       "name":"2024 - Mayo",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":2,
       "Rechazados":18,
       "PT Muestra Médica":8,
       "Material de empaque":73,
       "Material promocional":1,
       "PT Disponible":85,
       "PT Cuarentena":62,
       "Mat Embalaje":80
    },
    {
       "name":"2024 - Junio",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":1,
       "Rechazados":22,
       "PT Muestra Médica":9,
       "Material de empaque":84,
       "Material promocional":1,
       "PT Disponible":73,
       "PT Cuarentena":91,
       "Mat Embalaje":84
    },
    {
       "name":"2024 - Julio",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":1,
       "Rechazados":28,
       "PT Muestra Médica":9,
       "Material de empaque":73,
       "Material promocional":1,
       "PT Disponible":83,
       "PT Cuarentena":80,
       "Mat Embalaje":83
    },
    {
       "name":"2024 - Agosto",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":2,
       "Rechazados":35,
       "PT Muestra Médica":14,
       "Material de empaque":76,
       "Material promocional":0,
       "PT Disponible":85,
       "PT Cuarentena":83,
       "Mat Embalaje":72
    },
    {
       "name":"2024 - Setiembre",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":3,
       "Rechazados":25,
       "PT Muestra Médica":16,
       "Material de empaque":73,
       "Material promocional":0,
       "PT Disponible":86,
       "PT Cuarentena":97,
       "Mat Embalaje":64
    },
    {
       "name":"2024 - Octubre",
       "Contramuestras":5,
       "Devoluciones":2,
       "Controlados":5,
       "Rechazados":25,
       "PT Muestra Médica":12,
       "Material de empaque":76,
       "Material promocional":0,
       "PT Disponible":97,
       "PT Cuarentena":70,
       "Mat Embalaje":64
    },
    {
       "name":"2024 - Noviembre",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":3,
       "Rechazados":26,
       "PT Muestra Médica":12,
       "Material de empaque":71,
       "Material promocional":0,
       "PT Disponible":112,
       "PT Cuarentena":54,
       "Mat Embalaje":64
    },
    {
       "name":"2024 - Diciembre",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":8,
       "Rechazados":10,
       "PT Muestra Médica":13,
       "Material de empaque":75,
       "Material promocional":0,
       "PT Disponible":107,
       "PT Cuarentena":43,
       "Mat Embalaje":65
    },
    {
       "name":"2025 - Enero",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":12,
       "Rechazados":17,
       "PT Muestra Médica":12,
       "Material de empaque":73,
       "Material promocional":0,
       "PT Disponible":94,
       "PT Cuarentena":49,
       "Mat Embalaje":59
    }
];
const line = {
    name: 'Total de unidades',
    data: dataNormal,
};
const lineTrash = {
    name: 'Total Deteriorados',
    data: [
        {
           "name":"2024 - Enero",
           "value":1040
        },
        {
           "name":"2024 - Febrero",
           "value":2750
        },
        {
           "name":"2024 - Marzo",
           "value":6068
        },
        {
           "name":"2024 - Abril",
           "value":4200
        },
        {
           "name":"2024 - Mayo",
           "value":8039
        },
        {
           "name":"2024 - Junio",
           "value":3796
        },
        {
           "name":"2024 - Julio",
           "value":9433
        },
        {
           "name":"2024 - Agosto",
           "value":1119
        },
        {
           "name":"2024 - Setiembre",
           "value":11497
        },
        {
           "name":"2024 - Octubre",
           "value":3950
        },
        {
           "name":"2024 - Noviembre",
           "value":444
        },
        {
           "name":"2024 - Diciembre",
           "value":6441
        },
        {
           "name":"2025 - Enero",
           "value":7990
        }
    ],
};

const colorsOcupability = {
    "Contramuestras": "#264478",
    "Devoluciones": "#A5A5A5",
    "Controlados": "#ED7D31",
    "Rechazados": "#636363",
    "PT Muestra Médica": "#9E480E",
    "Material de empaque": "#5B9BD5",
    "Material promocional": "#70AD47",
    "PT Disponible": "#264478",
    "PT Cuarentena": "#997300",
    "Mat Embalaje": "#FFC000",
}

function  getNameParse(name) {
    switch (name) {
        case "AR_seco.process":
            return "AR Seco"
        
        case "AR_refrigeration.process":
            return "AR Refrigeración"
        
        case "OC_seco.process":
            return "OC Seco"
        
        case "OC_refrigeration.process":
            return "OC Refrigeración"
        
        default:
            return "Cantidad"
            break
    }
}

const CustomLabel = ({ x, y, width, height, value }) => {
    if (!value || value === 0) return null;
    return (
        <text x={x + width / 2} y={y + height / 2} textAnchor="middle" fontSize={12} fill="white">
            {value}
        </text>
    );
};

const CustomTotalLabel = ({ x, y, width, value }) => {
    if (!value || value === 0) return null;
    return (
        <text x={x + width / 2} y={y - 10} textAnchor="middle" fontSize={14} fill="#000">
            {value}
        </text>
    );
};

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {

        let quantitySeco = 0
        let quantityRefrigeration = 0

        const list = payload.map((entry, index) => {
            const keys = entry.dataKey.split(".")
            const principalKey = keys[0]

            if (principalKey.includes("seco")) {
                quantitySeco = quantitySeco + entry.payload[principalKey].quantity
            } else if (principalKey.includes("refrigeration")) {
                quantityRefrigeration = quantityRefrigeration + entry.payload[principalKey].quantity
            }

            return (<p key={index} style={{ color: entry.color }}>
                {getNameParse(entry.name)}: {entry.value}
            </p>)
        });

        return (
            <div style={{ background: "white", padding: 10, border: "1px solid #ccc" }}>
                <p><strong>{payload[0].payload.name}</strong></p>
                <p>Total Unidades: {(quantitySeco + quantityRefrigeration) / 2}</p>
                <p>Total Unidades Seco: {quantitySeco / 2}</p>
                <p>Total Unidades Refrigerado: {quantityRefrigeration / 2}</p>
                {list}
            </div>
        );
    }
    return null;
};

const CustomTooltipTotal = ({ active, payload }) => {
    if (active && payload && payload.length) {

        return (
            <div style={{ background: "white", padding: 10, border: "1px solid #ccc" }}>
                <p><strong>{payload[1].payload.name}</strong></p>
                <p>Total Unidades: {payload[1].value}</p>
                <p>Total Cajas: {payload[1].payload.box}</p>
            </div>
        );
    }
    return null;
};

const Ocupability = ({ typeO }) => {
    switch (typeO) {
        case "Todos":
            return (
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        width={500}
                        height={300}
                        data={dataOcupability}
                        margin={
                            {
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }
                        }
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={"name"} />
                        <YAxis />

                        <Tooltip />
                        <Legend />

                        <Bar dataKey="Contramuestras" stackId="ar" fill={colorsOcupability["Contramuestras"]}>
                            <LabelList dataKey="Contramuestras" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="Devoluciones" stackId="ar" fill={colorsOcupability["Devoluciones"]}>
                            <LabelList dataKey="Devoluciones" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="Controlados" stackId="ar" fill={colorsOcupability["Controlados"]}>
                            <LabelList dataKey="Controlados" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="Rechazados" stackId="ar" fill={colorsOcupability["Rechazados"]}>
                            <LabelList dataKey="Rechazados" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="PT Muestra Médica" stackId="ar" fill={colorsOcupability["PT Muestra Médica"]}>
                            <LabelList dataKey="PT Muestra Médica" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="Material de empaque" stackId="ar" fill={colorsOcupability["Material de empaque"]}>
                            <LabelList dataKey="Material de empaque" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="Material promocional" stackId="ar" fill={colorsOcupability["Material promocional"]}>
                            <LabelList dataKey="Material promocional" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="PT Disponible" stackId="ar" fill={colorsOcupability["PT Disponible"]}>
                            <LabelList dataKey="PT Disponible" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="PT Cuarentena" stackId="ar" fill={colorsOcupability["PT Cuarentena"]}>
                            <LabelList dataKey="PT Cuarentena" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="Mat Embalaje" stackId="ar" fill={colorsOcupability["Mat Embalaje"]}>
                            <LabelList dataKey="Mat Embalaje" content={CustomLabel} />
                        </Bar>

                    </ComposedChart>
                </ResponsiveContainer>)

        default:
            return (
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        width={500}
                        height={300}
                        data={dataOcupability}
                        margin={
                            {
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }
                        }
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={"name"} />
                        <YAxis />

                        <Tooltip />
                        <Legend />

                        <Bar dataKey={typeO} stackId="ar" fill={colorsOcupability[typeO]}>
                           <LabelList dataKey={typeO} content={CustomLabel} />
                        </Bar>

                  </ComposedChart>
               </ResponsiveContainer>)
   }
}

export default Ocupability