import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/floating-navbar';

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <FloatingNav
        navItems={[
          { name: 'About', link: '/about' },
          { name: 'Projects', link: '/' },
          { name: 'Contact', link: '/contact' },
          { name: 'Testmonials', link: '/' },
        ]}
      />
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
