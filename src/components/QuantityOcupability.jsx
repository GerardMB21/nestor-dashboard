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


let dataQuantityOcupability = [
    {
        "name":"2024 - Enero",
        "quantity":387
    },
    {
        "name":"2024 - Febrero",
        "quantity":365
    },
    {
        "name":"2024 - Marzo",
        "quantity":368
    },
    {
        "name":"2024 - Abril",
        "quantity":343
    },
    {
        "name":"2024 - Mayo",
        "quantity":335
    },
    {
        "name":"2024 - Junio",
        "quantity":360
    },
    {
        "name":"2024 - Julio",
        "quantity":364
    },
    {
        "name":"2024 - Agosto",
        "quantity":373
    },
    {
        "name":"2024 - Setiembre",
        "quantity":370
    },
    {
        "name":"2024 - Octubre",
        "quantity":356
    },
    {
        "name":"2024 - Noviembre",
        "quantity":327
    },
    {
        "name":"2025 - Enero",
        "quantity":322
    }
];
dataQuantityOcupability = [
    {
        "name": "2024 - Enero",
        "quantity": 387
    },
    {
        "name": "2024 - Febrero",
        "quantity": 365
    },
    {
        "name": "2024 - Marzo",
        "quantity": 368
    },
    {
        "name": "2024 - Abril",
        "quantity": 343
    },
    {
        "name": "2024 - Mayo",
        "quantity": 335
    },
    {
        "name": "2024 - Junio",
        "quantity": 360
    },
    {
        "name": "2024 - Julio",
        "quantity": 364
    },
    {
        "name": "2024 - Agosto",
        "quantity": 373
    },
    {
        "name": "2024 - Setiembre",
        "quantity": 370
    },
    {
        "name": "2024 - Octubre",
        "quantity": 356
    },
    {
        "name": "2024 - Noviembre",
        "quantity": 348
    },
    {
        "name": "2024 - Diciembre",
        "quantity": 327
    },
    {
        "name": "2025 - Enero",
        "quantity": 322
    },
    {
        "name": "2025 - Febrero",
        "quantity": 317
    }
];
const line = {
    name: "Total Ocupado",
    data: dataQuantityOcupability,
};

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
            fontSize={20}
            fill="#000"
        >
            {((value / 584) * 100).toFixed(2)}%
        </text>
    );
};
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div
                style={{ background: "white", padding: 10, border: "1px solid #ccc" }}
            >
                <p className="text-2xl font-bold mb-2">
                    <strong>{payload[0].payload.name}</strong>
                </p>
                <p className="text-lg" style={{ color: payload[0].color }}>
                    Total Ocupado: <strong>{payload[0].value}</strong>
                </p>
                <p className="text-lg">
                    Procentaje Ocupado: <strong>{((payload[0].value / 584) * 100).toFixed(2)}%</strong>
                </p>
            </div>
        );
    }
    return null;
};

const QuantityOcupability = ({yearSelected}) => {

    const [dataFilter, setDataFilter] = useState(dataQuantityOcupability);
    const [dataFilterLine, setDataFilterLine] = useState(line);

    useEffect(() => {
        const dataFilter = dataQuantityOcupability.filter(i => i.name.includes(yearSelected));
        const dataFilterLine = {
            ...line,
            data: dataFilter
        }

        setDataFilter(dataFilter);
        setDataFilterLine(dataFilterLine);
    },[yearSelected]);

    return (
        <ResponsiveContainer width="98%" height="85%">
            <ComposedChart
                width={500}
                height={300}
                data={dataFilter}
                margin={{
                    top: 40,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={60}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={"name"} scale="point" padding={{ left: 30, right: 30 }} />
                <YAxis domain={[0, 584]}/>

                <Tooltip content={CustomTooltip} />
                <Legend />

                <Bar dataKey="quantity" fill="#161f35" background={{ fill: "#eee" }}>
                    <LabelList dataKey="quantity" content={CustomLabel} />
                    <LabelList dataKey="quantity" content={CustomTotalLabel} />
                </Bar>

                <Line
                    type="monotone"
                    strokeWidth={4}
                    dataKey="quantity"
                    data={dataFilterLine.data}
                    name={dataFilterLine.name}
                    key={dataFilterLine.name}
                />
            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default QuantityOcupability