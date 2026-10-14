import { LocalTime } from "@/components/local-time";
import { ThemeToggle } from "@/components/theme-toggle";
import { DATA } from "@/data/resume";

// Evaluated at build time, so it moves whenever the site is deployed.
const LAST_UPDATED = new Date().toLocaleDateString("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const GRID =
  "repeating-linear-gradient(to right, hsl(var(--border)) 0 1px, transparent 1px 14px), repeating-linear-gradient(to bottom, hsl(var(--border)) 0 1px, transparent 1px 14px)";

function Goban() {
  return (
    <div
      aria-hidden
      className="relative size-14 shrink-0 rounded-sm border bg-secondary"
      style={{ backgroundImage: GRID }}
    >
      <span className="absolute left-[7px] top-[21px] size-[11px] rounded-full bg-foreground" />
      <span className="absolute left-[21px] top-[7px] size-[11px] rounded-full bg-foreground" />
      <span className="absolute left-[35px] top-[35px] size-[11px] rounded-full border border-muted-foreground bg-background" />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t pt-7 text-muted-foreground">
      <div className="flex items-end gap-5">
        <Goban />
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
      </div>
      <div className="flex flex-col items-end gap-1.5 text-right">
        <ThemeToggle />
        <span className="text-[13px]">last updated {LAST_UPDATED}</span>
      </div>
    </footer>
  );
}
