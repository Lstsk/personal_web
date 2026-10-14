import { Row, RowTop } from "@/components/row";
import { DATA } from "@/data/resume";

export const metadata = {
  title: "Projects",
  description: "Things Carson has built.",
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col gap-10">
      <section className="flex flex-col gap-2">
        <h1 className="font-medium">Projects</h1>
        <p className="text-muted-foreground">
          Things I built, newest first. Most are open source.
        </p>
      </section>

      <section className="flex flex-col gap-1.5">
        {DATA.projects.map((project) => (
          <Row key={project.title} href={project.href}>
            <RowTop>
              <span>{project.title}</span>
              <span className="whitespace-nowrap text-muted-foreground">
                {project.dates}
              </span>
            </RowTop>
            <span className="block text-muted-foreground">
              {project.description}
            </span>
            <span className="block text-[13px] text-muted-foreground/80">
              {project.technologies.join(" · ")}
            </span>
          </Row>
        ))}
      </section>
    </main>
  );
}
