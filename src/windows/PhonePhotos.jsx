import WindowWrapperPhone from "#hoc/WindowWrapperPhone";
import WindowControlsPhone from "#components/WindowControlsPhone";
import { locationsPhotos } from "#constants";
import useLocationStorePhotos from "#store/locationPhotos";
import useWindowStore from "#store/window";
import clsx from "clsx";

const PhonePhotosBase = () => {
    const { openWindow } = useWindowStore();
    const { activeLocationPhotos, setActiveLocation } = useLocationStorePhotos();

    return (
        <div className="w-full h-full flex flex-col bg-white overflow-hidden">

            {/* HEADER PHONE */}
            <WindowControlsPhone target="photosPhone" />

            <div className="flex w-full h-full overflow-hidden">
                {/* SIDEBAR */}
                <div className="w-1/3 border-r border-gray-200 overflow-y-auto p-2">
                    <ul className="space-y-2">
                        {Object.values(locationsPhotos).map((item) => (
                            <li
                                key={item.id}
                                className={clsx(
                                    "flex items-center gap-2 p-2 rounded-lg",
                                    item.id === activeLocationPhotos.id
                                        ? "bg-gray-200 font-medium"
                                        : "bg-transparent"
                                )}
                                onClick={() => setActiveLocation(item)}
                            >
                                <img src={item.icon} className="w-6" />
                                <p>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* GALLERY */}
                <div className="w-2/3 overflow-y-auto p-2">
                    <ul className="grid grid-cols-2 gap-2">
                        {activeLocationPhotos?.children?.map((item) => (
                            <li
                                key={item.id}
                                onClick={() =>
                                    openWindow("imgfile", {
                                        id: item.id,
                                        name: item.name,
                                        icon: "images/image.png",
                                        kind: "file",
                                        fileType: "img",
                                        imageUrl: item.img,
                                    })
                                }
                            >
                                <img
                                    src={item.img}
                                    className="w-full rounded-md"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const PhonePhotos = WindowWrapperPhone(PhonePhotosBase, "photosPhone");
export default PhonePhotos;
