type WorkNavItem = {
  title: string;
  href: string;
};

type WorksNavMenuProps = {
  items: WorkNavItem[];
};

export function WorksNavMenu({ items }: WorksNavMenuProps) {
  return (
    <div className="group relative">
      <a href="#work" className="inline-block">
        мои работы
      </a>
      <div className="pointer-events-none absolute right-0 top-full z-50 pt-2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <ul className="min-w-[11rem] overflow-hidden rounded-[14pt] bg-neutral-200/90 py-1 sm:min-w-[12rem]">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block px-3 py-2 transition-colors hover:bg-neutral-300/60 sm:px-4"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
