"use client"

import React, { useState, useEffect } from 'react';
import Card from '@/components/Card';
import Table from '@/components/DataTable';
import KPITable from '@/components/KPITable';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { Task } from './interfaces/Tasks';

const data = [
  {
    fecha: "15-06-2023",
    produccion_real: 123.456,
    extraccion_de_mineral: 123.456,
    extraccion_de_lastre: 123.456,
    total_extraccion: 123.456,
    remanejo: 123.456,
    movimiento_total: 123.456,
    mineral_chancado: 123.456,
  },
  // Resto de los datos
];

const datakpi = [
  ['Valor 1', 'Valor 2', 'Valor 3', 'Valor 4', 'Valor 5'],
  ['Valor 6', 'Valor 7', 'Valor 8', 'Valor 9', 'Valor 10'],
  ['Valor 11', 'Valor 12', 'Valor 13', 'Valor 14', 'Valor 15'],
  ['Valor 16', 'Valor 17', 'Valor 18', 'Valor 19', 'Valor 20'],
];

const useClient = () => {
  const navOptions = [
    { id: 1, label: 'Fase 1' },
    { id: 2, label: 'Fase 2' },
    { id: 3, label: 'Fase 3' },
    { id: 4, label: 'Total' },
    { id: 5, label: 'Valores' },
  ];

  const [selectedOption, setSelectedOption] = useState<number>(navOptions[0].id);
  const [dbData, setDbData] = useState<any[]>([]);

  const handleOptionSelect = (optionId: number) => {
    setSelectedOption(optionId);
  };

  useEffect(() => {
    // Aquí puedes realizar cualquier lógica adicional que necesites en el efecto
    // Por ejemplo, puedes hacer una llamada a una API para obtener los datos y actualizar el estado `dbData`
    // Ejemplo:
    fetch('http://localhost:3000/api')
    .then((response) => response.json())
    .then((data) => setDbData(data));

    // Datos de ejemplo
    setDbData(data);
  }, []); // El efecto se ejecuta solo una vez, al montar el componente

  return (
    <main className="flex min-h-screen flex-grow items-center justify-between p-6 bg-blue-900">
      <Card title="Rajo Esperanza">
        <Navbar
          options={navOptions}
          selectedOption={selectedOption}
          onOptionSelect={handleOptionSelect}
        />
        {selectedOption === 5 ? (
          <KPITable title="Esperanza" data={datakpi} />
        ) : (
          <Table data={dbData} />
        )}
      </Card>
    </main>
  );
};

export default useClient;
