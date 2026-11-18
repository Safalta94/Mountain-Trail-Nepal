import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

export function Section({
  className,
  containerClassName,
  children,
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20", className)}>
      <div className={cn("container", containerClassName)}>{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string | string[];
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const lines = Array.isArray(title) ? title : [title];

  return (
    <div
      className={cn(
        "mb-[54px] max-w-[600px]",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-trim mb-7 block font-primary text-[11px] font-semibold uppercase leading-7 tracking-[2px] text-body">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="text-trim font-secondary text-[44px] font-normal leading-[47px] tracking-[-1px] text-heading">
        {lines.map((line, i) => (
          <span key={line}>
            {i > 0 && <br />}
            {line}
          </span>
        ))}
      </h2>

      {description ? (
        <p className="text-trim mt-9 font-primary text-base leading-6 tracking-normal text-body">
          {description}
        </p>
      ) : null}
    </div>
  );
}