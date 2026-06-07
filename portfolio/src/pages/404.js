import Head from 'next/head';
import Link from 'next/link';
import { FiArrowLeft, FiAlertTriangle } from 'react-icons/fi';
import { profile } from '../data/projects';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404: Page Not Found | {profile.name}</title>
      </Head>

      <div className="bg-dark-bg text-text-primary min-h-screen flex flex-col items-center justify-center p-6 text-center">
        
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="z-10 space-y-6 max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-accent-red/10 border border-accent-red/20 flex items-center justify-center text-accent-red text-3xl mx-auto box-glow">
            <FiAlertTriangle />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-6xl font-display font-extrabold text-primary text-glow">404</h1>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary">System Overload: Page Not Found</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              The address you are trying to access does not exist or has been relocated within our directory mapping.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-dark-bg font-bold rounded-xl hover:bg-primary-light transition-all duration-300"
          >
            <FiArrowLeft /> Return Home
          </Link>
        </div>

      </div>
    </>
  );
}
