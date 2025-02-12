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

const dataAROC = [
    {
        name: "2024 - Enero",
        quantity: 39967,
        AR_refrigeration: {
        process: 1,
        quantity: 199,
        box: 7,
        rest: 3,
        capacity: 28,
        },
        AR_seco: {
        process: 14,
        quantity: 39768,
        box: 297,
        rest: 1151,
        capacity: 2649,
        },
        OC_refrigeration: {
        process: 1,
        quantity: 199,
        box: 7,
        rest: 3,
        capacity: 28,
        },
        OC_seco: {
        process: 14,
        quantity: 39768,
        box: 297,
        rest: 1151,
        capacity: 2649,
        },
    },
    {
        name: "2024 - Febrero",
        quantity: 52950,
        AR_refrigeration: {
        process: 2,
        quantity: 3562,
        box: 62,
        rest: 142,
        capacity: 260,
        },
        AR_seco: {
        process: 25,
        quantity: 52875,
        box: 625,
        rest: 1518,
        capacity: 3202,
        },
        OC_refrigeration: {
        process: 2,
        quantity: 3562,
        box: 62,
        rest: 142,
        capacity: 260,
        },
        OC_seco: {
        process: 23,
        quantity: 49388,
        box: 563,
        rest: 1455,
        capacity: 3018,
        },
    },
    {
        name: "2024 - Marzo",
        quantity: 61977,
        AR_refrigeration: {
        process: 0,
        quantity: 0,
        box: 0,
        rest: 0,
        capacity: 0,
        },
        AR_seco: {
        process: 15,
        quantity: 61977,
        box: 635,
        rest: 1352,
        capacity: 2610,
        },
        OC_refrigeration: {
        process: 0,
        quantity: 0,
        box: 0,
        rest: 0,
        capacity: 0,
        },
        OC_seco: {
        process: 15,
        quantity: 61977,
        box: 635,
        rest: 1352,
        capacity: 2610,
        },
    },
    {
        name: "2024 - Abril",
        quantity: 26659,
        AR_refrigeration: {
        process: 0,
        quantity: 0,
        box: 0,
        rest: 0,
        capacity: 0,
        },
        AR_seco: {
        process: 13,
        quantity: 26659,
        box: 278,
        rest: 659,
        capacity: 2179,
        },
        OC_refrigeration: {
        process: 0,
        quantity: 0,
        box: 0,
        rest: 0,
        capacity: 0,
        },
        OC_seco: {
        process: 12,
        quantity: 24643,
        box: 250,
        rest: 659,
        capacity: 2107,
        },
    },
    {
        name: "2024 - Mayo",
        quantity: 40578,
        AR_refrigeration: {
        process: 8,
        quantity: 2845,
        box: 32,
        rest: 297,
        capacity: 662,
        },
        AR_seco: {
        process: 13,
        quantity: 38374,
        box: 522,
        rest: 301,
        capacity: 1119,
        },
        OC_refrigeration: {
        process: 6,
        quantity: 2204,
        box: 28,
        rest: 296,
        capacity: 442,
        },
        OC_seco: {
        process: 13,
        quantity: 38374,
        box: 522,
        rest: 301,
        capacity: 1119,
        },
    },
    {
        name: "2024 - Junio",
        quantity: 57086,
        AR_refrigeration: {
        process: 2,
        quantity: 3075,
        box: 61,
        rest: 19,
        capacity: 106,
        },
        AR_seco: {
        process: 14,
        quantity: 55946,
        box: 944,
        rest: 308,
        capacity: 886,
        },
        OC_refrigeration: {
        process: 2,
        quantity: 3075,
        box: 61,
        rest: 19,
        capacity: 106,
        },
        OC_seco: {
        process: 13,
        quantity: 54011,
        box: 824,
        rest: 293,
        capacity: 870,
        },
    },
    {
        name: "2024 - Julio",
        quantity: 48892,
        AR_refrigeration: {
        process: 1,
        quantity: 839,
        box: 3,
        rest: 209,
        capacity: 210,
        },
        AR_seco: {
        process: 17,
        quantity: 48053,
        box: 530,
        rest: 754,
        capacity: 2929,
        },
        OC_refrigeration: {
        process: 1,
        quantity: 839,
        box: 3,
        rest: 209,
        capacity: 210,
        },
        OC_seco: {
        process: 17,
        quantity: 48053,
        box: 530,
        rest: 754,
        capacity: 2929,
        },
    },
    {
        name: "2024 - Agosto",
        quantity: 39086,
        AR_refrigeration: {
        process: 1,
        quantity: 249,
        box: 8,
        rest: 25,
        capacity: 28,
        },
        AR_seco: {
        process: 14,
        quantity: 38837,
        box: 430,
        rest: 1455,
        capacity: 2634,
        },
        OC_refrigeration: {
        process: 1,
        quantity: 249,
        box: 8,
        rest: 25,
        capacity: 28,
        },
        OC_seco: {
        process: 14,
        quantity: 38837,
        box: 430,
        rest: 1455,
        capacity: 2634,
        },
    },
    {
        name: "2024 - Setiembre",
        quantity: 58478,
        AR_refrigeration: {
        process: 0,
        quantity: 0,
        box: 0,
        rest: 0,
        capacity: 0,
        },
        AR_seco: {
        process: 14,
        quantity: 63342,
        box: 1055,
        rest: 256,
        capacity: 843,
        },
        OC_refrigeration: {
        process: 0,
        quantity: 0,
        box: 0,
        rest: 0,
        capacity: 0,
        },
        OC_seco: {
        process: 11,
        quantity: 58478,
        box: 906,
        rest: 211,
        capacity: 774,
        },
    },
    {
        name: "2024 - Octubre",
        quantity: 38446,
        AR_refrigeration: {
        process: 1,
        quantity: 900,
        box: 4,
        rest: 60,
        capacity: 210,
        },
        AR_seco: {
        process: 21,
        quantity: 54808,
        box: 631,
        rest: 1079,
        capacity: 2229,
        },
        OC_refrigeration: {
        process: 1,
        quantity: 900,
        box: 4,
        rest: 60,
        capacity: 210,
        },
        OC_seco: {
        process: 18,
        quantity: 37546,
        box: 462,
        rest: 921,
        capacity: 1861,
        },
    },
    {
        name: "2024 - Noviembre",
        quantity: 18359,
        AR_refrigeration: {
        process: 0,
        quantity: 0,
        box: 0,
        rest: 0,
        capacity: 0,
        },
        AR_seco: {
        process: 7,
        quantity: 18359,
        box: 257,
        rest: 777,
        capacity: 1772,
        },
        OC_refrigeration: {
        process: 0,
        quantity: 0,
        box: 0,
        rest: 0,
        capacity: 0,
        },
        OC_seco: {
        process: 7,
        quantity: 18359,
        box: 257,
        rest: 777,
        capacity: 1772,
        },
    },
    {
        name: "2024 - Diciembre",
        quantity: 60308,
        AR_refrigeration: {
        process: 2,
        quantity: 397,
        box: 14,
        rest: 5,
        capacity: 56,
        },
        AR_seco: {
        process: 19,
        quantity: 61111,
        box: 689,
        rest: 892,
        capacity: 2383,
        },
        OC_refrigeration: {
        process: 2,
        quantity: 397,
        box: 14,
        rest: 5,
        capacity: 56,
        },
        OC_seco: {
        process: 17,
        quantity: 59911,
        box: 678,
        rest: 792,
        capacity: 2183,
        },
    },
    {
        name: "2025 - Enero",
        quantity: 60404,
        AR_refrigeration: {
        process: 3,
        quantity: 3462,
        box: 67,
        rest: 62,
        capacity: 200,
        },
        AR_seco: {
        process: 23,
        quantity: 56942,
        box: 434,
        rest: 2383,
        capacity: 4857,
        },
        OC_refrigeration: {
        process: 3,
        quantity: 3462,
        box: 67,
        rest: 62,
        capacity: 200,
        },
        OC_seco: {
        process: 21,
        quantity: 55788,
        box: 404,
        rest: 2381,
        capacity: 4791,
        },
    },
];

