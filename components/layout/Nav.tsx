import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center border-b border-l border-(--border-color) -mx-6 px-6">
      <ul className="flex items-center gap-8">
        <li>
          <Link href="/" className="text-[10px] font-medium text-white">
            ilesh.info
          </Link>
        </li>
        <li>
          <Link href="/" className="text-[10px] font-medium text-white">
            work.done
          </Link>
        </li>
      </ul>
    </nav>
  );
}
