import { PureComponent, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList, LineChart, Line, ComposedChart } from 'recharts';
import GroupBars from './GroupBars';

const BarsTwo = () => {

    const [typeGraph, setTypeGraph] = useState("AROC");

    function changeSection(val) {
        setTypeGraph(val)
    }

    return (
        <div className="w-dvw h-dvh">
            <div className='mt-6 ml-10 flex items-center justify-start gap-x-4'>
                <p className='text-2xl'>Dashboard:</p>
                <select value={typeGraph} className='border border-black text-2xl p-4 rounded py-2 px-4 cursor-pointer' onChange={(e) => changeSection(e.target.value)}>
                    <option value="AROC">Ingresos Actas y OC</option>
                    <option value="TOTAL">Total de Unidades Recepcionadas</option>
                    <option value="DETERIORADO">Ingresos Deteriorado</option>
                    <option value="OCUPABILITY">Ocupabilidad</option>
                </select>
            </div>

            <GroupBars type={typeGraph} />
        </div>
    );
}

export default BarsTwo