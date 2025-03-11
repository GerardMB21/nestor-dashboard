import React, { useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from 'recharts';

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
    "Cuarentena Controlados": "#14b8a6",
    "Cuarentena Material de empaque": "#c084fc",
    "MM Cuarentena": "#4d7c0f",
}
const RenderActiveShape= (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className="text-2xl">
            {payload.name}
        </text>
        <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
        />
        <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={outerRadius + 6}
            outerRadius={outerRadius + 10}
            fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" className="text-2xl">{`Cantidad ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" className="text-xl">
            {`(Porcentaje ${(percent * 100).toFixed(2)}%)`}
        </text>
        </g>
    );
};

const OcupabilityPie = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    function onPieEnter(_, index) {
        setActiveIndex(index);
    };

    return (<ResponsiveContainer width="98%" height="80%">
        <h2 className='text-center text-2xl mt-4'>{data.name}</h2>
        <p className='text-center text-xl mt-4'>Total Cantidad: 584</p>
        <p className='text-center text-xl mt-4'>Total Cantidad Ocupada: {data.quantity}</p>
        <p className='text-center text-xl mt-4'>Porcentaje Ocupado: {((data.quantity * 100) / 584).toFixed(2)}%</p>
        <PieChart width={100} height={100}>
            <Pie
                activeIndex={activeIndex}
                activeShape={RenderActiveShape}
                data={data.val}
                cx="50%"
                cy="50%"
                innerRadius={120}
                outerRadius={160}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={onPieEnter}
            >
                {data.val.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colorsOcupability[entry.name]} />
                ))}
            </Pie>
        </PieChart>
    </ResponsiveContainer>)
}

export default OcupabilityPie