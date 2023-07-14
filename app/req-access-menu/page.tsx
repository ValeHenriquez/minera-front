import React from 'react'
import RequestContainer from "@/components/RequestContainer";

const Page: React.FC = () => {
    return (
        <>
            <div className={"flex justify-center"}>
                <h1 className="text-3xl text-black font-bold mb-8 justify-center my-2">
                    SOLICITUDES DE ACCESO
                </h1>
            </div>
            <div className="flex justify-center">
                <RequestContainer/>
            </div>
        </>
    );
};

export default Page;
