import Content from "@/components/content";
import Dashboard from "@/components/dashboard";
import LayoutCards from "@/components/layout-cards";
import MotionHookEx from "@/components/motion-hooks-example";
import Navbar from "@/components/navbar";
import Playground from "@/components/playground";

export default function Home() {
  return (
    <div
      className="[perspective::1000] [transform-style:preserve-3d] bg-neutral-900 h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <Navbar />
    </div>
  );
}
