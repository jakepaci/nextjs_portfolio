import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          
        
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8 space-y-4 sm:space-y-0 pb-4">
            <Link 
              href="#tech" 
              className="text-black text-3xl underline decoration-transparent underline-offset-10 transition-colors hover:text-blue-700 hover:decoration-blue-700"
            >
              Tech
            </Link>
            <Link 
              href="#projects" 
              className="text-black text-3xl underline decoration-transparent underline-offset-10 transition-colors hover:text-blue-700 hover:decoration-blue-700"
            >
              Projects
            </Link>
            <Link 
              href="#about" 
              className="text-black text-3xl underline decoration-transparent underline-offset-10 transition-colors hover:text-blue-700 hover:decoration-blue-700"
            >
              About
            </Link>
          </div>

        
          <p className="text-gray-500 text-base text-center">
            Copyright © 2025 Jake Edmund
          </p>

        </div>
      </div>
    </footer>
  );
}
