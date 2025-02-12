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

const dataNormal = [
    {
        name: "2024 - Enero",
        quantity: 39967,
        trash: 1040,
        box: 304,
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
        trash: 2750,
        box: 687,
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
        trash: 6068,
        box: 635,
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
        trash: 4200,
        box: 278,
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
        trash: 8039,
        box: 554,
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
        trash: 3796,
        box: 1005,
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
        trash: 9433,
        box: 533,
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
        trash: 1119,
        box: 438,
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
        trash: 11497,
        box: 1055,
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
        trash: 3950,
        box: 635,
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
        trash: 444,
        box: 257,
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
        trash: 6441,
        box: 703,
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
        trash: 7990,
        box: 501,
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
const line = {
    name: "Total de unidades",
    data: dataNormal,
};

const colorsUnity = {
    "quantity": "#1d5786",
    "box": "#1b2642"
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

const UnityBox = ({ typeUnity }) => {
    switch (typeUnity) {
        case "todos":
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
        
                        <Tooltip content={<CustomTooltipTotal />} />
                        <Legend />
        
                        {/* <Bar dataKey="box" stackId="oc" fill="#708090">
                            <LabelList dataKey="box" content={CustomLabel} />
                        </Bar> */}
                        <Bar dataKey="quantity" stackId="oc" fill="#1d5786">
                            <LabelList dataKey="quantity" content={CustomLabel} />
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
                            data={line.data}
                            name={line.name}
                            key={line.name}
                        />
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
        
                        <Tooltip content={<CustomTooltipTotal />} />
                        <Legend />
        
                        <Bar dataKey={typeUnity} stackId="oc" fill={colorsUnity[typeUnity]}>
                            <LabelList dataKey={typeUnity} content={CustomLabel} />
                        </Bar>
        
                        <Line
                            type="monotone"
                            strokeWidth={4}
                            dataKey={typeUnity}
                            data={line.data}
                            name={line.name}
                            key={line.name}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            )
    }
}

export default UnityBox