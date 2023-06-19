import React from "react";

type KPITableProps = {
  title: string;
  data: string[][];
};

const KPITable: React.FC<KPITableProps> = ({ title, data }) => {
  return (
    <div>      
      <table className="min-w-full divide-y divide-gray-200 border border-black">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-blue-900 text-white" colSpan={6}>{title}</th>
          </tr>
          <tr>
            <th className="py-2 px-4 bg-blue-900 text-white"></th>
            <th className="py-2 px-4 bg-blue-900 text-white">Real</th>
            <th className="py-2 px-4 bg-blue-900 text-white">Planificado</th>
            <th className="py-2 px-4 bg-blue-900 text-white">Valor KPI</th>
            <th className="py-2 px-4 bg-blue-900 text-white">Indicador KPI</th>            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 bg-blue-900 text-white">Valor diario</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="py-2 px-4 bg-blue-900 text-white">Valor semana ISO</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="py-2 px-4 bg-blue-900 text-white">Valor semana móvil</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="py-2 px-4 bg-blue-900 text-white">Valor mensual</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="py-2 px-4 bg-blue-900 text-white">Valor anual</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default KPITable;
