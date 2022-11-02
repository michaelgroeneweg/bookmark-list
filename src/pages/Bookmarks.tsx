import React, {FunctionComponent, useState} from 'react'
import Button from '../components/ui/Button';
import BookmarkList from '../features/bookmarks/components/BookmakrList';
import { Modal } from '../components/ui/Modal';
import { useModal } from '../hooks/useModal';
import AddBookmarkForm from "../features/bookmarks/components/forms/AddBookmark";

export const Bookmarks: FunctionComponent = () => {
    const { isShown, toggle } = useModal();

    return (
        <>
            <BookmarkList/>
            <Modal isShown={isShown} hide={toggle} headerText="Add Bookmark">
                <AddBookmarkForm />
            </Modal>

            <div className="fixed bottom-6 right-6" onClick={toggle}>
                <Button rounded icon="PlusIcon" />
            </div>
        </>
    );
}

export default Bookmarks
