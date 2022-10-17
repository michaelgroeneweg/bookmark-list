import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import Button from '../../components/Button'
import BookmarkList from '../../views/bookmarks/BookmarkList'

export const Bookmark = () => {
    return (
        <>
            <BookmarkList/>
            <div className="fixed bottom-6 right-6">
              <Button><PlusIcon /></Button>
            </div>
        </>
    );
}

export default Bookmark
