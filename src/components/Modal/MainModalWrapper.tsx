import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button from '../Button'

interface Props {
    isOpen: boolean
    closeModal: () => void
    title?: string
    children: React.ReactNode
}

export default function MainModalWrapper({ isOpen, closeModal, title, children }: Props) {

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/40 backdrop-blur" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto ">
                        <div className="flex min-h-full items-center justify-center p-4 text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-primary/60 text-fourth p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h2"
                                        className="text-lg font-medium leading-6 text-center uppercase"
                                    >
                                        {title}
                                    </Dialog.Title>

                                    {children}

                                    <div className="mt-4 flex justify-end">
                                        <Button text='Cancel' type='outlined' handleClick={closeModal} additionalStyle='text-sm min-w-[40%]' />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
