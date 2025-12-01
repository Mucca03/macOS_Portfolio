import useWindowStorePhone from "#store/windowPhone";
import { ChevronLeft } from "lucide-react";

const WindowControlsPhone = ({ target }) => {
    const { closeWindow } = useWindowStorePhone();

    return (
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-300 bg-white">
            <button
                onClick={() => closeWindow(target)}
                className="p-1 active:scale-90 transition"
            >
                <ChevronLeft size={24} />
            </button>

            <h2 className="text-lg font-semibold">Back</h2>
        </div>
    );
};

export default WindowControlsPhone;
