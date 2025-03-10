import { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList, LineChart, Line, ComposedChart } from 'recharts';

let dataOcupability = [
    {
       "name":"2024 - Enero",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":1,
       "Rechazados":8,
       "PT Muestra Médica":11,
       "Material de empaque":74,
       "Material promocional":1,
       "PT Disponible":190,
       "Mat Embalaje":96
    },
    {
       "name":"2024 - Febrero",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":1,
       "Rechazados":12,
       "PT Muestra Médica":11,
       "Material de empaque":73,
       "Material promocional":1,
       "PT Disponible":167,
       "Mat Embalaje":94
    },
    {
       "name":"2024 - Marzo",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":4,
       "Rechazados":14,
       "PT Muestra Médica":16,
       "Material de empaque":72,
       "Material promocional":1,
       "PT Disponible":107,
       "PT Cuarentena":58,
       "Mat Embalaje":90
    },
    {
       "name":"2024 - Abril",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":5,
       "Rechazados":14,
       "PT Muestra Médica":15,
       "Material de empaque":70,
       "Material promocional":1,
       "PT Disponible":101,
       "PT Cuarentena":50,
       "Mat Embalaje":81
    },
    {
       "name":"2024 - Mayo",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":2,
       "Rechazados":18,
       "PT Muestra Médica":8,
       "Material de empaque":73,
       "Material promocional":1,
       "PT Disponible":85,
       "PT Cuarentena":62,
       "Mat Embalaje":80
    },
    {
       "name":"2024 - Junio",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":1,
       "Rechazados":22,
       "PT Muestra Médica":9,
       "Material de empaque":84,
       "Material promocional":1,
       "PT Disponible":73,
       "PT Cuarentena":91,
       "Mat Embalaje":84
    },
    {
       "name":"2024 - Julio",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":1,
       "Rechazados":28,
       "PT Muestra Médica":9,
       "Material de empaque":73,
       "Material promocional":1,
       "PT Disponible":83,
       "PT Cuarentena":80,
       "Mat Embalaje":83
    },
    {
       "name":"2024 - Agosto",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":2,
       "Rechazados":35,
       "PT Muestra Médica":14,
       "Material de empaque":76,
       "Material promocional":0,
       "PT Disponible":85,
       "PT Cuarentena":83,
       "Mat Embalaje":72
    },
    {
       "name":"2024 - Setiembre",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":3,
       "Rechazados":25,
       "PT Muestra Médica":16,
       "Material de empaque":73,
       "Material promocional":0,
       "PT Disponible":86,
       "PT Cuarentena":97,
       "Mat Embalaje":64
    },
    {
       "name":"2024 - Octubre",
       "Contramuestras":5,
       "Devoluciones":2,
       "Controlados":5,
       "Rechazados":25,
       "PT Muestra Médica":12,
       "Material de empaque":76,
       "Material promocional":0,
       "PT Disponible":97,
       "PT Cuarentena":70,
       "Mat Embalaje":64
    },
    {
       "name":"2024 - Noviembre",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":3,
       "Rechazados":26,
       "PT Muestra Médica":12,
       "Material de empaque":71,
       "Material promocional":0,
       "PT Disponible":112,
       "PT Cuarentena":54,
       "Mat Embalaje":64
    },
    {
       "name":"2024 - Diciembre",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":8,
       "Rechazados":10,
       "PT Muestra Médica":13,
       "Material de empaque":75,
       "Material promocional":0,
       "PT Disponible":107,
       "PT Cuarentena":43,
       "Mat Embalaje":65
    },
    {
       "name":"2025 - Enero",
       "Contramuestras":5,
       "Devoluciones":1,
       "Controlados":12,
       "Rechazados":17,
       "PT Muestra Médica":12,
       "Material de empaque":73,
       "Material promocional":0,
       "PT Disponible":94,
       "PT Cuarentena":49,
       "Mat Embalaje":59
    }
];
dataOcupability = [
   {
       "name": "2024 - Enero",
       "quantity": 387,
       "Contramuestras": 5,
       "Devoluciones": 1,
       "Controlados": 1,
       "Rechazados": 8,
       "PT Muestra Médica": 11,
       "Material de empaque": 74,
       "Material promocional": 1,
       "PT Disponible": 190,
       "Mat Embalaje": 96
   },
   {
       "name": "2024 - Febrero",
       "quantity": 365,
       "Contramuestras": 5,
       "Devoluciones": 1,
       "Controlados": 1,
       "Rechazados": 12,
       "PT Muestra Médica": 11,
       "Material de empaque": 73,
       "Material promocional": 1,
       "PT Disponible": 167,
       "Mat Embalaje": 94
   },
   {
       "name": "2024 - Marzo",
       "quantity": 368,
       "Contramuestras": 5,
       "Devoluciones": 1,
       "Controlados": 4,
       "Rechazados": 14,
       "PT Muestra Médica": 16,
       "Material de empaque": 72,
       "Material promocional": 1,
       "PT Disponible": 107,
       "PT Cuarentena": 58,
       "Mat Embalaje": 90
   },
   {
       "name": "2024 - Abril",
       "quantity": 343,
       "Contramuestras": 5,
       "Devoluciones": 1,
       "Controlados": 5,
       "Rechazados": 14,
       "PT Muestra Médica": 15,
       "Material de empaque": 70,
       "Material promocional": 1,
       "PT Disponible": 101,
       "PT Cuarentena": 50,
       "Mat Embalaje": 81
   },
   {
       "name": "2024 - Mayo",
       "quantity": 335,
       "Contramuestras": 5,
       "Devoluciones": 1,
       "Controlados": 2,
       "Rechazados": 18,
       "PT Muestra Médica": 8,
       "Material de empaque": 73,
       "Material promocional": 1,
       "PT Disponible": 85,
       "PT Cuarentena": 62,
       "Mat Embalaje": 80
   },
   {
       "name": "2024 - Junio",
       "quantity": 371,
       "Contramuestras": 5,
       "Devoluciones": 1,
       "Controlados": 1,
       "Rechazados": 22,
       "PT Muestra Médica": 9,
       "Material de empaque": 84,
       "Material promocional": 1,
       "PT Disponible": 73,
       "PT Cuarentena": 91,
       "Mat Embalaje": 84
   },
   {
       "name": "2024 - Julio",
       "quantity": 364,
       "Contramuestras": 5,
       "Devoluciones": 1,
       "Controlados": 1,
       "Rechazados": 28,
       "PT Muestra Médica": 9,
       "Material de empaque": 73,
       "Material promocional": 1,
       "PT Disponible": 83,
       "PT Cuarentena": 80,
       "Mat Embalaje": 83
   },
   {
       "name": "2024 - Agosto",
       "quantity": 373,
       "Contramuestras": 5,
       "Devoluciones": 1,
       "Controlados": 2,
       "Rechazados": 35,
       "PT Muestra Médica": 14,
       "Material de empaque": 76,
       "Material promocional": 0,
       "PT Disponible": 85,
       "PT Cuarentena": 83,
       "Mat Embalaje": 72
   },
   {
       "name": "2024 - Setiembre",
       "quantity": 370,
       "Contramuestras": 5,
       "Devoluciones": 1,
       "Controlados": 3,
       "Rechazados": 25,
       "PT Muestra Médica": 16,
       "Material de empaque": 73,
       "Material promocional": 0,
       "PT Disponible": 86,
       "PT Cuarentena": 97,
       "Mat Embalaje": 64
   },
   {
       "name": "2024 - Octubre",
       "quantity": 356,
       "Contramuestras": 5,
       "Devoluciones": 2,
       "Controlados": 5,
       "Rechazados": 25,
       "PT Muestra Médica": 12,
       "Material de empaque": 76,
       "Material promocional": 0,
       "PT Disponible": 97,
       "PT Cuarentena": 70,
       "Mat Embalaje": 64
   },
   {
       "name": "2024 - Noviembre",
       "quantity": 348,
       "Contramuestras": 5,
       "Devoluciones": 1,
       "Controlados": 3,
       "Rechazados": 26,
       "PT Muestra Médica": 12,
       "Material de empaque": 71,
       "Material promocional": 0,
       "PT Disponible": 112,
       "PT Cuarentena": 54,
       "Mat Embalaje": 64
   },
   {
       "name": "2024 - Diciembre",
       "quantity": 327,
       "Contramuestras": 5,
       "Devoluciones": 1,
       "Controlados": 8,
       "Rechazados": 10,
       "PT Muestra Médica": 13,
       "Material de empaque": 75,
       "Material promocional": 0,
       "PT Disponible": 107,
       "PT Cuarentena": 43,
       "Mat Embalaje": 65
   },
   {
       "name": "2025 - Enero",
       "quantity": 322,
       "Contramuestras": 5,
       "Devoluciones": 1,
       "Controlados": 12,
       "Rechazados": 17,
       "PT Muestra Médica": 12,
       "Material de empaque": 73,
       "Material promocional": 0,
       "PT Disponible": 94,
       "PT Cuarentena": 49,
       "Mat Embalaje": 59
   },
   {
       "name": "2025 - Febrero",
       "quantity": 317,
       "Contramuestras": 5,
       "Devoluciones": 4,
       "Controlados": 9,
       "Cuarentena Controlados": 1,
       "Rechazados": 20,
       "PT Muestra Médica": 11,
       "Material de empaque": 71,
       "Cuarentena Material de empaque": 5,
       "Material promocional": 0,
       "PT Disponible": 92,
       "PT Cuarentena": 35,
       "MM Cuarentena": 10,
       "Mat Embalaje": 54
   }
];

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

