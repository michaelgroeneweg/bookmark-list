import React, {FunctionComponent, useState} from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import Button from '../../components/Button'
import BookmarkList from '../../views/bookmarks/BookmarkList'
import { Modal } from '../../components/Modal';
import { useModal } from '../../hooks/useModal';
import AddBookmarkForm from "../../views/bookmarks/AddBookmarkForm";

export const Bookmark: FunctionComponent = () => {
    const { isShown, toggle } = useModal();

    return (
        <>
            <BookmarkList/>
            <Modal isShown={isShown} hide={toggle} headerText="Add Bookmark">
                <AddBookmarkForm />
            </Modal>

            <div className="fixed bottom-6 right-6" onClick={toggle}>
              <Button rounded icon="PlusIcon"/>
            </div>
        </>
    );
}

export default Bookmark
