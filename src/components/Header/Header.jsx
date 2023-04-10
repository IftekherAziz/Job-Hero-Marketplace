import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Statistics", href: "/statistics" },
  { name: "Applied Job", href: "/applied-job/" },
  { name: "Blog", href: "/blog" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="custom_bg">
      <nav
        className="container mx-auto  max-w-7xl flex items-center justify-between p-6  sm:px-8 md:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <h2 className="h-6 w-auto font-bold text-3xl">
              JobHero
            </h2>
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              to={item.href}
              key={item.name}
              href={item.href}
              className={({ isActive }) =>
                isActive
                  ? "text-sm font-semibold leading-6 text-indigo-400 hover:text-indigo-500"
                  : "text-black"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className=" rounded-md my_btn px-3 py-3 text-sm font-semibold text-white">
            <NavLink to="/">Start Applying</NavLink>
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <h2 className="h-6 w-auto font-bold text-3xl ">
                JobHero
              </h2>
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
                {navigation.map((item) => (
                  <NavLink
                    to={item.href}
                    key={item.name}
                    href={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? "-mx-3 block rounded-lg px-3 py-2 text-base first-line:font-semibold leading-6 text-indigo-400"
                        : "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50 "
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <button className=" rounded-md bg-indigo-400 px-3 py-3 text-sm font-semibold text-white">
                  <NavLink to="/">Start Applying</NavLink>
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
