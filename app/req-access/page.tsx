'use client'
import RequestAccessForm from "@/components/RequestAccessForm";
import React from "react";

//Esta funcion es la que se encarga de renderizar la página de solicitud de acceso
export default function Landing() {
    return (
        <>   //Este fragmento es el que se encarga de renderizar el formulario de solicitud de acceso
            <main className="flex flex-col flex-grow min-h-screen items-center p-24">
                <RequestAccessForm />
            </main>
        </>
    );
}






