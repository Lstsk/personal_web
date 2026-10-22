import { Row, RowTop } from "@/components/row";
import { DATA } from "@/data/resume";

export const metadata = {
  title: "Resume",
  description: "Where Carson has worked and studied.",
};

export default function ResumePage() {
  return (
    <main className="flex flex-col gap-10">
      <section className="flex flex-col gap-1">
        <h2 className="mb-3 font-mono text-[13px] tracking-[0.02em] text-muted-foreground">
          work
        </h2>
        {DATA.work.map((job) => (
          <Row key={`${job.company}-${job.title}`} href={job.href}>
            <RowTop>
              <span className="font-mono">
                {job.company}{" "}
                <span className="text-muted-foreground">· {job.title}</span>
              </span>
              <span className="whitespace-nowrap font-mono text-sm text-muted-foreground">
                {job.dates}
              </span>
            </RowTop>
          </Row>
        ))}
      </section>

      <section className="flex flex-col gap-1">
        <h2 className="mb-3 font-mono text-[13px] tracking-[0.02em] text-muted-foreground">
          education
        </h2>
        {DATA.education.map((school) => (
          <Row key={school.school} href={school.href}>
            <RowTop>
              <span className="font-mono">
                {school.school}{" "}
                <span className="text-muted-foreground">· {school.degree}</span>
              </span>
              <span className="whitespace-nowrap font-mono text-sm text-muted-foreground">
                {school.dates}
              </span>
            </RowTop>
          </Row>
        ))}
      </section>
    </main>
  );
}
