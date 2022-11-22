import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Logo160.svg";

const Header = () => {
  return (
    <header className="w-full h-[10vh] py-4 relative">
      <div className="container flex justify-between items-center m-auto">
        <Link href="/">
          <Image src={Logo} alt="Zain Mhrez" className="w-6 sm:w-8" />
        </Link>
        <button className="p-2 bg-primary rounded-2xl text-sm font-bold text-slate-900">
          <Link
            href="https://drive.google.com/file/d/1AG-rkYvyweezQjCGlW9q09cEUy23BnxO/view?usp=sharing"
            target="_blank"
          >
            My Resume
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
