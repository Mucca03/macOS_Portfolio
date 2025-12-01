import { INITIAL_Z_INDEX, WINDOW_CONFIG_PHONE } from "#constants";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

const useWindowStorePhone = create(
    immer((set) => ({
        windows: WINDOW_CONFIG_PHONE,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey, data = null) =>
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;
                win.isOpen = true;
                win.zIndex = state.nextZIndex++;
                win.data = data ?? win.data;
            }),

        closeWindow: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;
                win.isOpen = false;
                win.zIndex = INITIAL_Z_INDEX;
                win.data = null;
            }),

        focusWindow: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;
                win.zIndex = state.nextZIndex++;
            }),
    }))
);

export default useWindowStorePhone;
