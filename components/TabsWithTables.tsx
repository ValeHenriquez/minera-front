"use client"
import React, { useState } from 'react';

type TabData = {
    id: number;
    title: string;
    data: TableData[];
};

type TableData = {
    date: string;
    realProduction: number;
    mineral: number;
    waste: number;
    totalExtraction: number;
    handling: number;
    totalMovement: number;
    crushing: number;
};

const sampleData1: TableData[] = [
    {
        date: '2023-06-01',
        realProduction: 1000,
        mineral: 500,
        waste: 500,
        totalExtraction: 1500,
        handling: 250,
        totalMovement: 1750,
        crushing: 1200,
    },
    {
        date: '2023-06-03',
        realProduction: 1200,
        mineral: 600,
        waste: 550,
        totalExtraction: 1550,
        handling: 280,
        totalMovement: 1830,
        crushing: 1300,
    },
    {
        date: '2023-06-04',
        realProduction: 1300,
        mineral: 650,
        waste: 600,
        totalExtraction: 1600,
        handling: 300,
        totalMovement: 1900,
        crushing: 1350,
    },
    {
        date: '2023-06-05',
        realProduction: 1400,
        mineral: 700,
        waste: 650,
        totalExtraction: 1650,
        handling: 320,
        totalMovement: 1970,
        crushing: 1400,
    },
    {
        date: '2023-06-06',
        realProduction: 1500,
        mineral: 750,
        waste: 700,
        totalExtraction: 1700,
        handling: 350,
        totalMovement: 2050,
        crushing: 1450,
    },
];

const sampleData2: TableData[] = [
    {
        date: '2023-06-02',
        realProduction: 1100,
        mineral: 550,
        waste: 480,
        totalExtraction: 1530,
        handling: 270,
        totalMovement: 1800,
        crushing: 1250,
    },
    {
        date: '2023-06-07',
        realProduction: 1600,
        mineral: 800,
        waste: 750,
        totalExtraction: 1750,
        handling: 380,
        totalMovement: 2130,
        crushing: 1500,
    },
    {
        date: '2023-06-08',
        realProduction: 1700,
        mineral: 850,
        waste: 800,
        totalExtraction: 1800,
        handling: 400,
        totalMovement: 2200,
        crushing: 1550,
    },
    {
        date: '2023-06-09',
        realProduction: 1800,
        mineral: 900,
        waste: 850,
        totalExtraction: 1850,
        handling: 420,
        totalMovement: 2270,
        crushing: 1600,
    },
    {
        date: '2023-06-10',
        realProduction: 1900,
        mineral: 950,
        waste: 900,
        totalExtraction: 1900,
        handling: 440,
        totalMovement: 2340,
        crushing: 1650,
    },
    {
        date: '2023-06-11',
        realProduction: 2000,
        mineral: 1000,
        waste: 950,
        totalExtraction: 1950,
        handling: 460,
        totalMovement: 2410,
        crushing: 1700,
    },
    {
        date: '2023-06-12',
        realProduction: 2100,
        mineral: 1050,
        waste: 1000,
        totalExtraction: 2000,
        handling: 480,
        totalMovement: 2480,
        crushing: 1750,
    },
    {
        date: '2023-06-13',
        realProduction: 2200,
        mineral: 1100,
        waste: 1050,
        totalExtraction: 2050,
        handling: 500,
        totalMovement: 2550,
        crushing: 1800,
    },
    {
        date: '2023-06-02',
        realProduction: 1100,
        mineral: 550,
        waste: 480,
        totalExtraction: 1530,
        handling: 270,
        totalMovement: 1800,
        crushing: 1250,
    },
    {
        date: '2023-06-07',
        realProduction: 1600,
        mineral: 800,
        waste: 750,
        totalExtraction: 1750,
        handling: 380,
        totalMovement: 2130,
        crushing: 1500,
    },
    {
        date: '2023-06-08',
        realProduction: 1700,
        mineral: 850,
        waste: 800,
        totalExtraction: 1800,
        handling: 400,
        totalMovement: 2200,
        crushing: 1550,
    },
    {
        date: '2023-06-09',
        realProduction: 1800,
        mineral: 900,
        waste: 850,
        totalExtraction: 1850,
        handling: 420,
        totalMovement: 2270,
        crushing: 1600,
    },
    {
        date: '2023-06-10',
        realProduction: 1900,
        mineral: 950,
        waste: 900,
        totalExtraction: 1900,
        handling: 440,
        totalMovement: 2340,
        crushing: 1650,
    },
    {
        date: '2023-06-11',
        realProduction: 2000,
        mineral: 1000,
        waste: 950,
        totalExtraction: 1950,
        handling: 460,
        totalMovement: 2410,
        crushing: 1700,
    },
    {
        date: '2023-06-12',
        realProduction: 2100,
        mineral: 1050,
        waste: 1000,
        totalExtraction: 2000,
        handling: 480,
        totalMovement: 2480,
        crushing: 1750,
    },
    {
        date: '2023-06-13',
        realProduction: 2200,
        mineral: 1100,
        waste: 1050,
        totalExtraction: 2050,
        handling: 500,
        totalMovement: 2550,
        crushing: 1800,
    },
];

