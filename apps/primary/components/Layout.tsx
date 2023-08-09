import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <div className={css.nav}>
          <Link href="/" className={css.homeLink}>
            Home
          </Link>
          <Link href="/about" className={css.navLink}>
            About
          </Link>
        </div>
        <div>
          <SignedOut>
            <Link href="/sign-in">Sign in</Link>
          </SignedOut>
          <SignedIn>
            <UserButton
              userProfileMode="navigation"
              userProfileUrl="/user"
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </header>
      <main className={css.main}>{children}</main>
    </div>
  );
}
