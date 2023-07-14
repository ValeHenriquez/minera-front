"use client"
import React, { useState } from 'react';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';
import Datepicker from 'react-tailwindcss-datepicker';


type TableData = {
    date: string;
    phase: string;
    dailyValue: number;
    ISOWeek: number;
    MovingWeekly: number;
    MonthlyActual: number;
    AnnualActual: number;
};



const data: TableData[] = [
    {
        date: "2021-06-21",
        phase: "Phase 1",
        dailyValue: 10,
        ISOWeek: 25,
        MovingWeekly: 50,
        MonthlyActual: 200,
        AnnualActual: 2400,
    },
    {
        date: "2021-06-22",
        phase: "Phase 2",
        dailyValue: 15,
        ISOWeek: 30,
        MovingWeekly: 60,
        MonthlyActual: 250,
        AnnualActual: 3000,
    },
    {
        date: "2021-06-23",
        phase: "Phase 3",
        dailyValue: 12,
        ISOWeek: 35,
        MovingWeekly: 70,
        MonthlyActual: 300,
        AnnualActual: 3600,
    },
];




const DailyTable: React.FC = () => {

    const [value, setValue] = useState<DateValueType>({
        startDate: null,
        endDate: null,
    });

    const handleValueChange = (newValue: DateValueType) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };


    return (
        <div className={'h-5/6 w-11/12 flex flex-col  bg-white p-10 rounded-lg border-2 border-black'}>
            <div className="flex justify-end pb-10">
                <div className="h-1.5">
                    <Datepicker
                        i18n="es"
                        primaryColor={"purple"}
                        asSingle={true}
                        placeholder="Selecciona una fecha"
                        displayFormat={"DD/MM/YYYY"}

                        value={value}
                        onChange={handleValueChange}
                    />
                </div>
            </div>
            <h1 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Reporte Diario</h1>
            <div className="p-4">
                <div className="h-[50vh] overflow-y-auto">
                    <table className="table-auto w-full border-collapse border-2 border-indigo-700">
                        <thead>
                            <tr>
                                <th className="text-black p-3 text-center">Fase</th>
                                <th className="text-black p-3 text-center">Valor Diario</th>
                                <th className="text-black p-3 text-center">Semanal ISO</th>
                                <th className="text-black p-3 text-center">Semanal Movil</th>
                                <th className="text-black p-3 text-center">Real Mensual</th>
                                <th className="text-black p-3 text-center">Real Anual</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-indigo-300' : ''}>
                                    <td className="p-2 px-5 text-black text-center">{row.phase}</td>
                                    <td className="p-2 px-5 text-black text-center">{row.dailyValue}</td>
                                    <td className="p-2 px-5 text-black text-center">{row.ISOWeek}</td>
                                    <td className="p-2 px-5 text-black text-center">{row.MovingWeekly}</td>
                                    <td className="p-2 px-5 text-black text-center">{row.MonthlyActual}</td>
                                    <td className="p-2 px-5 text-black text-center">{row.AnnualActual}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DailyTable;