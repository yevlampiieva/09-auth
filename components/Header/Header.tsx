import Link from "next/link";
import TagsMenu from "../TagsMenu/TagsMenu";
import css from "./Header.module.css";
import AuthNavigation from "../AuthNavigation/AuthNavigation";

export default function Header() {
  const categories: string[] = [
    "Work",
    "Personal",
    "Meeting",
    "Shopping",
    "Todo",
    "Ideas",
    "Finance",
    "Travel",
    "Health",
    "Important",
  ];
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.headerLink}>
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li className={css.navigationItem}>
            <Link href="/" className={css.navigationLink}>
              Home
            </Link>
          </li>
          <AuthNavigation />
          <li className={css.navigationItem}>
            <TagsMenu tags={categories} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
