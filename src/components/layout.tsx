import React, { ReactNode, FC } from 'react'

type Props = { children: React.ReactNode };

const Layout: React.FC<Props>  =  ({children}) => {
    return (
        <div className="">
            <header className="fixed py-6 px-10">test</header>
            <main className="grid place-items-center h-screen bg-gray-900">
                {children}
            </main>
        </div>
    );
}

export default Layout;