const sampleData3: TableData[] = [
    {
        date: '2023-06-14',
        realProduction: 2300,
        mineral: 1150,
        waste: 1100,
        totalExtraction: 2100,
        handling: 520,
        totalMovement: 2620,
        crushing: 1850,
    },
    {
        date: '2023-06-15',
        realProduction: 2400,
        mineral: 1200,
        waste: 1150,
        totalExtraction: 2150,
        handling: 540,
        totalMovement: 2690,
        crushing: 1900,
    },
    {
        date: '2023-06-16',
        realProduction: 2500,
        mineral: 1250,
        waste: 1200,
        totalExtraction: 2200,
        handling: 560,
        totalMovement: 2760,
        crushing: 1950,
    },
    {
        date: '2023-06-17',
        realProduction: 2600,
        mineral: 1300,
        waste: 1250,
        totalExtraction: 2250,
        handling: 580,
        totalMovement: 2830,
        crushing: 2000,
    },
    {
        date: '2023-06-18',
        realProduction: 2700,
        mineral: 1350,
        waste: 1300,
        totalExtraction: 2300,
        handling: 600,
        totalMovement: 2900,
        crushing: 2050,
    },
    {
        date: '2023-06-19',
        realProduction: 2800,
        mineral: 1400,
        waste: 1350,
        totalExtraction: 2350,
        handling: 620,
        totalMovement: 2970,
        crushing: 2100,
    },
];

const tabs: TabData[] = [
    { id: 1, title: 'Fase 1', data: sampleData1 },
    { id: 2, title: 'Fase 2', data: sampleData2 },
    { id: 3, title: 'Fase 3', data: sampleData3 },
    { id: 4, title: 'Fase 4', data: sampleData1 },
    { id: 5, title: 'Fase 5', data: sampleData2 },
    { id: 6, title: 'Fase 6', data: sampleData3 },
    { id: 7, title: 'Fase 7', data: sampleData1 },
    { id: 8, title: 'Fase 8', data: sampleData2 },
    { id: 9, title: 'Fase 9', data: sampleData3 },
    { id: 10, title: 'Fase 10', data: sampleData1 },
    { id: 11, title: 'Fase 11', data: sampleData2 },
    { id: 12, title: 'Fase 12', data: sampleData3 },
    { id: 13, title: 'Fase 13', data: sampleData1 },
    { id: 14, title: 'Fase 14', data: sampleData2 },
    { id: 15, title: 'Fase 15', data: sampleData3 },
];

type TabsWithTablesProps = {
    contentTitle: string;
};

const TabsWithTables: React.FC<TabsWithTablesProps> = ({ contentTitle }) => {
    const [activeTab, setActiveTab] = useState<TabData>(tabs[0]);
    const [tabRange, setTabRange] = useState<[number, number]>([0, 8]);
    const renderTable = (tab: TabData) => (
        <div className="h-[50vh] overflow-y-auto">
            <table className="table-auto w-full border-collapse border-2 border-indigo-700">
                <thead>
                    <tr>
                        <th className="text-black p-3 text-center">Fecha</th>
                        <th className="text-black p-3 text-center">Producción Real</th>
                        <th className="text-black p-3 text-center">Mineral</th>
                        <th className="text-black p-3 text-center">Lastre</th>
                        <th className="text-black p-3 text-center">Total Extracción</th>
                        <th className="text-black p-3 text-center">Remanejo</th>
                        <th className="text-black p-3 text-center">Movimiento Total</th>
                        <th className="text-black p-3 text-center">Chancado</th>
                    </tr>
                </thead>
                <tbody>
                    {tab.data.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-indigo-300' : ''}>
                            <td className="p-2 px-5 text-black text-center">{row.date}</td>
                            <td className="p-2 px-5 text-black text-center">{row.realProduction}</td>
                            <td className="p-2 px-5 text-black text-center">{row.mineral}</td>
                            <td className="p-2 px-5 text-black text-center">{row.waste}</td>
                            <td className="p-2 px-5 text-black text-center">{row.totalExtraction}</td>
                            <td className="p-2 px-5 text-black text-center">{row.handling}</td>
                            <td className="p-2 px-5 text-black text-center">{row.totalMovement}</td>
                            <td className="p-2 px-5 text-black text-center">{row.crushing}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    const scrollTabs = (direction: 'left' | 'right') => {
        if (direction === 'left' && tabRange[0] > 0) {
            setTabRange([tabRange[0] - 1, tabRange[1] - 1]);
        } else if (direction === 'right' && tabRange[1] < tabs.length) {
            setTabRange([tabRange[0] + 1, tabRange[1] + 1]);
        }
    };

    const title = 'Rajo ' + contentTitle.charAt(0).toUpperCase() + contentTitle.slice(1);

    return (
        <div className={'bg-white p-10 rounded-lg border-2 border-black'}>
            <h1 className="text-3xl font-bold mb-6 text-indigo-700 text-center">{title}</h1>
            <div className="flex items-center justify-center">
                <div className="min-w-[40px] flex items-center">
                    <button
                        className="p-2 bg-indigo-700 font-bold text-black rounded-md"
                        onClick={() => scrollTabs('left')}
                    >
                        {'<'}
                    </button>
                </div>
                <div className="flex flex-grow px-2 gap-x-2 overflow-x-auto">
                    {tabs.slice(tabRange[0], tabRange[1]).map((tab) => (
                        <button
                            key={tab.id}
                            className={`text-black px-2 text-xl hover:bg-indigo-700 flex transition-colors duration-300 rounded-md p-2 ${activeTab.id === tab.id ? 'bg-indigo-700' : ''
                                } flex-shrink-0 flex-grow justify-center items-center`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="min-w-[40px] flex items-center">
                    <button
                        className="p-2 bg-indigo-700 font-bold text-black rounded-md"
                        onClick={() => scrollTabs('right')}
                    >
                        {'>'}
                    </button>
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4 text-indigo-700 text-center">{activeTab.title}</h2>
                {renderTable(activeTab)}
            </div>
        </div>
    );
};

export default TabsWithTables;