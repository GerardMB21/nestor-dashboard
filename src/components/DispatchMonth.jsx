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
            {value}
        </text>
    );
};
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {

        return (
        <div style={{ background: "white", padding: 10, border: "1px solid #ccc" }}>
            <p className="text-2xl font-semibold">
                <strong>{payload[0].payload.name}</strong>
            </p>
            <p className="text-xl" style={{ color: payload[0].color }}>Total Cajas: <strong>{payload[0].value}</strong></p>
            <p className="text-xl" style={{ color: payload[1].color }}>Cajas Completas: <strong>{payload[1].value}</strong></p>
            <p className="text-xl" style={{ color: payload[2].color }}>Cajas Saldo: <strong>{payload[2].value}</strong></p>
            <p className="text-xl" style={{ color: payload[3].color }}>Total Paletas: <strong>{payload[3].value}</strong></p>
        </div>
        );
    }
    return null;
};

const DispatchMonth = ({ data, yearSelected }) => {

    const [dataFilter, setDataFilter] = useState(data);

    useEffect(() => {
        if (yearSelected && data) {
            const dataFilter = data.filter(i => i.name.includes(yearSelected));

            setDataFilter(dataFilter);
        } else {
            setDataFilter(data);
        };
    },[data, yearSelected]);

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
                <Legend />

                <Bar dataKey="value.box" fill="#161f35">
                    {/* <LabelList dataKey="value.box" content={CustomLabel} /> */}
                    <LabelList dataKey="value.box" content={CustomTotalLabel} />
                </Bar>
                <Bar dataKey="value.box_completes" fill="#0f766e">
                    {/* <LabelList dataKey="value.box_completes" content={CustomLabel} /> */}
                    <LabelList dataKey="value.box_completes" content={CustomTotalLabel} />
                </Bar>
                <Bar dataKey="value.box_saldo" fill="#f97316">
                    {/* <LabelList dataKey="value.box_saldo" content={CustomLabel} /> */}
                    <LabelList dataKey="value.box_saldo" content={CustomTotalLabel} />
                </Bar>

                <Bar dataKey="value.palletes" fill="#08457e">
                    {/* <LabelList dataKey="value.palletes" content={CustomLabel} /> */}
                    <LabelList dataKey="value.palletes" content={CustomTotalLabel} />
                </Bar>

            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default DispatchMonth