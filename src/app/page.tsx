import { Topbar } from "@/components/Topbar";
import { Overview } from "@/components/sections/Overview";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="px-4 sm:px-6">
        <main className="mx-auto max-w-[1080px] pb-10">
          <Overview />
          <Services />
          <Projects />
          <Blog />
          <Contact />
        </main>
      </div>
    </>
  );
}
