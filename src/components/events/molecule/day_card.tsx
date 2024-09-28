import React from 'react';
import type { ReactNode } from 'react';

interface DaycardProps {
    className?: string;
    items?: string[];
    title?: string;
    date?: string;
}

const Daycard = ({ className = '', items, title, date }: DaycardProps) => {
    return (
        <div className='day-section mb-8 xl:w-2/3'>
            <div className='flex items-center gap-4 mx-4'>
                <h3 className="text-white text-3xl font-semibold">{title}</h3>
                <hr className="flex-grow border-t-2 border-white opacity-80 mr-3" />
            </div>
            <p className="text-white mb-6 mt-1 m-4 opacity-70 text-sm">
                {date}
            </p>
            <div className={`bg-black bg-opacity-10 p-4 shadow-lg rounded-lg m-4 ${className}`} >
                {items && items.length > 0 && (
                    <ul className='list-disc list-inside flex flex-col gap-3'>
                        {items.map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Daycard;