'use client';
import MenuAdmin from '@/components/menuAdmin';

//Esta funcion es la que se encarga de renderizar la página de inicio del administrador
export default function Home() {
    return (
        <main className="flex flex-grow justify-center min-h-screen items-center">
            <MenuAdmin />
        </main>
    )
}