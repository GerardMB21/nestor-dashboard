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
            fontSize={12}
            fill="white"
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
            <p className="text-xl" style={{ color: payload[1].color }}>Total Paletas: <strong>{payload[1].value}</strong></p>
        </div>
        );
    }
    return null;
};

const DispatchMonth = ({ data }) => {
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

                <Bar dataKey="value.box" fill="#161f35">
                    <LabelList dataKey="value.box" content={CustomLabel} />
                </Bar>

                <Bar dataKey="value.palletes" fill="#08457e">
                    <LabelList dataKey="value.palletes" content={CustomLabel} />
                </Bar>

            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default DispatchMonth