const optionsOcupability = [
    {
        name: "Todos",
        value: "Todos"
    },
    {
        name: "Contramuestras",
        value: "Contramuestras"
    },
    {
        name: "Devoluciones",
        value: "Devoluciones"
    },
    {
        name: "Controlados",
        value: "Controlados"
    },
    {
        name: "Rechazados",
        value: "Rechazados"
    },
    {
        name: "PT Muestra Médica",
        value: "PT Muestra Médica"
    },
    {
        name: "Material de empaque",
        value: "Material de empaque"
    },
    {
        name: "PT Disponible",
        value: "PT Disponible"
    },
    {
        name: "PT Cuarentena",
        value: "PT Cuarentena"
    },
    {
        name: "Mat Embalaje",
        value: "Mat Embalaje"
    },
]

const colorsAROC = {
    "AR_seco.process": "#161f35",
    "AR_refrigeration.process": "#36415d",
    "OC_seco.process": "#161f35",
    "OC_refrigeration.process": "#36415d",
}

function getNameParse(name) {
    switch (name) {
        case "AR_seco.process":
        return "AR Seco";

        case "AR_refrigeration.process":
        return "AR Refrigeración";

        case "OC_seco.process":
        return "OC Seco";

        case "OC_refrigeration.process":
        return "OC Refrigeración";

        default:
        return "Cantidad";
        break;
    }
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

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        let quantitySeco = 0;
        let quantityRefrigeration = 0;

        const list = payload.map((entry, index) => {
        const keys = entry.dataKey.split(".");
        const principalKey = keys[0];

        if (principalKey.includes("seco")) {
            quantitySeco = quantitySeco + entry.payload[principalKey].quantity;
        } else if (principalKey.includes("refrigeration")) {
            quantityRefrigeration =
            quantityRefrigeration + entry.payload[principalKey].quantity;
        }

        return (
            <p key={index} style={{ color: entry.color }}>
            {getNameParse(entry.name)}: {entry.value}
            </p>
        );
        });

        return (
        <div
            style={{ background: "white", padding: 10, border: "1px solid #ccc" }}
        >
            <p>
            <strong>{payload[0].payload.name}</strong>
            </p>
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
        <div
            style={{ background: "white", padding: 10, border: "1px solid #ccc" }}
        >
            <p>
            <strong>{payload[1].payload.name}</strong>
            </p>
            <p>Total Unidades: {payload[1].value}</p>
            <p>Total Cajas: {payload[1].payload.box}</p>
        </div>
        );
    }
    return null;
};

