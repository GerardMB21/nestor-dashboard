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
const clientsBox = [
    "clients.H REPS S.A.C..box",
    "clients.Quimica Suiza S.A..box",
    "clients.LABORATORIOS SIEGFRIED SAC.box",
    "clients.REPRESENTACIONES DECO S.A.C..box",
    "clients.NOVARTIS BIOSCIENCES PERU.box",
    "clients.QUIMICA SUIZA S.A.C..box",
    "clients.Quimica Suiza S.A.C..box",
    "clients.H REPS SAC.box",
    "clients.NOVARTIS BIOSCIENCES PERU (MAP. PAP).box",
    "clients.NOVARTIS BIOSCIENCES PERU (PAP KISQA).box",
    "clients.NOVARTIS BIOSCIENCES PERU (MAP JAKAVI).box",
    "clients.NOVARTIS BIOSCIENCES PERU (PAP).box",
    "clients.INRETAIL PHARMA S.A..box",
    "clients.QS CONSUMO SAC.box"
]
const clientPalletes = [
    "clients.H REPS S.A.C..palletes",
    "clients.Quimica Suiza S.A..palletes",
    "clients.LABORATORIOS SIEGFRIED SAC.palletes",
    "clients.REPRESENTACIONES DECO S.A.C..palletes",
    "clients.NOVARTIS BIOSCIENCES PERU.palletes",
    "clients.QUIMICA SUIZA S.A.C..palletes",
    "clients.Quimica Suiza S.A.C..palletes",
    "clients.H REPS SAC.palletes",
    "clients.NOVARTIS BIOSCIENCES PERU (MAP. PAP).palletes",
    "clients.NOVARTIS BIOSCIENCES PERU (PAP KISQA).palletes",
    "clients.NOVARTIS BIOSCIENCES PERU (MAP JAKAVI).palletes",
    "clients.NOVARTIS BIOSCIENCES PERU (PAP).palletes",
    "clients.INRETAIL PHARMA S.A..palletes",
    "clients.QS CONSUMO SAC.palletes"
]

const colorsClientsBox = {
    "clients.H REPS S.A.C..box": "#264478",
    "clients.Quimica Suiza S.A..box": "#A5A5A5",
    "clients.LABORATORIOS SIEGFRIED SAC.box": "#ED7D31",
    "clients.REPRESENTACIONES DECO S.A.C..box": "#636363",
    "clients.NOVARTIS BIOSCIENCES PERU.box": "#9E480E",
    "clients.QUIMICA SUIZA S.A.C..box": "#5B9BD5",
    "clients.Quimica Suiza S.A.C..box": "#70AD47",
    "clients.H REPS SAC.box": "#264478",
    "clients.NOVARTIS BIOSCIENCES PERU (MAP. PAP).box": "#997300",
    "clients.NOVARTIS BIOSCIENCES PERU (PAP KISQA).box": "#161f35",
    "clients.NOVARTIS BIOSCIENCES PERU (MAP JAKAVI).box": "#ffd700",
    "clients.NOVARTIS BIOSCIENCES PERU (PAP).box": "#ff9e00",
    "clients.INRETAIL PHARMA S.A..box": "#e61919",
    "clients.QS CONSUMO SAC.box": "#08457e"
}
const colorsClientsPalletes = {
    "clients.H REPS S.A.C..palletes": "#264478",
    "clients.Quimica Suiza S.A..palletes": "#A5A5A5",
    "clients.LABORATORIOS SIEGFRIED SAC.palletes": "#ED7D31",
    "clients.REPRESENTACIONES DECO S.A.C..palletes": "#636363",
    "clients.NOVARTIS BIOSCIENCES PERU.palletes": "#9E480E",
    "clients.QUIMICA SUIZA S.A.C..palletes": "#5B9BD5",
    "clients.Quimica Suiza S.A.C..palletes": "#70AD47",
    "clients.H REPS SAC.palletes": "#264478",
    "clients.NOVARTIS BIOSCIENCES PERU (MAP. PAP).palletes": "#997300",
    "clients.NOVARTIS BIOSCIENCES PERU (PAP KISQA).palletes": "#161f35",
    "clients.NOVARTIS BIOSCIENCES PERU (MAP JAKAVI).palletes": "#ffd700",
    "clients.NOVARTIS BIOSCIENCES PERU (PAP).palletes": "#ff9e00",
    "clients.INRETAIL PHARMA S.A..palletes": "#e61919",
    "clients.QS CONSUMO SAC.palletes": "#08457e"
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
            fontSize={14}
            fill="#000"
        >
            {value}
        </text>
    );
};

const DispatchAll = () => {
    return (
        <ResponsiveContainer width="98%" height="85%">
            <ComposedChart
                width={500}
                height={300}
                data={data}
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