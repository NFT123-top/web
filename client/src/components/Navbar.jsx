
// const Navbar = () => {
//   return (
//     <div className=" bg-red-100 ">
//     </div>
//   );
// };

// export default Navbar;

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronUpIcon } from '@heroicons/react/solid'
import logo from "../../img/logo-white-sm.svg"

const navigation = [
  { name: 'Dashboard', href: '#', current: false },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: 'https://www.163.com/', current: false },
  { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
};

const NavbarItem = ({index, item }) => (
  <a key={index} href={item.href} className={classNames(
    item.current ? "bg-gray-800 text-white" : "text-white", "px-3 rounded-md")}
    aria-current={item.current ? 'page' : undefined}>{item.name}</a>
);

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex-1 flex justify-between items-center py-3 px-6">
        <div className="flex-shrink-0 flex items-center py-2 gap-1">
          <img className="block h-14 w-auto" src={logo} alt="nft123.top" />
          <p className="font-bold text-white">NFT123</p>
        </div>
        <ul className="hidden sm:flex items-center text-sm space-x-2">
          {/* add key index is resolve warning */}
          {navigation.map((item, index) => ( <NavbarItem  key={index} item={item}></NavbarItem>))}
          <button className="bg-white text-blue-600 rounded-full text-sm py-1 cursor-pointer
            hover:-translate-y-0.5 transform transition shadow-blue-800 px-3 "> START </button>
        </ul>
      </nav>
    </div>
        )
}

export default Navbar;