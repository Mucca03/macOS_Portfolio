import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import {locationsPhotos} from "#constants";
import useWindowStore from "#store/window";
import useLocationStorePhotos from "#store/locationPhotos";
import clsx from "clsx";

const Photos = () => {
    const {openWindow} = useWindowStore();
    const { activeLocationPhotos, setActiveLocation } = useLocationStorePhotos();


    return (
        <>
            <div id="window-header">
                    <WindowControls target="photos" />
                    <h2>Designs</h2>
            </div>


            <div className="flex w-full">
                <div className="sidebar">
                    <h2>Photos</h2>

                    <ul>
                        {Object.values(locationsPhotos).map((item) => (
                            <li
                                key={item.id}
                                className={clsx(item.id === activeLocationPhotos.id ? "active" : "not-active")}
                                onClick={() => setActiveLocation(item)}
                                >
                                <img src={item.icon} alt={item.name} />
                                <p>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery">
                    <ul>
                        {activeLocationPhotos?.children?.map((item) => (
                            <li key={item.id} onClick={() => openWindow(
                                "imgfile",
                                {id: item.id, name: item.name,
                                icon: "images/image.png",
                                kind: "file",
                                fileType:"img",
                                imageUrl: item.img,
                                })
                                }
                            >
                                <img src={item.img} alt={item.name} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};


const TerminalPhotos = WindowWrapper(Photos, "photos");
export default TerminalPhotos;