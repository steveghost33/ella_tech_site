import clsx from "clsx";
import { Link } from "react-router-dom";

const Arrow = () => (
  <svg
    className="btn-ella-arrow"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.25"
    strokeLinecap="square"
    aria-hidden="true"
  >
    <path d="M2 8h11M9 3.5 13.5 8 9 12.5" />
  </svg>
);

const Button = ({
  children,
  href,
  to,
  target,
  rel,
  containerClassName,
  onClick,
  ariaLabel,
}) => {
  const className = clsx("btn-ella group", containerClassName);

  if (to) {
    return (
      <Link className={className} to={to} aria-label={ariaLabel}>
        <span>{children}</span>
        <Arrow />
      </Link>
    );
  }

  if (href) {
    const safeRel = target === "_blank" ? rel || "noopener noreferrer" : rel;

    return (
      <a className={className} href={href} target={target} rel={safeRel} aria-label={ariaLabel}>
        <span>{children}</span>
        <Arrow />
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type="button" aria-label={ariaLabel}>
      <span>{children}</span>
      <Arrow />
    </button>
  );
};

export default Button;
