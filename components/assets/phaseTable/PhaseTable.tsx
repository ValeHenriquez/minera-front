import * as React from "react";

const PhaseTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="border-collapse border border-blue-300 rounded-lg">
                <thead>
                <tr>
                    <th className="border border-blue-300 bg-blue-200 text-blue-800 px-4 py-2 rounded-tl-lg">
                        Fase 1
                    </th>
                    <th className="border border-blue-300 bg-blue-200 text-blue-800 px-4 py-2">
                        Fase 2
                    </th>
                    <th className="border border-blue-300 bg-blue-200 text-blue-800 px-4 py-2 rounded-tr-lg">
                        Fase 3
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-blue-300 bg-blue-100 text-blue-800 px-4 py-2 rounded-bl-lg">
                        Celda 1
                    </td>
                    <td className="border border-blue-300 bg-blue-100 text-blue-800 px-4 py-2">
                        Celda 2
                    </td>
                    <td className="border border-blue-300 bg-blue-100 text-blue-800 px-4 py-2 rounded-br-lg">
                        Celda 3
                    </td>
                </tr>
                <tr>
                    <td className="border border-blue-300 bg-blue-100 text-blue-800 px-4 py-2">
                        Celda 4
                    </td>
                    <td className="border border-blue-300 bg-blue-100 text-blue-800 px-4 py-2">
                        Celda 5
                    </td>
                    <td className="border border-blue-300 bg-blue-100 text-blue-800 px-4 py-2">
                        Celda 6
                    </td>
                </tr>
                <tr>
                    <td className="border border-blue-300 bg-blue-100 text-blue-800 px-4 py-2 rounded-bl-lg">
                        Celda 7
                    </td>
                    <td className="border border-blue-300 bg-blue-100 text-blue-800 px-4 py-2">
                        Celda 8
                    </td>
                    <td className="border border-blue-300 bg-blue-100 text-blue-800 px-4 py-2 rounded-br-lg">
                        Celda 9
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PhaseTable;

