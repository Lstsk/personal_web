import Link from "next/link";

const NAV = [
  { href: "/projects", label: "projects" },
  { href: "/resume", label: "resume" },
  { href: "/blog", label: "blog" },
];

export function SiteHeader() {
  return (
    <header className="mb-14 flex flex-wrap items-baseline justify-between gap-4">
      <Link href="/" className="font-medium">
        carsonlin.dev
      </Link>
      <nav className="flex gap-5 text-muted-foreground">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="border-b transition-colors hover:border-primary hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