function  getNameParse(name) {
    switch (name) {
        case "AR_seco.process":
            return "AR Seco"
        
        case "AR_refrigeration.process":
            return "AR Refrigeración"
        
        case "OC_seco.process":
            return "OC Seco"
        
        case "OC_refrigeration.process":
            return "OC Refrigeración"
        
        default:
            return "Cantidad"
            break
    }
}

const CustomLabel = ({ x, y, width, height, value }) => {
    if (!value || value === 0) return null;
    return (
        <text x={x + width / 2} y={y + height / 2} textAnchor="middle" fontSize={20} fill="white">
            {value}
        </text>
    );
};

const CustomTotalLabel = ({ x, y, width, value, payload }) => {
    if (!value || value === 0) return null;
    return (
        <text x={x + width / 2} y={y - 10} textAnchor="middle" fontSize={20} fill="#000">
            {value}
        </text>
    );
};

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {

        let quantitySeco = 0
        let quantityRefrigeration = 0

        const list = payload.map((entry, index) => {
            const keys = entry.dataKey.split(".")
            const principalKey = keys[0]

            if (principalKey.includes("seco")) {
                quantitySeco = quantitySeco + entry.payload[principalKey].quantity
            } else if (principalKey.includes("refrigeration")) {
                quantityRefrigeration = quantityRefrigeration + entry.payload[principalKey].quantity
            }

            return (<p key={index} style={{ color: entry.color }}>
                {getNameParse(entry.name)}: {entry.value}
            </p>)
        });

        return (
            <div style={{ background: "white", padding: 10, border: "1px solid #ccc" }}>
                <p><strong>{payload[0].payload.name}</strong></p>
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
            <div style={{ background: "white", padding: 10, border: "1px solid #ccc" }}>
                <p><strong>{payload[1].payload.name}</strong></p>
                <p>Total Unidades: {payload[1].value}</p>
                <p>Total Cajas: {payload[1].payload.box}</p>
            </div>
        );
    }
    return null;
};

