import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";

function Header() {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          ></Image>
        </Link>
        <nav className="hidden sm:block">
          {/*Nav Items */}
          <NavItems></NavItems>
        </nav>
        {/*user drop down */}
        <UserDropdown></UserDropdown>
      </div>
    </header>
  );
}
export default Header;
