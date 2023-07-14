import React from 'react';

interface RequestCardProps {
    name: string;
    email: string;
    date: string;
}

const RequestCard: React.FC<RequestCardProps> = ({ name, email, date }) => {
    return (
        <div className="flex flex-wrap justify-center row-auto">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4 flex-shrink-0">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-lg font-semibold mb-2 text-black">{name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{email}</p>
                    <p className="text-gray-600 text-sm mb-4">{date}</p>
                    <div className="flex justify-end">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mr-2">
                            Aceptar
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                            Rechazar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestCard;
