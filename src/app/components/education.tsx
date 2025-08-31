import Image from "next/image";


export default function Education() {
  return (
    <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Education</h2>
    </div>
    <div>
    <ul className="group/list">
        <li className="mb-12">
            <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <Image
                        alt="Build a Spotify Connected App Newline course marketing card"
                        loading="lazy"
                        width={200}
                        height={150}
                        decoding="async"
                        data-nimg="1"
                        className="object-cover z-10 col-span-2 rounded transition group-hover:border-slate-200/30 sm:col-span-2"
                        style={{ color: "transparent" }}
                        src="/images/PEP.png"
                    />

                <div className="z-10 col-span-6">
                    <p className="-mt-1 text-sm font-semibold leading-6">2016 - 2016
                    </p>
                    <h3 className="-mt-1">
                         <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>University of Nueva Caceres &nbsp;</span><br></br>
                            <span>Post-College</span><br></br>
                            <span>Professional Employment Program</span>
                        
                    </h3>
                </div>
            </div>
        </li>
        <li className="mb-12">
            <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <Image
                        alt="Build a Spotify Connected App Newline course marketing card"
                        loading="lazy"
                        width={200}
                        height={150}
                        decoding="async"
                        data-nimg="1"
                        className="object-cover z-10 col-span-2 rounded transition group-hover:border-slate-200/30 sm:col-span-2"
                        style={{ color: "transparent" }}
                        src="/images/unclogo.png"
                    />

                <div className="z-10 col-span-6">
                    <p className="-mt-1 text-sm font-semibold leading-6">2012 - 2016
                    </p>
                    <h3 className="-mt-1">
                         <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>University of Nueva Caceres &nbsp;</span><br></br>
                            <span>{`Bachelor's in Computer Science `}</span>
                        
                    </h3>
                </div>
            </div>
        </li>
    </ul>
    </div>
    </section>
  );
}