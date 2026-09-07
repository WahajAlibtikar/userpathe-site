import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumbNav" aria-label="مسار التنقل">
      <ol className="breadcrumbList">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="breadcrumbItem">
              {item.href && !isLast ? (
                <Link href={item.href} className="breadcrumbLink">
                  {item.label}
                </Link>
              ) : (
                <span
                  className="breadcrumbCurrent"
                  aria-current={isLast ? "page" : undefined}
                  title={item.label}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="breadcrumbSep" aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
