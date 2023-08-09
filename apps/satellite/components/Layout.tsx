import { PropsWithChildren, useEffect, useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import css from "./Layout.module.css";

const signInUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL;

type LayoutProps = PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => {
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    setRedirectUrl(window.location.host);
  }, []);

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
            <Link href={`${signInUrl}?redirect_url=https://${redirectUrl}`}>
              Sign in
            </Link>
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
};
