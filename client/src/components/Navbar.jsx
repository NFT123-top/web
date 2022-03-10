
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
import logo from "../../img/logo.svg"

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
    item.current ? "bg-gray-800 text-white" : "text-yellow-600", "px-3 rounded-md")}
    aria-current={item.current ? 'page' : undefined}>{item.name}</a>
);

const Navbar = () => {
  return (
    <nav className="flex-1 flex justify-between items-center m-4">
      <div className="flex-shrink-0 flex items-center">
        <img className="block h-20 w-auto" src={logo} alt="nft123.top" />
        <p className="font-extrabold text-yellow-600">NFT123</p>
      </div>
      <ul className="hidden sm:flex space-x-2">
        {/* add key index is resolve warning */}
        {navigation.map((item, index) => ( <NavbarItem  key={index} item={item}></NavbarItem>))}
        <button className=" bg-sky-400 text-white rounded-full text-xl cursor-pointer
          hover:bg-sky-700 hover:-translate-y-1 transform transition font-semibold  px-3 ">APP</button>
      </ul>
    </nav>
  )
}

export default Navbar;