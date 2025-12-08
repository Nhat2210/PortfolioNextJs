import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { Search, User, Folder, Star } from "lucide-react";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "About", link: "/about", icon: <Search /> },
            { name: "Projects", link: "/", icon: <Folder /> },
            { name: "Contact", link: "/contact", icon: <User /> },
            { name: "Testmonial", link: "/", icon: <Star /> },
          ]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
