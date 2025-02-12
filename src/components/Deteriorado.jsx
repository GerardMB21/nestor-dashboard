import { useState } from "react";
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
import { cn } from "../utils/ui";

const dataNormal = [
    {
        name: "2024 - Enero",
        quantity: 39967,
        trash: 1040,
        percent: 2600,
    },
    {
        name: "2024 - Febrero",
        quantity: 52950,
        trash: 2750,
        percent: 5190,
    },
    {
        name: "2024 - Marzo",
        quantity: 61977,
        trash: 6068,
        percent: 9790,
    },
    {
        name: "2024 - Abril",
        quantity: 26659,
        trash: 4200,
        percent: 15750,
    },
    {
        name: "2024 - Mayo",
        quantity: 40578,
        trash: 8039,
        percent: 19810,
    },
    {
        name: "2024 - Junio",
        quantity: 57086,
        trash: 3796,
        percent: 6640,
    },
    {
        name: "2024 - Julio",
        quantity: 48892,
        trash: 9433,
        percent: 19290,
    },
    {
        name: "2024 - Agosto",
        quantity: 39086,
        trash: 1119,
        percent: 2860,
    },
    {
        name: "2024 - Setiembre",
        quantity: 58478,
        trash: 11497,
        percent: 19660,
    },
    {
        name: "2024 - Octubre",
        quantity: 38446,
        trash: 3950,
        percent: 10270,
    },
    {
        name: "2024 - Noviembre",
        quantity: 18359,
        trash: 444,
        percent: 2410,
    },
    {
        name: "2024 - Diciembre",
        quantity: 60308,
        trash: 6441,
        percent: 10680,
    },
    {
        name: "2025 - Enero",
        quantity: 60404,
        trash: 7990,
        percent: 13220,
    },
];
const lineTrash = {
    name: "Total Deteriorados",
    data: [
        {
        name: "2024 - Enero",
        value: 1040,
        "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE": 154,
        "TASIG HGC 200MG DUP 4(7X4) U17_6": 2,
        "DIOVAN HCT 160/25MG X28 COMP.": 432,
        "SANDOSTATIN LAR 30 MG X 1 JERINGA": 3,
        "GALME FCT 50/500MG ALU (6X10) U17_5": 0,
        "VIGAMOX .5% OPH SOL 5ML 288<PE": 53,
        "KISQA FCT 200MG ACP (3X21) R53": 4,
        "JAKAV TAB 5MG ACP (6X10) PE": 0,
        "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE_1": 1,
        "GLIVE FCT 400MG ALU (3X10) PEF": 0,
        "AZARGA 5ML-PE": 117,
        "TOBRADEX SUSP 5ML-PE": 210,
        "ENTRESTO 24MG/26MG X14 MM": 18,
        "GALME FCT 50/500MG ALU (X10) U17S_4 - MM": 46,
        },
        {
        name: "2024 - Febrero",
        value: 2750,
        "TOBRADEX UNGUENTO 3.5G-PE": 470,
        "FEMAR FCT 2.5MG TRI (3X10) PE_1": 19,
        "GALVUS TAB 50MG X7 MM": 29,
        "SANDIMMUN NEORAL 50MG X 50 CAPSULAS": 21,
        "GALME FCT 50/500MG ALU (6X10) U17_5": 0,
        "NEVAN LDMO 1MG/ML LDPE 1.5ML (X) MM": 88,
        "TASIG HGC 200MG DUP 4(7X4) U17_6": 20,
        "TEGRM FCT 400MG TRI (3X10) U17_3": 63,
        "JAKAV TAB 15MG ACP (6X10) PE": 4,
        "XOLAI LYVI 150MG GLW (+) U17_8": 33,
        "GALME FCT 50/1000MG ALU (6X10) U17_5": 1,
        "MYFOR FCT 360MG ALU (12X10) PE_3": 0,
        "ENTRE FCT 49/51MG ALU (6X10) PE": 204,
        "DIOVAN HCT 160/12.5MG X28 COMP.": 61,
        "TRILEPTAL SSP 60MG/ML GLB 100ML": 44,
        "ENTRESTO 49MG/51MG X14 MM": 88,
        "EXFORGE 160/5MG X7 PE MM": 97,
        "DIOVAN HCT 160/12.5MG  X 14 COMP MM": 1296,
        "ENTRE FCT 24/26MG ALU (3X10) PE": 78,
        "DIOVAN HCT 160/25 ALU X 14 MM": 31,
        "COSENTYX 150MG/1ML PE": 8,
        "GILEN HGC 0.5MG DUP (2X14) U17_9": 1,
        "ULTIBRO HNCI0.11/0.05MGALU(3X10)R53_1": 94,
        },
        {
        name: "2024 - Marzo",
        value: 6068,
        "GALME FCT 50/850MG ALU (6X10) U17_5": 1,
        "DIOVAN FCT 160MG ALU(X2) MM": 1474,
        "DIOVA FCT 80MG ALU (2X14) PE": 462,
        "AZARG LDMO10/5MG/ML LDPE 2.5ML(X) MM": 8,
        "EXFORGE FCT 160/5MG ALU (2X14) U17_9": 8,
        "PATAD LDMO 2MG/ML LDPE 2.5ML (X) PE": 361,
        "JAKAV TAB 5MG ACP (6X10) PE": 0,
        "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE_1": 10,
        "DUOTRAV BAK-FREE 1.5ML MM": 2786,
        "GILEN HGC 0.5MG DUP (2X14) U17_9": 0,
        "RITAL TAB 10MG ALU (2X15) U17_5": 2,
        "KISQA FCT 200MG ACP (3X21) R53": 15,
        "FEMAR FCT 2.5MG TRI (3X10) PE_1": 884,
        "TOBREX 5ML-PE": 57,
        },
        {
        name: "2024 - Abril",
        value: 4200,
        "VOTRI FCT 400MG HDPE (X30) R234_2": 3,
        "DIOVAN HCT 160/25MG X28 COMP.": 143,
        "GALME FCT 50/500MG ALU (6X10) U17_5": 9,
        "TOBRADEX UNGUENTO 3.5G-PE": 2550,
        "EXFORGE 160/5MG X7 PE MM": 14,
        "JAKAV TAB 5MG ACP (6X10) PE": 0,
        "TASIG HGC 200MG DUP 4(7X4) U17_6": 46,
        "SANDIMMUN NEORAL SOL 100 mg/ml 50 ml": 82,
        "TRAVA LDMO0.04MG/ML LDPE1.5ML (X) MM": 357,
        "AFINI TAB 10MG ALU (3X10) U17_11": 2,
        "GALME FCT 50/1000MG ALU (6X10) U17_5": 994,
        },
        {
        name: "2024 - Mayo",
        value: 8039,
        "XOLAI LYVI 150MG GLW (+) U17_8": 6,
        "SANDIMMUN NEORAL 50MG X 50 CAPSULAS": 47,
        "SANDOSTATIN LAR 30 MG X 1 JERINGA": 33,
        "TEGRETOL 2% JARABE 100ML": 0,
        "VOLTAREN SR FCT 100MG (3X10) PE": 7403,
        "EXFORGE 160/10MG X7 PE MM": 9,
        "REVOL FCT 50MG ALU (4X7) R234_5": 2,
        "ENTRE FCT 97/103MG ALU (6X10) PE": 57,
        "TEGRM FCT 400MG TRI (3X10) U17_3": 72,
        "ENTRESTO 97MG/103MG X14 MM": 24,
        "KESIMPTA LISY 20MG GLW 0.4ML (X) B0": 1,
        "ENTRESTO 49MG/51MG X14 MM": 365,
        "GILEN HGC 0.5MG DUP (2X14) U17_9": 1,
        "GALME FCT 50/500MG ALU (6X10) U17_5": 3,
        "JAKAV TAB 5MG ACP (6X10) PE": 1,
        "EXFORGE FCT 160/5MG ALU (2X14) U17_9": 10,
        "MAYZE FCT 2MG ALU (2X14) R65": 3,
        "MAYZE FCT 0.25MG ALU (10X12) R65": 2,
        },
        {
        name: "2024 - Junio",
        value: 3796,
        "DIOVAN HCT 160/12.5MG  X 14 COMP MM": 163,
        "DIOVAN FCT 160MG ALU(X2) MM": 404,
        "TEGRE TAB 200MG PVC (2X10) PE": 2415,
        "MYFOR FCT 360MG ALU (12X10) PE_3": 0,
        "VOLTAREN 75MG X 10 AMP PE": 543,
        "ULTIBRO HNCI0.11/0.05MGALU(3X10)R53_1": 2,
        "ENTRE FCT 24/26MG ALU (3X10) PE": 100,
        "MAYZE FCT 0.25MG ALU (X12) R65": 3,
        "TRILEPTAL SSP 60MG/ML GLB 100ML": 27,
        "EXFOR FCT 160/5MG ALU (4X7) U17_1": 96,
        "COSENTYX 150MG/1ML PE": 4,
        "GLIVE FCT 400MG ALU (3X10) PEF": 4,
        "VOTRI FCT 400MG HDPE (X30) R234_2": 3,
        "GALME FCT 50/850MG ALU (6X10) U17_5": 32,
        },
        {
        name: "2024 - Julio",
        value: 9433,
        "ENTRE FCT 49/51MG ALU (6X10) PE": 497,
        "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE_1": 925,
        "AZARGA 5ML-PE": 0,
        "XOLAI LYVI 150MG GLW (+) U17_8": 1,
        "AFINI TAB 10MG ALU (3X10) U17_11": 0,
        "GALME FCT 50/850MG ALU (6X10) U17_5": 19,
        "TOBRADEX OPH SOL 2.5ML-MM": 360,
        "ENTRESTO 24MG/26MG X14 MM": 18,
        "TOBRADEX SUSP 5ML-PE": 1560,
        "PATAD LDMO 2MG/ML LDPE 2.5ML (X) PE": 435,
        "SANDIMMUN NEORAL SOL 100 mg/ml 50 ml": 2094,
        "GALME FCT 50/1000MG ALU (6X10) U17_5": 73,
        "GALME FCT 50/500MG ALU (6X10) U17_5": 3,
        "FEMAR FCT 2.5MG TRI (3X10) PE_1": 24,
        "DUOTRAV BAK FREE 2.5ML-PE": 3265,
        "DIOVAN HCT 160/25 ALU X 14 MM": 93,
        "KISQA FCT 200MG ACP (3X21) R53": 66,
        },
        {
        name: "2024 - Agosto",
        value: 1119,
        "JAKAV TAB 5MG ACP (6X10) PE": 0,
        "TOBREX 5ML-PE": 26,
        "JAKAV TAB 15MG ACP (6X10) PE": 1,
        "VIGAMOX .5% OPH SOL 5ML 288<PE": 873,
        "TOBRADEX UNGUENTO 3.5G-PE": 4,
        "SANDIMMUN NEORAL 50MG X 50 CAPSULAS": 5,
        "ENTRE FCT 49/51MG ALU (6X10) PE": 15,
        "TRILEPTAL SSP 60MG/ML GLB 100ML": 17,
        "ULTIBRO HNCI0.11/0.05MGALU(3X10)R53_1": 24,
        "GALME FCT 50/1000MG ALU (6X10) U17_5": 15,
        "RITAL TAB 10MG ALU (2X15) U17_5": 42,
        "SANDOSTATIN LAR 30 MG X 1 JERINGA": 9,
        "DIOVAN HCT 80/12.5MG X 28 COMP.": 60,
        "DIOVAN HCT 160/25MG X28 COMP.": 28,
        },
        {
        name: "2024 - Setiembre",
        value: 11497,
        "EXFOH FCT 160/25/10MG ALU (4X7) U17_4": 3,
        "ENTRE FCT 24/26MG ALU (3X10) PE": 319,
        "GALVU TAB 50MG ALU (4X14) PE_1": 854,
        "SANDIMMUN LIAM 50MG/1ML 1X10 U17": 2,
        "REVOL FCT 50MG ALU (4X7) R234_5": 13,
        "MYFOR FCT 360MG ALU (12X10) PE_3": 105,
        "EXFORGE FCT 160/12.5/5MG ALU (2X7) U17_2": 25,
        "EXFORGE 160/10MG X7 PE MM": 3904,
        "VIGAD LDMO 5/1MG/ML LDPE 5ML (X) PE": 6251,
        "GILEN HGC 0.5MG DUP (2X14) U17_9": 0,
        "CERTI TAB 0.75MG ALU (6X10) R56": 21,
        },
        {
        name: "2024 - Octubre",
        value: 3950,
        "DIOVAN HCT 160/25MG X28 COMP.": 42,
        "SANDIMMUN NEORAL SOL 100 mg/ml 50 ml": 97,
        "KISQA FCT 200MG ACP (3X21) R53": 757,
        "RITAL TAB 10MG ALU (2X15) U17_5": 91,
        "PATAD LDMO 2MG/ML LDPE 2.5ML (X) PE": 216,
        "XOLAI LYVI 150MG GLW (+) U17_8": 18,
        "EXFORGE FCT 160/10MG ALU (4X7) U17_1": 11,
        "JAKAV TAB 5MG ACP (6X10) PE": 0,
        "EXFORGE FCT 160/12.5/10MG ALU (2X7) U172": 89,
        "TASIGNA HGC 150MG DUP 3(5X8) U17_2": 3,
        "TRAVA LDMO0.04MG/ML LDPE1.5ML (X) MM": 2263,
        "TASIG HGC 200MG DUP 4(7X4) U17_6": 9,
        "VOLTAREN FCT 50MG 10X10 PE": 14,
        "ENTRE FCT 97/103MG ALU (6X10) PE": 77,
        "VOLTAREN 75MG X 10 AMP PE": 34,
        "TEGRM FCT 400MG TRI (3X10) U17_3": 19,
        "TRAVA LDMO 0.04MG/ML PPP 2.5ML (X) PE": 210,
        "JAKAV TAB 15MG ACP (6X10) PE": 0,
        },
        {
        name: "2024 - Noviembre",
        value: 444,
        "REVOL FCT 50MG ALU (4X7) R234_5": 18,
        "MYFOR FCT 360MG ALU (12X10) PE_3": 255,
        "GALME FCT 50/1000MG ALU (6X10) U17_5": 37,
        "EXFORGE FCT 80/5MG ALU (2X14) U17_9": 21,
        "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE_1": 59,
        "AZARG LDMO10/5MG/ML LDPE 2.5ML(X) MM": 51,
        "AFINI TAB 10MG ALU (3X10) U17_11": 3,
        },
        {
        name: "2024 - Diciembre",
        value: 6441,
        "NEVAN LDMO 1MG/ML LDPE 3ML (X) PES-MM": 101,
        "TASIG HGC 200MG DUP 4(7X4) U17_6": 2,
        "GALME FCT 50/500MG ALU (6X10) U17_5": 15,
        "DIOVAN HCT 160/12.5MG X28 COMP.": 84,
        "EXFOH FCT 160/25/10MG ALU (4X7) U17_4": 0,
        "TRILEPTAL SSP 60MG/ML GLB 100ML": 81,
        "RITAL TAB 10MG ALU (2X15) U17_5": 77,
        "SANDOSTATIN LAR 30 MG X 1 JERINGA": 1,
        "JAKAV TAB 5MG ACP (6X10) PE": 0,
        "SYBRAVA LISY 284MG GLW 1.5ML (X) R234": 10,
        "ULTIBRO HNCI0.11/0.05MGALU(3X10)R53_1": 523,
        "FEMAR FCT 2.5MG TRI (3X10) PE_1": 49,
        "GILEN HGC 0.5MG DUP (2X14) U17_9": 1,
        "ENTRESTO 24MG/26MG X14 MM": 223,
        "EXFORGE 160/10MG X7 PE MM": 59,
        "DUOTRAV BAK-FREE 1.5ML MM": 5200,
        "ENTRESTO 49MG/51MG X14 MM": 10,
        "SANDOSTATIN LAR 20MG POL SUSP INY": 5,
        },
        {
        name: "2025 - Enero",
        value: 7990,
        "DIOVAN 160 MG X 28 COMP.": 105,
        "DIOVA FCT 80MG ALU (2X14) PE": 79,
        "SANDIMMUN NEORAL SOL 100 mg/ml 50 ml": 1925,
        "SIMULECT LYVI 20MG GLW 1+1 U17_13": 2,
        "KISQA FCT 200MG ACP (3X21) U17_19": 8,
        "GALME FCT 50/850MG ALU (X10) U17S_4 - MM": 206,
        "GALME FCT 50/1000MG ALU (X10) U17S_3 - MM": 1,
        "GALME FCT 50/500MG ALU (X10) U17S_4 - MM": 396,
        "EXFOR FCT 160/5MG ALU (4X7) U17_1": 12,
        "EXFOR FCT 80/5MG ALU (2X14) U17_9": 45,
        "SANDIMMUN NEORAL 50MG X 50 CAPSULAS": 122,
        "TASIGNA HGC 150MG DUP 3(5X8) U17_2": 4,
        "JAKAV TAB 5MG ACP (6X10) PE": 1,
        "AFINI TAB 10MG ALU (3X10) U17_11": 0,
        "VIGAMOX .5% OPH SOL 5ML 288<PE": 1000,
        "TOBRADEX UNGUENTO 3.5G-PE": 40,
        "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE_1": 60,
        "DUOTRAV BAK FREE 2.5ML-PE": 3763,
        "DIOVAN HCT 160/12.5MG X28 COMP.": 73,
        "SANDIMMUN NEORAL 25MG X 50 CAPSULAS": 0,
        "AZARGA 5ML-PE": 80,
        "KESIMPTA LISY 20MG 0.4ML 1X1 R234 (AI)": 33,
        "COSENTYX 150MG/1ML PE": 12,
        "TASIG HGC 200MG DUP 4(7X4) U17_6": 23,
        },
    ],
};

