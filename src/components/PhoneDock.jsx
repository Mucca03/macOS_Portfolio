import { dockAppsPhone } from "#constants";
import useWindowStorePhone from "#store/windowPhone";

const PhoneDock = () => {
    const { openWindow, closeWindow, windows } = useWindowStorePhone();

    const toggleApp = (app) => {
        if (!app.canOpen) return;

        const win = windows[app.id];
        if (!win) return;

        if (win.isOpen) closeWindow(app.id);
        else openWindow(app.id);
    };

    return (
        <section className="dockPhone">
            <div className="flex gap-6">
                {dockAppsPhone.map((app) => (
                    <button
                        key={app.id}
                        className="size-14 flex items-center justify-center dock-icon-phone"
                        onClick={() => toggleApp(app)}
                        disabled={!app.canOpen}
                    >
                        <img
                            src={`/images/${app.icon}`}
                            alt={app.name}
                            className={app.canOpen ? "" : "opacity-60"}
                        />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default PhoneDock;
