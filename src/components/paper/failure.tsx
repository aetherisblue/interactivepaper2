import type { ReactNode } from "react";

export function Failure({
  id,
  n,
  title,
  tried,
  failed,
  lesson,
}: {
  id: string;
  n: string;
  title: string;
  tried: ReactNode;
  failed: ReactNode;
  lesson: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="relative pl-6 sm:pl-8">
        <span
          className="absolute top-2 left-0 size-2.5 rounded-full bg-fail"
          aria-hidden
        />
        <span
          className="absolute top-5 bottom-0 left-[4px] w-px bg-rule"
          aria-hidden
        />
        <h3 className="font-serif text-xl font-medium text-ink sm:text-2xl">
          <span className="mr-2 font-sans text-sm font-medium text-fail tabular-nums">
            {n}
          </span>
          {title}
        </h3>
        <div className="paper-prose mt-4 pr-0 pb-10 sm:pr-4">
          <h4 className="mb-2 font-sans text-xs font-medium tracking-wide text-muted uppercase">
            What was tried
          </h4>
          {tried}
          <div className="my-5 rounded-lg bg-paper-2 px-4 py-4 sm:px-5">
            <h4 className="mb-2 font-sans text-xs font-medium tracking-wide text-fail uppercase">
              Why it failed
            </h4>
            <div className="[&_p]:mb-0">{failed}</div>
          </div>
          <h4 className="mb-2 font-sans text-xs font-medium tracking-wide text-muted uppercase">
            What it left
          </h4>
          {lesson}
        </div>
      </div>
    </section>
  );
}
