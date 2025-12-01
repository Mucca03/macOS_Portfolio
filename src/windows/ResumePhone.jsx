import WindowWrapperPhone from "#hoc/WindowWrapperPhone";
import WindowControlsPhone from "#components/WindowControlsPhone";
import { Download } from "lucide-react";

const ResumePhoneBase = () => {
    return (
        <div className="w-full h-full flex flex-col bg-white overflow-hidden">

            {/* HEADER */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 bg-white">
                <WindowControlsPhone target="resumePhone" />
                <h2 className="text-lg font-semibold flex-1 text-center">Resume</h2>

                <a
                    href="files/Resume.pdf"
                    download
                    title="Download Resume"
                    className="p-2"
                >
                    <Download size={20} />
                </a>
            </div>

            {/* PDF */}
            <div className="flex-1 overflow-auto bg-gray-100">
                <embed
                    src="files/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                    type="application/pdf"
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};

const ResumePhone = WindowWrapperPhone(ResumePhoneBase, "resumePhone");
export default ResumePhone;
