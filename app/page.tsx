import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from './components/fadein';

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* PROFILE SECTION */}
      <FadeInSection>
      <section id="profile" className="min-h-screen flex items-center justify-center px-4 py-20 -mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className=" relative  overflow-hidden">
            <Image
              src="/images/j2-hover.jpeg"
              alt="Jake profile"
              width={400}
              height={450}
              className="object-cover"
              priority
            />
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-gray-600 mb-2 text-base">Hello, There</p>
            <div className="mb-4">
              <span className="text-2xl">I'm </span>
              <h1 className="text-5xl font-bold inline">Jake</h1>
            </div>
            <p className="text-xl text-gray-700 mb-6">Student Developer</p>
            
            <div className="mb-6">
              <Link 
                href="#about"
                className="px-6 py-3 bg-black text-white rounded-full border border-black hover:bg-white hover:text-black transition-colors inline-block"
              >
                About Me
              </Link>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/jake-pacificador-8ab17b330/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/linked.png" alt="LinkedIn" width={40} height={40} className="hover:opacity-80 transition-opacity cursor-pointer" />
              </a>
              <a href="https://github.com/jakepaci" target="_blank" rel="noopener noreferrer">
                <Image src="/images/gitt.png" alt="GitHub" width={40} height={40} className="hover:opacity-80 transition-opacity cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/jakepacii_/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/ig.png" alt="Instagram" width={40} height={40} className="hover:opacity-80 transition-opacity cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* ABOUT SECTION */}
      <FadeInSection delay={700}>
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Welcome to my nerdy side of the internet</h1>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="text-center md:text-left text-base sm:text-lg leading-relaxed text-black">
                Hi! Welcome to my nerdy side of the internet. <br />
                I'm <strong>Jake Edmund,</strong> but you can call me <strong>"J."</strong> I'm a 20-year-old{' '}
                <strong>Software Engineering</strong> and <strong>Computer Science</strong> student of{' '}
                <strong className="text-yellow-600">Central Philippine University.</strong>
                {' '}I have a deep passion for technology and love exploring how things work. 
                Whether it's coding, software development, or the latest tech trends, I'm always eager to learn and discover more. 
                I'm also into music and sports; that's my way of escaping reality. It's either I'm vibing with my playlists or shooting some hoops.
                {' '}<strong>Though I'm still honing my programming skills, I'm dedicated to learning every day, gearing up to become your full-stack developer.</strong>
              </p>
            </div>
            
            <div className=" relative rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/images/j.png"
                alt="Jake profile"
                width={300}
              height={350}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* TECH SECTION */}
      <FadeInSection delay={700}>
      <section id="tech" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Tech</h1>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center items-center -mt-18">
              <Image
                src="/images/laptop.jpeg"
                alt="Laptop"
              width={400}
              height={450}
                className="rounded-lg object-contain"
              />
            </div>
            
            <div className="flex-1">
              <p className="text-center lg:text-left text-base sm:text-lg leading-relaxed text-black mb-8">
                So, in my journey as a <strong>Software engineer</strong> and a <strong>Computer science</strong> student, 
                I've gained experience in various programming languages, including <strong>JavaScript</strong>, <strong>TypeScript</strong>,{' '}
                <strong>Python</strong>, and framework such as <strong>React</strong>. Though I'm not at an expert level yet, 
                I'm passionate about learning and excited to tackle new challenges that help me grow in the field. 
                Additionally, I have experience with <strong>HTML</strong> and <strong>CSS</strong> for <strong>web development</strong>, 
                allowing me to create dynamic and visually appealing websites.
              </p>
          
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">Overall Progress</span>
                  <span className="text-sm font-semibold text-gray-700">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>

              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Image src="/images/html.jpeg" alt="HTML/CSS" width={40} height={40} />
                      <span className="text-sm font-medium text-gray-700">HTML/CSS</span>
                    </div>
                    <span className="text-sm text-gray-600">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Image src="/images/js.png" alt="JavaScript" width={24} height={24} />
                      <span className="text-sm font-medium text-gray-700">JavaScript</span>
                    </div>
                    <span className="text-sm text-gray-600">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Image src="/images/tss.png" alt="TypeScript" width={24} height={24} />
                      <span className="text-sm font-medium text-gray-700">TypeScript</span>
                    </div>
                    <span className="text-sm text-gray-600">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Image src="/images/py.png" alt="Python" width={24} height={24} />
                      <span className="text-sm font-medium text-gray-700">Python</span>
                    </div>
                    <span className="text-sm text-gray-600">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Image src="/images/react.png" alt="React" width={24} height={24} />
                      <span className="text-sm font-medium text-gray-700">React</span>
                    </div>
                    <span className="text-sm text-gray-600">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>


<section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
  <div className="max-w-6xl mx-auto">
    <h1 className="text-4xl font-bold text-center mb-4">Projects</h1>
    <p className="text-center text-gray-600 mb-12">Here are some of the projects I've worked on</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Halmeoni*/}
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
        <div className="h-48 relative flex items-center justify-center">
          <Image
        src="/images/halmeoni.jpeg"  
        alt="Halmeoni Project"
        fill                       
        className="object-cover"
      />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Halmeoni</h3>
          <p className="text-gray-600 mb-4">
            A mockup e-commerce website for a restaurant. Created for a friend from Ateneo de Manila University, featuring a modern design and user-friendly interface.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">HTML/CSS</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">E-commerce</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">UI/UX</span>
          </div>
          <a 
            href="https://halmeoni.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Project →
          </a>
        </div>
      </div>

      {/*UniHub*/}
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
        <div className="h-48 relative flex items-center justify-center">
          <Image
        src="/images/unihub.jpeg"  
        alt="Halmeoni Project"
        fill                       
        className="object-cover"
      />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">UniHub</h3>
          <p className="text-gray-600 mb-4">
            An e-commerce platform exclusively designed for university students. Part of our startup initiative to connect students with campus-specific services and products.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Startup</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">E-commerce</span>
          </div>
          <a 
            href="https://gilded-madeleine-e7860b.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Project →
          </a>
        </div>
      </div>

      {/*Valentine's*/}
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
        <div className="h-48 bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
          <span className="text-6xl">💝</span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Valentine's Survey</h3>
          <p className="text-gray-600 mb-4">
            A creative and interactive survey website I built to ask someone special out on Valentine's Day. Features fun animations and a unique user experience.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">HTML/CSS</span>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Creative</span>
          </div>
          <a 
            href="https://softwaresurveyy.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CONTACT SECTION */}
      <FadeInSection delay={700}>
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 mb-2">Get in Touch</p>
          <h1 className="text-4xl font-bold mb-12">Let's Turn Your Ideas into Reality</h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="w-80 h-80 relative rounded-lg overflow-hidden">
              <Image
                src="/images/call.jpeg"
                alt="Contact me"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="border bborder-black rounded-lg p-6 shadow-md bg-white flex">
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="flex items-center gap-4">
                <Image src="/images/linked.png" alt="LinkedIn" width={40} height={40} />
                <a 
                  href="https://www.linkedin.com/in/jake-pacificador-8ab17b330/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <Image src="/images/gmail.png" alt="Gmail" width={40} height={40} />
                <a 
                  href="mailto:jakepaci@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  jakepaci@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <Image src="/images/ig.png" alt="Instagram" width={40} height={40} />
                <a 
                  href="https://www.instagram.com/jakepacii_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  jakepacii_
                </a>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>
    </div>
  );
}