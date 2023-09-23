import {FaQuestionCircle} from 'react-icons/fa';

export default function Error() {
    return (
        <div className="h-[40vh] w-full flex flex-col gap-2 justify-center items-center text-4xl px-4">
            <FaQuestionCircle />
            <h2 className='font-bold text-xl text-center'>An error has ocurred, please try again.</h2>
        </div>
    )
}