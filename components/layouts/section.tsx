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
    <section id={id} className={cn("md:py-20", className)}>
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
  textClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  inlineTitle?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  textClassName,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
  inlineTitle = false,
}: SectionHeadingProps) {
  const lines = Array.isArray(title) ? title : [title];

  return (
    <div
      className={cn(
        "mb-9 max-w-[600px] md:mb-[52px]",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "text-trim mb-4 block font-primary text-[10px] font-semibold uppercase leading-5 tracking-[1.5px] text-body md:mb-7 md:text-[11px] md:leading-7 md:tracking-[2px]",
            textClassName,
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </span>
      ) : null}

      <h2
        aria-label={lines.join(" ")}
        className={cn(
          "text-trim font-secondary text-[30px] font-normal leading-[34px] tracking-[-0.5px] text-heading md:text-[44px] md:leading-[47px] md:tracking-[-1px]",
          textClassName,
          titleClassName,
        )}
      >
        {lines.map((line, i) => (
          <span key={i}>
            {i > 0 && (inlineTitle ? " " : <br />)}
            {line}
          </span>
        ))}
      </h2>

      {description ? (
        <p
          className={cn(
            "text-trim mt-5 font-primary text-sm leading-[22px] tracking-normal text-body md:mt-9 md:text-base md:leading-6",
            textClassName,
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}