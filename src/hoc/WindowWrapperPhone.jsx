import useWindowStorePhone from "#store/windowPhone";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const WindowWrapperPhone = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { windows } = useWindowStorePhone();
        const { isOpen, zIndex } = windows[windowKey];
        const ref = useRef();

        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            el.style.display = "block";

            gsap.fromTo(
                el,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.25, ease: "power3.out" }
            );
        }, [isOpen]);

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;
            el.style.display = isOpen ? "block" : "none";
        }, [isOpen]);

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex }}
                className="absolute top-0 left-0 w-full h-full bg-white"
            >
                <Component {...props} />
            </section>
        );
    };

    return Wrapped;
};

export default WindowWrapperPhone;
