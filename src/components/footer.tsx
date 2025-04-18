import Link from "next/link";
import { Button } from "./ui/button";
import {
  getKindeServerSession,
  LogoutLink,
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

async function Footer() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();

  const user = await getUser();

  const userSlug = (user?.username ?? "").toLowerCase().replace(/\s+/g, "-");

  return (
    <footer className="px-20 py-10 border-t border-secondary flex justify-between">
      <div className="flex flex-col  gap-2">
        <Link href="/custom-hero/all">
          <Button variant="link">Custom Heroes</Button>
        </Link>
        {isLoggedIn ? (
          <>
            <Link href={`/user/${userSlug}`}>
              <Button variant="link">{user?.username}</Button>
            </Link>
            <Link href="/create-a-hero">
              <Button variant="link">Create-A-Hero</Button>
            </Link>

            <LogoutLink>
              {" "}
              <Button variant="link">Log Out</Button>
            </LogoutLink>
          </>
        ) : (
          <>
            <LoginLink>
              <Button variant="link">Sign In</Button>
            </LoginLink>

            <RegisterLink>
              <Button variant="link">Sign Up</Button>
            </RegisterLink>
          </>
        )}
      </div>
      <div className="mt-auto">
        <p className="text-muted-foreground">
          Developed by Andrew Weaver in 2025 with the help of{" "}
          <Link
            className="font-semibold text-secondary/80 hover:underline underline-offset-4"
            href="https://superheroapi.com/index.html"
            target="_blank"
          >
            SuperHero API
          </Link>
        </p>
      </div>
      <ul className="flex flex-col items-end gap-2">
        <li>
          <Link
            target="_blank"
            href="https://github.com/Weaver17/superhero_stats_v2"
          >
            <Button variant="link">View on GitHub</Button>
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/andrew-weaver-1725-profile/"
          >
            <Button variant="link">My LinkedIn</Button>
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://andrew-weaver-portfolio.vercel.app/"
          >
            <Button variant="link">My Portfolio</Button>
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://kinde.com/">
            <Button variant="link">Kinde</Button>
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
