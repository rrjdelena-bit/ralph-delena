import Image from "next/image";
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
        </div>
        <div>
            <ul className="group/list">

            <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-slate-300 
                        group/link text-base" href="https://apicenter.io/" target="_blank" rel="noreferrer noopener" aria-label="Build a Spotify Connected App (opens in a new tab)">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>Wrote the Reelezee Integration for &nbsp;
                            <span className="inline-block">Apicenter<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            </span>
                        </span>
                        </a>
                    </h3>

                        <p className="mt-2 text-sm leading-normal">
                        As a backend developer at APIcenter, I built a secure integration for Reeleezee, enabling seamless synchronization of orders, stock, products, and customer data. This solution improved efficiency, accuracy, and real-time data management.
                        </p>

                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Laravel</div>
                            </li>
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">REST API</div>
                            </li>
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Integration</div>
                            </li>
                        </ul>
                    </div>
                    <Image
                        alt="Build a Spotify Connected App Newline course marketing card"
                        loading="lazy"
                        width={200}
                        height={100}
                        decoding="async"
                        data-nimg="1"
                        className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        style={{ color: "transparent" }}
                        src="/images/port/a.jpg"
                    />

                    </div>
            </li>

            <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-slate-300 
                        group/link text-base" href="https://ralphdelena-visuals.com/" target="_blank" rel="noreferrer noopener" aria-label="Build a Spotify Connected App (opens in a new tab)">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>RD Visuals &nbsp;
                            <span className="inline-block">Website<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            </span>
                        </span>
                        </a>
                    </h3>

                        <p className="mt-2 text-sm leading-normal">
                        designed and developed Ralph DeLena Visuals, a sleek and visually engaging website for my photography side business, showcasing my portfolio in a clean, professional, and responsive interface. The site blends elegant aesthetics with intuitive navigation, creating an immersive experience that highlights both my creative style and technical expertise.
                         </p>

                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">PHP</div>
                            </li>
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Graph API</div>
                            </li>
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">HTML</div>
                            </li>
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">CSS</div>
                            </li>
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Javascript</div>
                            </li>
                        </ul>
                    </div>
                    <Image
                        alt="Build a Spotify Connected App Newline course marketing card"
                        loading="lazy"
                        width={200}
                        height={100}
                        decoding="async"
                        data-nimg="1"
                        className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        style={{ color: "transparent" }}
                        src="/images/port/b.jpg"
                    />

                </div>
            </li>

                

            <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-slate-300  group/link text-base"  aria-label="Build a Spotify Connected App (opens in a new tab)">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>Design and Develop Web Application, Heegus &nbsp;
                            <span className="inline-block">App<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            </span>
                        </span>
                        </a>
                    </h3>

                        <p className="mt-2 text-sm leading-normal">
                        I independently developed Heegus, an online job posting platform, utilizing Laravel, JavaScript, and a well-structured database design. The system delivers a secure backend and an intuitive interface, ensuring efficient job listings and seamless application management.
                        </p>

                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Design & Development</div>
                            </li>
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Laravel</div>
                            </li>
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Database</div>
                            </li>
                        </ul>
                    </div>
                    <Image
                        alt="Build a Spotify Connected App Newline course marketing card"
                        loading="lazy"
                        width={200}
                        height={100}
                        decoding="async"
                        data-nimg="1"
                        className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        style={{ color: "transparent" }}
                        src="/images/port/c.jpg"
                    />

                    </div>
                </li>

                <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-slate-300  group/link text-base"  aria-label="Build a Spotify Connected App (opens in a new tab)">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>Landing Page for Pest in Peace &nbsp;
                            <span className="inline-block">Website<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            </span>
                        </span>
                        </a>
                    </h3>

                        <p className="mt-2 text-sm leading-normal">
                        The Pest in Peace website features a clean, user-friendly design that highlights its pest control services with clear navigation and trust-building details. It balances professionalism and accessibility to give visitors confidence and easy access to solutions.
                        </p>

                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">HTML</div>
                            </li>
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Materialize CSS</div>
                            </li>
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Javascript</div>
                            </li>
                        </ul>
                    </div>
                    <Image
                        alt="Build a Spotify Connected App Newline course marketing card"
                        loading="lazy"
                        width={200}
                        height={100}
                        decoding="async"
                        data-nimg="1"
                        className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        style={{ color: "transparent" }}
                        src="/images/port/d.jpg"
                    />

                    </div>
                </li>

                <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-slate-300  group/link text-base"  aria-label="Build a Spotify Connected App (opens in a new tab)">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>3GX Hulugan &nbsp;
                            <span className="inline-block">Web Portal<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            </span>
                        </span>
                        </a>
                    </h3>

                        <p className="mt-2 text-sm leading-normal">
                        3GX Hulugan is an installment app in Naga City, Philippines, that makes shopping easier by offering flexible payment plans. It allows users to browse products, apply for installments, and manage payments securely, giving the community greater convenience and financial flexibility.
                        </p>

                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Laravel</div>
                            </li>
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Javascript</div>
                            </li>
                            <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Database</div>
                            </li>
                        </ul>
                    </div>
                    <Image
                        alt="Build a Spotify Connected App Newline course marketing card"
                        loading="lazy"
                        width={200}
                        height={100}
                        decoding="async"
                        data-nimg="1"
                        className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        style={{ color: "transparent" }}
                        src="/images/port/e.jpg"
                    />

                    </div>
                </li>


            </ul>
        </div>
    </section>

    

  );
}