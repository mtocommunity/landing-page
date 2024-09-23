import React from 'react';
import type { ReactNode } from 'react';

interface DescriptionProps {
    className?: string;
    children: ReactNode;
}

const Description = ({ className = '', children }: DescriptionProps) => {
    return (
        <div className={`bg-black bg-opacity-10 p-4 shadow-lg rounded-lg m-4 ${className}`}>
            {children}
        </div>
    );
};

export default Description;
