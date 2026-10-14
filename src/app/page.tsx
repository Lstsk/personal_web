import { Row, RowTop } from "@/components/row";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Markdown from "react-markdown";

const featured = DATA.projects.filter((project) => project.featured);

export default function Page() {
  return (
    <main className="flex flex-col gap-[52px]">
      <section className="flex flex-wrap items-start gap-7">
        <div className="flex min-w-0 flex-[999_1_380px] flex-col gap-[18px]">
          <Markdown
            components={{
              p: ({ children }) => <p>{children}</p>,
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="border-b transition-colors hover:border-primary hover:text-primary"
                >
                  {children}
                </a>
              ),
            }}
          >
            {DATA.intro.join("\n\n")}
          </Markdown>
        </div>
        <Image
          src={DATA.avatarUrl}
          alt={`Illustrated portrait of ${DATA.name}`}
          width={104}
          height={104}
          className="size-[104px] rounded-sm border object-cover"
          priority
        />
      </section>

      <section className="-mx-5 flex flex-col gap-2 rounded bg-secondary px-5 py-5">
        <div className="flex items-baseline justify-between gap-5">
          <h2 className="text-[13px] uppercase tracking-[0.12em] text-muted-foreground">
            Now
          </h2>
          <span className="text-[13px] text-muted-foreground">
            updated {DATA.now.updated}
          </span>
        </div>
        {DATA.now.lines.map((line) => (
          <p key={line.label}>
            {line.label} <span className="text-muted-foreground">— {line.text}</span>
          </p>
        ))}
      </section>

      <section className="flex flex-col gap-1">
        <h2 className="mb-3 text-[13px] uppercase tracking-[0.12em] text-muted-foreground">
          Selected projects
        </h2>
        {featured.map((project) => (
          <Row key={project.title} href={project.href}>
            <RowTop>
              <span>{project.title}</span>
              <span className="whitespace-nowrap text-muted-foreground">
                {project.dates}
              </span>
            </RowTop>
            <span className="text-muted-foreground">{project.short}</span>
          </Row>
        ))}
        <Row href="/projects" className="text-primary">
          <RowTop>
            <span>All projects</span>
            <span>→</span>
          </RowTop>
        </Row>
      </section>
    </main>
  );
}