const CustomizedLabel = ({ x, y, stroke, value }) => {
    return (
        <text x={x} y={y} dy={-10} fill={stroke} textAnchor="middle" className="text-xl font-bold">
            {value}
        </text>
    );
}
const CustomizedLabelPercent = ({ x, y, stroke, value }) => {
    return (
        <text x={x} y={y} dy={-30} fill={stroke} textAnchor="middle" className="text-xl font-bold">
            {(value / 1000).toFixed(2)}%
        </text>
    );
}
const CustomTooltipTrashDetail = ({ active, payload }) => {
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
            <div style={{ background: "white", padding: 10, border: "1px solid #ccc" }}>
                <p className="text-2xl">
                    <strong>{payload[0].payload.name}</strong>
                </p>
                <p className="my-4 text-xl" style={{ color: payload[0].color }}>Total Unidades Deterioradas: <strong>{payload[0].value}</strong></p>
                <div className="flex flex-col gap-y-3">{lists}</div>
            </div>
        );
    }
    return null;
};
const CustomTooltipTrash = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ background: "white", padding: 10, border: "1px solid #ccc" }}>
                <p className="text-2xl">
                    <strong>{payload[0].payload.name}</strong>
                </p>
                <p className="my-4 text-xl" style={{ color: payload[0].color }}>Total Unidades Recepcionadas: <strong>{payload[0].value}</strong></p>
                <p className="my-4 text-xl" style={{ color: payload[2].color }}>Total Unidades Deterioradas: <strong>{payload[2].value}</strong></p>
                <p className="my-4 text-xl" style={{ color: payload[1].color }}>Porcentaje Unidades Recepcionadas: <strong>{(payload[1].value / 1000).toFixed(2)}%</strong></p>
            </div>
        );
    }
    return null;
};

