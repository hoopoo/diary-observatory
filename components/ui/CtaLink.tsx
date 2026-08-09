import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export type CtaVariant = "primary" | "secondary" | "ghost" | "text";
export type CtaSize = "sm" | "md" | "default";

const variantClass: Record<CtaVariant, string> = {
  primary: "cta cta-primary",
  secondary: "cta cta-secondary",
  ghost: "cta cta-ghost",
  text: "cta-text",
};

const sizeClass: Record<CtaSize, string> = {
  sm: "cta-sm",
  md: "cta-md",
  default: "",
};

type BaseProps = {
  children: ReactNode;
  variant?: CtaVariant;
  size?: CtaSize;
  className?: string;
  arrow?: boolean;
};

type LinkProps = BaseProps &
  Omit<ComponentProps<typeof Link>, "className" | "children"> & {
    href: string;
  };

type SpanProps = BaseProps & {
  href?: undefined;
};

function composeClass(
  variant: CtaVariant,
  size: CtaSize,
  className?: string,
) {
  return [
    "focus-ring",
    variantClass[variant],
    size !== "default" && sizeClass[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

/** Editorial CTA — secondary/ghost by default; never solid white fill. */
export function CtaLink({
  children,
  variant = "secondary",
  size = "default",
  className,
  arrow = false,
  ...rest
}: LinkProps | SpanProps) {
  const label = (
    <>
      {children}
      {arrow ? <span aria-hidden="true">→</span> : null}
    </>
  );

  const classes = composeClass(variant, size, className);

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {label}
      </Link>
    );
  }

  return <span className={classes}>{label}</span>;
}
