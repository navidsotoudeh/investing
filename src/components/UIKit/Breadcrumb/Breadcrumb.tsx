import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

interface Props {
  items: {
    label: string;
    href: string;
  }[];
}

export default function Breadcrumb({ items }: Props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2 text-gray-500">
        {items.map((item, index) => {
          return (
            <li key={item.href} className="flex items-center">
              <Link
                href={item.href}
                className="text-gray-500 hover:text-gray-600"
              >
                {item.label}
              </Link>
              {index !== items.length - 1 && (
                <FaChevronLeft className="mx-2" size="10" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
