import { useTranslations } from "next-intl";
import Link from "next/link";
import { locale } from "next/root-params";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const n = useTranslations("navbar");
  return (
    <div className="flex justify-between items-center ">
      <h1>{n("logo")}</h1>
      <nav className="flex gap-4 items-center">
        <ul className="flex gap-4 items-center">
          <li>
            <Link href={`${locale}/`}>{n("menu.home")}</Link>
          </li>
          <li>
            <Link href={`${locale}/`}>{n("menu.about")}</Link>
          </li>
          <li>
            <Link href={`${locale}/`}>{n("menu.service")}</Link>
          </li>
          <li>
            <Link href={`${locale}/`}>{n("menu.contact")}</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-5">
        <LanguageSwitcher />
        <button>{n("btn")}</button>
      </div>
    </div>
  );
};

export default Navbar;
