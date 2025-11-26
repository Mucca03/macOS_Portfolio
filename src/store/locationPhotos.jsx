import { locationsPhotos } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";


const DEFAULT_LOCATION = locationsPhotos.library;
const useLocationStorePhotos = create(immer((set) => ({
    activeLocationPhotos : DEFAULT_LOCATION,

    setActiveLocation: (location) => 
        set((state) => {
            if(location === undefined) return;
            state.activeLocationPhotos = location;
        }),
    
        resetActiveLocation : () => 
            set((state) => {
                state.activeLocationPhotos = DEFAULT_LOCATION;
        }),
    })),
);

export default useLocationStorePhotos;