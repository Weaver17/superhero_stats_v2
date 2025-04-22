import Link from "next/link";
import { Button } from "./ui/button";
import {
  getKindeServerSession,
  LogoutLink,
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import FooterSignature from "./footer/signature";

async function Footer() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();

  const user = await getUser();

  const userSlug = (user?.username ?? "").toLowerCase().replace(/\s+/g, "-");

  return (
    <footer className="px-20 py-10 border-t border-secondary">
      <div className="flex justify-between">
        <div className="flex flex-col gap-0.5 md:gap-1 lg:gap-2">
          <Link href="/custom-hero/all">
            <Button className=" p-0 md:p-0 lg:p-0" variant="link">
              Custom Heroes
            </Button>
          </Link>
          {isLoggedIn ? (
            <>
              <Link href={`/user/${userSlug}`}>
                <Button className=" p-0 md:p-0 lg:p-0" variant="link">
                  {user?.username}
                </Button>
              </Link>
              <Link href="/create-a-hero">
                <Button className=" p-0 md:p-0 lg:p-0 " variant="link">
                  Create-A-Hero
                </Button>
              </Link>

              <LogoutLink>
                {" "}
                <Button className=" p-0 md:p-0 lg:p-0 " variant="link">
                  Log Out
                </Button>
              </LogoutLink>
            </>
          ) : (
            <>
              <LoginLink>
                <Button className=" p-0 md:p-0 lg:p-0 " variant="link">
                  Sign In
                </Button>
              </LoginLink>

              <RegisterLink>
                <Button className=" p-0 md:p-0 lg:p-0 " variant="link">
                  Sign Up
                </Button>
              </RegisterLink>
            </>
          )}
        </div>
        <div className="hidden mt-auto md:block ">
          <FooterSignature />
        </div>
        <ul className="flex flex-col items-end gap-0.5 md:gap-1 lg:gap-2">
          <li>
            <Link
              target="_blank"
              href="https://github.com/Weaver17/superhero_stats_v2"
            >
              <Button className=" p-0 md:p-0 lg:p-0 " variant="link">
                GitHub
              </Button>
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/andrew-weaver-1725-profile/"
            >
              <Button className=" p-0 md:p-0 lg:p-0 " variant="link">
                My LinkedIn
              </Button>
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://andrew-weaver-portfolio.vercel.app/"
            >
              <Button className=" p-0 md:p-0 lg:p-0 " variant="link">
                My Portfolio
              </Button>
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://kinde.com/">
              <Button className=" p-0 md:p-0 lg:p-0 " variant="link">
                Kinde
              </Button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 md:hidden">
        <FooterSignature />
      </div>
    </footer>
  );
}

export default Footer;
