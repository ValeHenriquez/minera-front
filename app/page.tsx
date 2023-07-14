'use client';
import Image from 'next/image'
import DailyTable from "@/components/DailyTable";


export default function Home() {
    return (
        <main className="flex flex-col flex-grow justify-center min-h-screen items-center">
            <DailyTable />
        </main>
    )
}