import Link from "next/link";

function FooterSignature() {
  return (
    <div className="text-center">
      <p className="text-muted-foreground text-xs sm:text-sm">
        Developed by Andrew Weaver in 2025 with the help of{" "}
        <Link
          className="text-xs font-semibold text-secondary/80 hover:underline underline-offset-4 sm:text-sm"
          href="https://superheroapi.com/index.html"
          target="_blank"
        >
          SuperHero API
        </Link>
      </p>
    </div>
  );
}

export default FooterSignature;
