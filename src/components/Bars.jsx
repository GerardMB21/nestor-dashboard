import ReactApexChart from "react-apexcharts"
import { useState } from "react"

const Bars = () => {
    const [state, setState] = useState({
        series: [
            {
                name: 'OC Seco',
                group: 'oc',
                color: '#80c7fd',
                data: [14, 23, 15, 12, 13, 13, 17, 14, 11, 18, 7, 17],
            },
            {
                name: 'AR Seco',
                group: 'ar',
                color: '#008FFB',
                data: [14, 25, 15, 13, 13, 14, 17, 14, 14, 21, 7, 19],
            },
            {
                name: 'OC Refrigerado',
                group: 'oc',
                color: '#80f1cb',
                data: [1, 2, 0, 0, 6, 2, 1, 1, 0, 1, 0, 2],
            },
            {
                name: 'AR Refrigerado',
                group: 'ar',
                color: '#00E396',
                data: [1, 2, 0, 0, 8, 2, 1, 1, 0, 1, 0, 2],
            },
            {
                name: 'OC Recepcionado',
                group: 'oc',
                color: '#880808',
                data: [15, 25, 15, 12, 19, 15, 18, 15, 11, 19, 7, 18],
            },
            {
                name: 'AR Repcionado',
                group: 'ar',
                color: '#FFC300',
                data: [15, 27, 15, 13, 21, 16, 18, 15, 14, 22, , 21],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 1000,
                stacked: true,
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val;
                },
                total: {
                    enabled: true,
                    formatter: function (w) {
                        console.log(w)
                        w.globals.stackedSeriesTotals.map((val) => val)
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '12px',
                        fontWeight: 'bold',
                        colors: ["#304758"]
                    }
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    // dataLabels: {
                    //     position: 'top'
                    // }
                }
            },
            xaxis: {
                categories: [
                    'OC - Enero - AR',
                    'OC - Febrero - AR',
                    'OC - Marzo - AR',
                    'OC - Abril - AR',
                    'OC - Mayo - AR',
                    'OC - Junio - AR',
                    'OC - Julio - AR',
                    'OC - Agosto - AR',
                    'OC - Septiembre - AR',
                    'OC - Octubre - AR',
                    'OC - Noviembre - AR',
                    'OC - Diciembre - AR',
                ]
            },
            fill: {
                opacity: 1
            },
            yaxis: {
                title: {
                    tetx: "Cantidad de Productos"
                }
            },
            legend: {
                position: 'bottom',
                clusterGroupedSeriesOrientation: "vertical"
            }
        },
    });

    return (
        <div className="w-dvw h-dvh">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={1000} />
        </div>
    )
}

export default Bars