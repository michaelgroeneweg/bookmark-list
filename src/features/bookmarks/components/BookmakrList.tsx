import {useEffect, useState} from "react";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export const BookmarkList = () => {
    const [error, setError] = useState(null);
    const [bookmarks, setBookmarks] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('http://localhost:1337/api/bookmarks');
            return await data.json();
        }
        fetchData()
            .then((bookmarks) => setBookmarks(bookmarks?.data))
            .catch((error) => setError(error));
    }, [])

    if (error) {
        return <div>An error occurred: {error}</div>;
    }

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
                <ul className="flex flex-col gap-4">
                    {bookmarks.map(({id, attributes}) =>
                        <li className="bg-gray-200 dark:bg-gray-800 p-6 rounded" key={id}>
                            <article className="flex justify-between items-center">
                                <div>
                                    <header>
                                        <h2>{attributes.title}</h2>
                                    </header>
                                    <div className="mt-3 text-gray-600 w-[30rem]">
                                        {attributes.description}
                                    </div>
                                </div>
                                <div className="pr-4">
                                    <a href={attributes.link}>
                                        <ArrowTopRightOnSquareIcon className="w-9 h-9 text-gray-700 bg-transparent hover:bg-gray-500 p-2 rounded-full"/>
                                    </a>
                                </div>
                            </article>
                        </li>)}
                </ul>
            </div>
        </div>
    );
}

export default BookmarkList;