const Ocupability = ({ typeO, yearSelected }) => {

    const [dataFilter, setDataFilter] = useState(dataOcupability);

    useEffect(() => {
        const dataFilter = dataOcupability.filter(i => i.name.includes(yearSelected));

        setDataFilter(dataFilter);
    },[yearSelected]);

    switch (typeO) {
        case "Todos":
            return (
                <ResponsiveContainer width="98%" height="80%">
                    <ComposedChart
                        width={500}
                        height={300}
                        data={dataFilter}
                        margin={
                            {
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }
                        }
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={"name"} />
                        <YAxis />

                        <Tooltip />
                        <Legend />

                        <Bar dataKey="Contramuestras" stackId="ar" fill={colorsOcupability["Contramuestras"]}>
                            <LabelList dataKey="Contramuestras" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="Devoluciones" stackId="ar" fill={colorsOcupability["Devoluciones"]}>
                            <LabelList dataKey="Devoluciones" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="Controlados" stackId="ar" fill={colorsOcupability["Controlados"]}>
                            <LabelList dataKey="Controlados" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="Rechazados" stackId="ar" fill={colorsOcupability["Rechazados"]}>
                            <LabelList dataKey="Rechazados" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="PT Muestra Médica" stackId="ar" fill={colorsOcupability["PT Muestra Médica"]}>
                            <LabelList dataKey="PT Muestra Médica" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="Material de empaque" stackId="ar" fill={colorsOcupability["Material de empaque"]}>
                            <LabelList dataKey="Material de empaque" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="Material promocional" stackId="ar" fill={colorsOcupability["Material promocional"]}>
                            <LabelList dataKey="Material promocional" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="PT Disponible" stackId="ar" fill={colorsOcupability["PT Disponible"]}>
                            <LabelList dataKey="PT Disponible" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="PT Cuarentena" stackId="ar" fill={colorsOcupability["PT Cuarentena"]}>
                            <LabelList dataKey="PT Cuarentena" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="Mat Embalaje" stackId="ar" fill={colorsOcupability["Mat Embalaje"]}>
                            <LabelList dataKey="Mat Embalaje" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="Cuarentena Controlados" stackId="ar" fill={colorsOcupability["Cuarentena Controlados"]}>
                            <LabelList dataKey="Cuarentena Controlados" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="Cuarentena Material de empaque" stackId="ar" fill={colorsOcupability["Cuarentena Material de empaque"]}>
                            <LabelList dataKey="Cuarentena Material de empaque" content={CustomLabel} />
                        </Bar>
                        <Bar dataKey="MM Cuarentena" stackId="ar" fill={colorsOcupability["MM Cuarentena"]}>
                            <LabelList dataKey="MM Cuarentena" content={CustomLabel} />
                            <LabelList content={CustomTotalLabel} />
                        </Bar>

                    </ComposedChart>
                </ResponsiveContainer>)

        default:
            return (
                <ResponsiveContainer width="98%" height="80%">
                    <ComposedChart
                        width={500}
                        height={300}
                        data={dataFilter}
                        margin={
                            {
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }
                        }
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={"name"} />
                        <YAxis />

                        <Tooltip />
                        <Legend />

                        <Bar dataKey={typeO} stackId="ar" fill={colorsOcupability[typeO]}>
                           <LabelList dataKey={typeO} content={CustomLabel} />
                        </Bar>

                  </ComposedChart>
               </ResponsiveContainer>)
   }
}

export default Ocupability