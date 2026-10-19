import Link from "next/link";
import { cn } from "@/lib/utils";

const ROW =
  "-ml-3 block border-l-2 border-transparent px-3 py-2 transition-colors hover:border-primary hover:bg-accent";

export function Row({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cn(ROW, className)}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cn(ROW, className)}>
      {children}
    </a>
  );
}

export function RowTop({ children }: { children: React.ReactNode }) {
  return <span className="flex justify-between gap-6">{children}</span>;
}
