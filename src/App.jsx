import gsap from "gsap";
import { Draggable } from "gsap/Draggable"

import { Dock, Home, Navbar, Welcome, PhoneNavbar, PhoneDock, PhoneWelcome } from "#components"
import { Finder, Resume, Terminal, Img, Text, Contact, Photos, PhonePhotos, ContactPhone, ResumePhone} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return(
      <>
        <div className="block md:hidden">
            <PhoneNavbar/>
            <PhoneWelcome/>
            <PhoneDock/>
            <PhonePhotos/>
            <ContactPhone/>
            <ResumePhone/>
        </div>

        <main className="hidden md:block">
        <Navbar />
            <Welcome />
            <Dock />
            <Terminal/>
            <Resume/>
            <Finder/>
            <Img/>
            <Text/>
            <Contact/>
            <Home/>
            <Photos/>
        </main>
      </>
  )
}

export default App