const Deteriorado = ({ typeDeteriorado }) => {
    switch (typeDeteriorado) {
        case "detail":
            return (
                <ResponsiveContainer width="98%" height="85%">
                    <ComposedChart
                        width={500}
                        height={300}
                        data={lineTrash.data}
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
        
                        <Tooltip content={<CustomTooltipTrashDetail />} />
                        <Legend />
        
                        <Line
                            type="monotone"
                            dataKey="value"
                            data={lineTrash.data}
                            name={lineTrash.name}
                            key={lineTrash.name}
                            strokeWidth={4}
                            stroke="#161f35"
                            fill="#161f35"
                            label={<CustomizedLabel />}
                        >
                        </Line>
                    </ComposedChart>
                </ResponsiveContainer>
            )

        default:
            return (
                <ResponsiveContainer width="98%" height="85%">
                    <ComposedChart
                        width={500}
                        height={300}
                        data={dataNormal}
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
        
                        <Tooltip content={<CustomTooltipTrash />} />
                        <Legend />
        
                        <Line
                            type="monotone"
                            dataKey="quantity"
                            strokeWidth={4}
                            stroke="#ffd700"
                            fill="#ffd700"
                            label={<CustomizedLabel />}
                        >
                        </Line>
        
                        <Line
                            type="monotone"
                            dataKey="percent"
                            strokeWidth={4}
                            stroke="#161f35"
                            fill="#161f35"
                            label={<CustomizedLabelPercent />}
                        >
                        </Line>
        
                        <Line
                            type="monotone"
                            dataKey="trash"
                            strokeWidth={4}
                            stroke="#cf1020"
                            fill="#cf1020"
                            label={<CustomizedLabel />}
                        >
                        </Line>
                    </ComposedChart>
                </ResponsiveContainer>
            )
    }
}

export default Deteriorado