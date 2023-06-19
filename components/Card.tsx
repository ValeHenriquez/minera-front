import React, { ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-[#87BBDC] rounded-lg shadow-md p-4 h-full mx-auto w-full">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
