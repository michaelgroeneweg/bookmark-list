import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'

function App() {
  return (
    <div className="flex flex-col gap-4 m-w-[50rem] w-[50rem]">
        <header className="bg-gray-200 dark:bg-gray-800 p-6 rounded">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium text-gray-800 dark:text-gray-500">Bookmarks</h2>
                <div className="flex flex-row gap-2">
                    <button
                        className="bg-transparent border-none hover:text-purple-800 hover:bg-[#E6E8EC] dark:hover:bg-[#3E3E3E] dark:hover:text-[#C730C1] text-[#5D5D5D] text-sm font-semibold hover:text-white py-2 px-4 rounded">
                        This week
                    </button>
                    <button
                        className="bg-transparent border-none hover:text-purple-800 hover:bg-[#E6E8EC] dark:hover:bg-[#3E3E3E] dark:hover:text-[#C730C1] text-[#5D5D5D] text-sm font-semibold hover:text-white py-2 px-4 rounded">
                        Today
                    </button>
                </div>
            </div>
        </header>
        <div>
            <article className="bg-gray-200 dark:bg-gray-800 p-6 rounded">
                test
            </article>
        </div>
        <div className="">
            <button
                className="bg-transparent border-none hover:text-purple-800 hover:bg-[#E6E8EC] dark:hover:bg-[#3E3E3E] dark:hover:text-[#C730C1] text-[#5D5D5D] text-sm font-semibold hover:text-white py-2 px-4 rounded">
                <PlusIcon />Add
            </button>
        </div>
    </div>

  )
}

export default App
