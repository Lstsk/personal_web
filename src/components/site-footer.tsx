import { LocalTime } from "@/components/local-time";
import { ThemeToggle } from "@/components/theme-toggle";
import { DATA } from "@/data/resume";

// Evaluated at build time, so it moves whenever the site is deployed.
const LAST_UPDATED = new Date().toLocaleDateString("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export function SiteFooter() {
  return (
    <footer className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t pt-7 font-mono text-sm text-muted-foreground">
      <div className="flex flex-col gap-1.5">
        <span className="flex flex-wrap gap-4">
          {DATA.social
            .filter((link) => link.url)
            .map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="border-b transition-colors hover:border-primary hover:text-primary"
              >
                {link.name}
              </a>
            ))}
        </span>
        <LocalTime place={DATA.location} timeZone={DATA.timeZone} />
      </div>
      <div className="flex flex-col items-end gap-1.5 text-right">
        <ThemeToggle />
        <span>last updated {LAST_UPDATED}</span>
      </div>
    </footer>
  );
}
