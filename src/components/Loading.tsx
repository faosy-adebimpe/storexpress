import { LoaderCircleIcon } from 'lucide-react';

const Loading = () => {
    return (
        <div className="w-full h-full cc p-5">
            <LoaderCircleIcon className="size-7 text-gray-500 animate-spin" />
        </div>
    );
};

export default Loading;
