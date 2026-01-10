import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-(--primary-bg)">
      <div className="grid grid-cols-1 min-[1200px]:grid-cols-[300px_1fr_1fr]">
        <div className="col-span-1 border-b border-(--border-color) border-r">
          Welcome to my portfolio
        </div>
        <div className="col-span-1 flex justify-between items-center border-b border-(--border-color) px-6">
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
        </div>
        <div className="col-span-1">
          <div className="flex justify-end items-center">
            <button className="text-[10px] font-medium text-white">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
