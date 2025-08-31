
export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About Me">
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
      About
      </h2>
    </div>
    <div>
      <p className="mb-4">
      I am a dedicated Web Developer with a strong passion for writing clean, efficient code that transforms ideas into fully functional digital solutions. Skilled in both Frontend and Backend development, I have hands-on experience with 
      <span className="font-medium text-sky-200">
       &nbsp; HTML, CSS (Bootstrap & Tailwind), JavaScript (Vue.js, Next.js), PHP (Laravel), and REST API integration.
      </span>
      
      </p>

      <p className="mb-4">
      In addition to development, I bring expertise in <span className="font-medium text-sky-200">WordPress (Elementor Pro)</span>  for building and customizing websites, paired with a solid background in <span className="font-medium text-sky-200">Database Design</span> to ensure scalability, performance, and reliability.
    </p>

      <p className="mb-4">
      With a balance of technical proficiency and creative problem-solving, I am committed to delivering high-quality web solutions that enhance user experience and align with business goals.
   </p>
    </div>

  </section>
  );
}