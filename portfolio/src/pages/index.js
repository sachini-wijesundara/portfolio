import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { profile } from '../data/projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>{profile.name} | Portfolio</title>
        <meta name="description" content={`${profile.name} - ${profile.title}. Specialized in building mobile apps, web solutions, and AI integrations.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-dark-bg text-text-primary min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
