"use client";

import { useEffect, useState } from "react";

export function LocalTime({
  place,
  timeZone,
}: {
  place: string;
  timeZone: string;
}) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <span className="text-[13px]">
      {place}
      {time ? ` · ${time}` : ""}
    </span>
  );
}
