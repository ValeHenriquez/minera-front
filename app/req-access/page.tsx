'use client'
import RequestAccessForm from "@/components/RequestAccessForm";
import React from "react";


export default function Landing() {
    return (
        <>
            <main className="flex flex-col flex-grow min-h-screen items-center p-24">
                <RequestAccessForm />
            </main>
        </>
    );
}
