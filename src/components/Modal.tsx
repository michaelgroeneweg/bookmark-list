import { Dialog, Transition } from '@headlessui/react'
import React, {Fragment, FunctionComponent, useState} from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import ReactDOM from 'react-dom';
import {Props} from "./Button";

export interface ModalProps extends React.HTMLAttributes<HTMLElement> {
    isShown: boolean;
    hide: () => void;
    headerText: string;
    children: React.ReactNode
}

export const Modal: React.FC<ModalProps>  = ({
    isShown,
    hide,
    headerText,
    children
}) => {
    const modal = (
        <>
            <Transition appear show={isShown} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={hide}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto ">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-[40rem] relative transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-500"
                                    >
                                        {headerText}
                                    </Dialog.Title>
                                    <div className="mt-6">
                                        {children}
                                    </div>
                                    <button className="text-gray-700 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 absolute top-4 right-4" onClick={hide}>
                                        <XMarkIcon className="w-5 h-5"/>
                                    </button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};