const CustomTooltipTrash = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const lists = [];

        for (const key in payload[0].payload) {
        if (key !== "name" && key !== "value" && payload[0].payload[key] !== 0)
            lists.push(
            <div>
                <p className="text-sm">
                {key}:
                <strong className="text-lg ml-2">
                    {payload[0].payload[key]}
                </strong>
                </p>
            </div>
            );
        }

        return (
        <div
            style={{ background: "white", padding: 10, border: "1px solid #ccc" }}
        >
            <p>
            <strong>{payload[0].payload.name}</strong>
            </p>
            <p className="my-4">Total Unidades: {payload[0].value}</p>
            <div className="flex flex-col gap-y-3">{lists}</div>
        </div>
        );
    }
    return null;
};

const ActasOC = ({ typeAROC }) => {
    if (typeAROC.length >= 2) {
        return (
            <ResponsiveContainer width="98%" height="85%">
                <ComposedChart
                    width={500}
                    height={300}
                    data={dataAROC}
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
    
                    <Bar dataKey={typeAROC[0]} stackId="ar" fill={colorsAROC[typeAROC[0]]}>
                        <LabelList dataKey={typeAROC[0]} content={CustomLabel} />
                    </Bar>
                    <Bar dataKey={typeAROC[1]} stackId="ar" fill={colorsAROC[typeAROC[1]]}>
                        <LabelList
                            dataKey={typeAROC[1]}
                            content={CustomLabel}
                        />
                        <LabelList
                            data={dataAROC.map((d) => ({
                                name: d.name,
                                value: d[typeAROC[0]] + d[typeAROC[1]],
                            }))}
                            content={<CustomTotalLabel />}
                        />
                    </Bar>
                </ComposedChart>
            </ResponsiveContainer>
        )
    } else {
        switch (typeAROC[0]) {
            case "Todos":
                return (
                    <ResponsiveContainer width="98%" height="85%">
                        <ComposedChart
                            width={500}
                            height={300}
                            data={dataAROC}
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
            
                            <Bar dataKey="AR_seco.process" stackId="ar" fill="#161f35">
                                <LabelList dataKey="AR_seco.process" content={CustomLabel} />
                            </Bar>
                            <Bar dataKey="AR_refrigeration.process" stackId="ar" fill="#36415d">
                                <LabelList
                                    dataKey="AR_refrigeration.process"
                                    content={CustomLabel}
                                />
                                <LabelList
                                    data={dataAROC.map((d) => ({
                                        name: d.name,
                                        value: d.AR_seco.process + d.AR_refrigeration.process,
                                    }))}
                                    content={<CustomTotalLabel />}
                                />
                            </Bar>
            
                            <Bar dataKey="OC_seco.process" stackId="oc" fill="#161f35">
                                <LabelList dataKey="OC_seco.process" content={CustomLabel} />
                            </Bar>
                            <Bar dataKey="OC_refrigeration.process" stackId="oc" fill="#36415d">
                                <LabelList
                                    dataKey="OC_refrigeration.process"
                                    content={CustomLabel}
                                />
                                <LabelList
                                    data={dataAROC.map((d) => ({
                                        name: d.name,
                                        value: d.OC_seco.process + d.OC_refrigeration.process,
                                    }))}
                                    content={<CustomTotalLabel />}
                                />
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
                            data={dataAROC}
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
            
                            <Bar dataKey={typeAROC[0]} stackId="ar" fill={colorsAROC[typeAROC[0]]}>
                                <LabelList dataKey={typeAROC[0]} content={CustomLabel} />
                            </Bar>
            
                        </ComposedChart>
                    </ResponsiveContainer>
                )
        }
    }
}

export default ActasOC