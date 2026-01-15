import { Navlinks } from "./Navbar";
import Link from "next/link";

interface MobileViewProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuOpen: boolean;
}

const MobileView = ({ menuOpen, setMenuOpen }: MobileViewProps) => {
  return (
    <div className="md:hidden">
      {/* overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* menu  */}
        <ul
          className={`fixed top-18 right-0 z-50 h-[80vh] w-full flex flex-col items-center justify-center gap-10 bg-secondary-background/80 backdrop-blur-xl border-t border-white/10 transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {Navlinks.map((elem) => (
            <li key={elem.url}>
              <Link
                href={elem.url}
                onClick={()=>setMenuOpen(false)}
                className="font-semibold text-xl tracking-wide
                    transition-colors text-gray-200 hover:text-indigo-400"
              >
                {elem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileView;
