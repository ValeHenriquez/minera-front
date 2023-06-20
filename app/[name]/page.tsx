import React from 'react';
import TabsWithTables from '@/components/TabsWithTables';

interface PitNameProps {
    params: {
        name: string;
    };
}

const PitName: React.FC<PitNameProps> = ({ params: { name } }) => {
    return (
        <main className="flex flex-col flex-grow justify-center min-h-screen items-center">
            <TabsWithTables contentTitle={name} />
        </main>
    );
};

export default PitName;
