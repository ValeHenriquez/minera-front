
import React from "react";

interface FactorCarga{
    flota: string;
    fase1: string;
    fase2: string;
}

type FactoresCargaProps = {    
    data: FactorCarga[];
};

const FactoresCarga: React.FC<FactoresCargaProps> = ({data}) => {
    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200 border border-black">
                <thead>
                    <th className="py-2 px-4 bg-blue-900 text-white">Flota</th>
                    <th className="py-2 px-4 bg-blue-900 text-white">Fase 1</th>
                    <th className="py-2 px-4 bg-blue-900 text-white">Fase 2</th>

                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr
                            key={item.flota}
                            className={index % 2 === 0 ? 'bg-[#A8DADC]' : 'bg-[#F1FAEE]'}
                        >
                            <td className="py-2 px-4" style={{ whiteSpace: 'nowrap' }}>{item.flota}</td>
                            <td className="py-2 px-4">{item.fase1}</td>
                            <td className="py-2 px-4">{item.fase2}</td>


                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
};

export default FactoresCarga;
