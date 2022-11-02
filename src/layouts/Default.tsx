import React, {ReactNode, FC, useEffect } from 'react'
import { MoonIcon } from '@heroicons/react/24/outline'
import { useDarkMode } from 'usehooks-ts'

type Props = { children: React.ReactNode };

const Default: React.FC<Props>  =  ({children}) => {
    const { isDarkMode, toggle } = useDarkMode()

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark' : '';
    }, [isDarkMode]);

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <header className="fixed py-6 px-10 w-screen">
                <div className="flex justify-between p-0">
                    <div className="flex-1">test</div>
                    <div className="flex flex-row-reverse">
                        <button onClick={toggle}>
                            <MoonIcon className="h-6 w-6 dark:text-gray-100 text-gray-700"/>
                        </button>
                    </div>
                </div>
            </header>
            <main className="grid place-items-center h-screen dark:bg-gray-900">
                {children}
            </main>
        </div>
    );
}

export default Default;
