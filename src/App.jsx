import reactLogo from "./assets/dndnew_rm.png";
import { Popover } from "@headlessui/react";
import Contact from "./components/Contact";
import Offering from "./components/Offering";
import Testimonial from "./components/Testimonial";
import Team from "./components/Team";

function App() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Popover as="header" className="relative">
          <div className="bg-gray-900 pt-6">
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <img
                      className="h-10 w-auto sm:h-12"
                      src={reactLogo}
                      alt=""
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      {/* <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                    </Popover.Button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </Popover>
        <main>
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-7 xl:text-7xl pb-3 sm:pb-5">
                      <span className="block">D&DNew Kft.</span>
                      {/* <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                        Dream. Work. Achieve.
                      </span> */}
                    </h1>
                    <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                      Egy olyan csapat vagyunk, amely az ügyfeleink számára
                      hatékony és megbízható megoldásokat nyújt.
                    </p>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src={reactLogo}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Feature section with grid */}
          <Offering />

          {/* Testimonial section */}
          <Testimonial />

          {/* Blog section */}
          {/* <Blog /> */}
          {/* Logo cloud section */}
          {/* <Logos /> */}
          <Team />
          {/* CTA Section */}
          {/* <div className="relative bg-gray-900">
            <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                alt=""
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
              />
            </div>
            <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                  Award winning support
                </h2>
                <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                  We’re here to help
                </p>
                <p className="mt-3 text-lg text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  egestas tempus tellus etiam sed. Quam a scelerisque amet
                  ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                  quisque ut interdum tincidunt duis.
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                    >
                      Visit the help center
                      <ExternalLinkIcon
                        className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <Contact />
        </main>
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
          <div className="max-w-md mx-auto px-4 sm:max-w-7xl sm:px-6 lg:px-8">
            <div className="mt-12 border-t border-gray-200 py-8">
              <p className="text-base text-gray-400 xl:text-right">
                {/* &copy; 2020 Deutsch Gábor */}
                @2020 Deutsch Gábor
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
