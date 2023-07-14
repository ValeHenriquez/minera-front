import React from 'react';
import TabsWithTables from '@/components/TabsWithTables';

//Esta interfaz es la que se encarga de recibir el nombre del pit que se va a renderizar
interface PitNameProps {
    params: {
        name: string;
    };
}
//Esta funcion es la que se encarga de renderizar la página de cada pit en especifico 
//con sus respectivas tablas y graficas de datos
const PitName: React.FC<PitNameProps> = ({ params: { name } }) => {
    return (
        <main className="flex flex-col flex-grow justify-center min-h-screen items-center">
            <TabsWithTables contentTitle={name} />
        </main>
    );
};

export default PitName;
