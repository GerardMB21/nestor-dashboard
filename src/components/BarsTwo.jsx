import { PureComponent, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList, LineChart, Line, ComposedChart } from 'recharts';
import GroupBars from './GroupBars';
import { cn } from '../utils/ui';

const optionsDashboard = [
    {
        name: "Ingresos Actas y OC",
        value: "AROC"
    },
    {
        name: "Total de Unidades Recepcionadas",
        value: "TOTAL"
    },
    {
        name: "Ingresos Deteriorado",
        value: "DETERIORADO"
    },
    {
        name: "Ocupabilidad",
        value: "OCUPABILITY"
    },
    {
        name: "Cantidad Ocupada",
        value: "QUANTITY"
    },
    // {
    //     name: "Cajas y Paletas despachadas",
    //     value: "BOX_PALLETES"
    // },
]

const BarsTwo = () => {

    const [typeGraph, setTypeGraph] = useState("AROC");

    function changeSection(val) {
        setTypeGraph(val)
    }

    return (
        <div className="w-full h-dvh p-4 bg-white-four">

            <h1 className='w-full text-center text-3xl font-bold my-6'>KPI's Novartis</h1>

            <div className='w-full p-4 flex items-center justify-between gap-x-6 rounded-lg bg-gray-three'>
                {optionsDashboard.map(({ name, value }, index) => (
                    <button key={"optionDashboard-" + index} className={cn('w-full p-4 text-center text-xl font-bold rounded-lg transition-all duration-500 cursor-pointer hover:bg-white', typeGraph == value ? "border bg-white border-black-two" : "bg-gray-two")} onClick={() => setTypeGraph(value)}>
                        {name}
                    </button>
                ))}
            </div>

            <GroupBars type={typeGraph} />
        </div>
    );
}

export default BarsTwo