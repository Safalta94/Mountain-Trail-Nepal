import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "glass";

type ButtonStyleProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  hideIcon?: boolean;
};

type NativeButtonProps = ButtonStyleProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type LinkButtonProps = ButtonStyleProps &
  Omit<ComponentProps<typeof Link>, "children" | "className" | "type"> & {
    href: string;
  };

type ButtonProps = NativeButtonProps | LinkButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  // Figma: fill #EE7209, gap 10px
  primary: "bg-primary text-white gap-[10px] focus-visible:outline-primary",

  // Figma: border 1px #FFFFFF 30%, gap 8px
  outline: "border border-white/30 text-white gap-2 focus-visible:outline-white",

  // Figma: fill #FFFFFF 16%, gap 8px
  glass: "bg-white/[0.16] text-white gap-2 focus-visible:outline-white",
};

function isLinkButton(props: ButtonProps): props is LinkButtonProps {
  return "href" in props && props.href !== undefined;
}

function getButtonClassName(variant: ButtonVariant, className: string) {
  return `group/button inline-flex p-[18px] shrink-0 select-none items-center justify-center
    cursor-pointer rounded-[55px] px-5
    font-primary text-base font-medium leading-4 tracking-[-0.32px] antialiased whitespace-nowrap
    outline-none focus-visible:outline-2 focus-visible:outline-offset-2
    active:translate-y-px
    disabled:pointer-events-none disabled:opacity-50
    ${variantClasses[variant]} ${className}`.replace(/\s+/g, " ");
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M6.79647 0.172935V1.93008C6.79647 2.02987 6.83985 2.12532 6.91578 2.19257L12.389 6.9412H0.173545C0.0780954 6.9412 0 7.0193 0 7.11475L0 8.41634C0 8.51179 0.0780954 8.58988 0.173545 8.58988H12.389L6.91578 13.3385C6.83985 13.4036 6.79647 13.499 6.79647 13.601V15.3581C6.79647 15.5057 6.97218 15.5859 7.08282 15.4883L15.3805 8.28835C15.4555 8.22326 15.5157 8.1428 15.557 8.05241C15.5983 7.96203 15.6196 7.86382 15.6196 7.76446C15.6196 7.66509 15.5983 7.56689 15.557 7.4765C15.5157 7.38611 15.4555 7.30565 15.3805 7.24057L7.08282 0.0427761C6.97001 -0.0548429 6.79647 0.0254221 6.79647 0.172935Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkButton({
  children,
  className = "",
  variant = "primary",
  hideIcon = false,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      data-slot="button"
      className={getButtonClassName(variant, className)}
      {...props}
    >
      {children}
      {!hideIcon && <ArrowIcon />}
    </Link>
  );
}

function NativeButton({
  children,
  className = "",
  type = "button",
  variant = "primary",
  hideIcon = false,
  ...props
}: NativeButtonProps) {
  return (
    <button
      data-slot="button"
      className={getButtonClassName(variant, className)}
      type={type}
      {...props}
    >
      {children}
      {!hideIcon && <ArrowIcon />}
    </button>
  );
}

export function Button(props: ButtonProps) {
  if (isLinkButton(props)) {
    return <LinkButton {...props} />;
  }

  return <NativeButton {...props} />;
}