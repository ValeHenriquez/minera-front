import { Task } from '@/app/interfaces/Tasks';
import React from 'react';

type Data = {
  fecha: string;
  produccion_real: number;
  extraccion_de_mineral: number;
  extraccion_de_lastre: number;
  total_extraccion: number;
  remanejo: number;
  movimiento_total: number;
  mineral_chancado: number;
};

type TableProps = {
  data: Task[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    
    <table className="min-w-full divide-y divide-gray-200 border border-black">
      <thead>
        <tr>
          <th className="py-2 px-4 bg-blue-900 text-white">Fecha</th>
          <th className="py-2 px-4 bg-blue-900 text-white">Produccion Real</th>
          <th className="py-2 px-4 bg-blue-900 text-white">Extraccion de Mineral</th>
          <th className="py-2 px-4 bg-blue-900 text-white">Extraccion de Lastre</th>
          <th className="py-2 px-4 bg-blue-900 text-white">Total Extraccion</th>
          <th className="py-2 px-4 bg-blue-900 text-white">Remanejo</th>
          <th className="py-2 px-4 bg-blue-900 text-white">Movimiento Total</th>
          <th className="py-2 px-4 bg-blue-900 text-white">Mineral Chancado</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
          key={item.index}
          className={index % 2 === 0 ? 'bg-[#A8DADC]' : 'bg-[#F1FAEE]'}
        >
            <td className="py-2 px-4" style={{ whiteSpace: 'nowrap' }}>{item.Fecha}</td>
            <td className="py-2 px-4">{item.Ciclos}</td>
            <td className="py-2 px-4">{item.index}</td>
            

          </tr>
        ))}
      </tbody>
    </table>
    
  );
};

export default Table;
