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

const data = {
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

const DispatchMonth = ({ month }) => {
    return (
        <ResponsiveContainer width="98%" height="85%">
            <ComposedChart
                width={500}
                height={300}
                data={data[month]}
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

                <Tooltip />
                <Legend />

                <Bar dataKey="value.box" fill="161f35">
                    <LabelList dataKey="value.box" content={CustomLabel} />
                </Bar>

                <Bar dataKey="value.palletes" fill="08457e">
                    <LabelList dataKey="value.palletes" content={CustomLabel} />
                </Bar>

            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default DispatchMonth