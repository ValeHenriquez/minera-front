'use client'
import RequestAccessForm from "@/components/RequestAccessForm";
import React from "react";


export default function Landing() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <RequestAccessForm />
            </main>
        </>
    );
}
