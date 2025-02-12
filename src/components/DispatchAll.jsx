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
const clientsBox = [
    "clients.H REPS SAC.box",
    "clients.Quimica Suiza SAC.box",
    "clients.LABORATORIOS SIEGFRIED SAC.box",
    "clients.REPRESENTACIONES DECO SAC.box",
    "clients.NOVARTIS BIOSCIENCES PAP.box",
    "clients.INRETAIL PHARMA SA.box",
    "clients.QS CONSUMO SAC.box"
]
const clientPalletes = [
    "clients.H REPS SAC.palletes",
    "clients.Quimica Suiza SAC.palletes",
    "clients.LABORATORIOS SIEGFRIED SAC.palletes",
    "clients.REPRESENTACIONES DECO SAC.palletes",
    "clients.NOVARTIS BIOSCIENCES PAP.palletes",
    "clients.INRETAIL PHARMA SA.palletes",
    "clients.QS CONSUMO SAC.palletes"
]

const colorsClientsBox = {
    "clients.H REPS SAC.box": "#264478",
    "clients.Quimica Suiza SAC.box": "#A5A5A5",
    "clients.LABORATORIOS SIEGFRIED SAC.box": "#ED7D31",
    "clients.REPRESENTACIONES DECO SAC.box": "#636363",
    "clients.NOVARTIS BIOSCIENCES PAP.box": "#9E480E",
    "clients.INRETAIL PHARMA SA.box": "#e61919",
    "clients.QS CONSUMO SAC.box": "#08457e"
}
const colorsClientsPalletes = {
    "clients.H REPS SAC.palletes": "#264478",
    "clients.Quimica Suiza SAC.palletes": "#A5A5A5",
    "clients.LABORATORIOS SIEGFRIED SAC.palletes": "#ED7D31",
    "clients.REPRESENTACIONES DECO SAC.palletes": "#636363",
    "clients.NOVARTIS BIOSCIENCES PAP.palletes": "#9E480E",
    "clients.INRETAIL PHARMA SA.palletes": "#e61919",
    "clients.QS CONSUMO SAC.palletes": "#08457e"
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

                <Tooltip content={<CustomTooltip />} />
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