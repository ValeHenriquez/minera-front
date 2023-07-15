import React from 'react';
import RequestCard from "@/components/RequestCard";

const RequestContainer: React.FC = () => {
    const requests = [
        { name: 'Luisa', email: 'luisa@ucn.cl', date: '2023-07-13' },
        { name: 'Daniel', email: 'dani@ucn.cl', date: '2023-07-14' },
        { name: 'Vale', email: 'vale@ucn.cl', date: '2023-07-15' },
        { name: 'Luisa', email: 'luisa@ucn.cl', date: '2023-07-13' },
        { name: 'Daniel', email: 'dani@ucn.cl', date: '2023-07-14' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto">
            {requests.map((request, index) => (
                <div key={index} className="flex-shrink-0">
                    <RequestCard
                        name={request.name}
                        email={request.email}
                        date={request.date}
                    />
                </div>
            ))}
        </div>
    );
};

export default RequestContainer;