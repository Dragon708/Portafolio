import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 dark:text-[#ADB7BE]  text-black sm:text-xl rounded md:p-0 dark:hover:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-400 hover:to-secondary-600">
      {title}
    </Link>
  );
};

export default NavLink;
