import {Fragment, useCallback} from "react";
import {AiOutlineClose} from "react-icons/ai";
import Button from "@/components/Button";

interface ModalProps {
    isOpen?: boolean
    title?: string
    body?: React.ReactElement
    footer?: React.ReactElement
    actionLabel: string
    disabled?: boolean
    onClose: () => void
    onSubmit: () => void
}

const Modal: React.FC<ModalProps> = (props) => {
    const {
        isOpen, title, body, footer, actionLabel, disabled, onClose, onSubmit
    } = props

    const handleClose = useCallback(() => {
        if (disabled) return

        onClose()
    }, [disabled, onClose])

    const handleSubmit = useCallback(() => {
        if (disabled) return

        onSubmit()
    }, [disabled, onSubmit])

    if (!isOpen) return null

    return (
        <Fragment>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70"
            >
                <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
                    {/* content */}

                    <div
                        className="h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none"
                    >
                        {/* header */}
                        <div className="flex items-center justify-between p-10 rounded-t">
                            <h3 className="text-3xl font-semibold text-white">{title}</h3>

                            <button
                                className="p-1 ml-auto border-0 text-white hover:opacity-70 transition"
                                onClick={handleClose}
                            >
                                <AiOutlineClose size={20}/>
                            </button>
                        </div>

                        {/* body */}
                        <div className="relative p-10 flex-auto">
                            {body}
                        </div>

                        {/* footer */}
                        <div className="flex flex-col gap-2 p-10">
                            <Button
                                disabled={disabled}
                                label={actionLabel}
                                onClick={handleSubmit}
                                secondary
                                fullWidth
                                large
                            />

                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Modal