
import React from "react";

interface Solicitud{
    usuarioPendiente: string;
    fechaSolicitud: string;
    estado: string;
}

type SolicitudAccesoProps = {    
    data: Solicitud[];
};

const SolicitudAcceso: React.FC<SolicitudAccesoProps> = ({data}) => {
    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200 border border-black">
                <thead>
                    <th className="py-2 px-4 bg-blue-900 text-white">Usuario pendiente</th>
                    <th className="py-2 px-4 bg-blue-900 text-white">Fecha solicitud</th>
                    <th className="py-2 px-4 bg-blue-900 text-white"></th>

                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr
                            key={item.usuarioPendiente}
                            className={index % 2 === 0 ? 'bg-[#A8DADC]' : 'bg-[#F1FAEE]'}
                        >
                            <td className="py-2 px-4" style={{ whiteSpace: 'nowrap' }}>{item.usuarioPendiente}</td>
                            <td className="py-2 px-4">{item.fechaSolicitud}</td>
                            <td className="py-2 px-4">{item.estado}</td>


                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
};

export default SolicitudAcceso;
