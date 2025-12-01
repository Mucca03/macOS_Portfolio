// ContactPhone.jsx
import WindowWrapperPhone from "#hoc/WindowWrapperPhone";
import WindowControlsPhone from "#components/WindowControlsPhone";
import useWindowStorePhone from "#store/windowPhone";
import { FileText } from "lucide-react";
import { socials } from "#constants";

const ContactPhoneBase = () => {
    const { openWindow } = useWindowStorePhone();

    return (
        <div className="w-full h-full flex flex-col bg-white overflow-hidden">

            {/* HEADER PHONE */}
            <WindowControlsPhone target="contactPhone" />

            <div className="p-5 space-y-5 overflow-y-auto">

                <img
                    src="/images/alejandroIcon.jpg"
                    alt="alejandro"
                    className="w-24 h-24 rounded-full mx-auto"
                />

                <h3 className="text-xl font-bold text-center">Let's Connect</h3>

                <p className="text-sm text-gray-700 text-center">
                    Open to new opportunities, collaborations, and challenging projects.
                    Contact me anytime.
                </p>

                <p className="text-center font-medium text-blue-600">
                    mabernalr12@gmail.com
                </p>

                <ul className="space-y-3 pt-3">
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li
                            key={id}
                            style={{ backgroundColor: bg }}
                            className="rounded-lg"
                        >
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 px-4 py-2"
                            >
                                <img src={icon} alt={text} className="size-5" />
                                <p className="font-medium">{text}</p>
                            </a>

                        </li>
                    ))}
                    <li
                        onClick={() => openWindow("resumePhone")}
                        className="cursor-pointer"
                    >
                        <div className="flex items-center gap-3 px-4 py-2">
                            <FileText className="size-5" />
                            <p className="font-medium">Resume</p>
                        </div>
                    </li>



                </ul>
            </div>
        </div>
    );
};

const ContactPhone = WindowWrapperPhone(ContactPhoneBase, "contactPhone");
export default ContactPhone;
