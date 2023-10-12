import Link from "next/link";

const NAV_ITEMS = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Explore",
    path: "/omics",
  },
  {
    label: "Team",
    path: "/team",
  },
];

const TopNav: React.FC = () => {
  return (
    <nav className="px-8 py-6 flex flex-row justify-between items-center bg-primary-foreground text-card-foreground shadow-lg z-20">
      <span className="text-2xl font-semibold">
        Omics
        <span className="text-amber-300">ML</span>
      </span>
      <div className="flex flex-row gap-10">
        {NAV_ITEMS.map((item, idx) => (
          <Link
            key={idx}
            href={item.path}
            className="hover:underline decoration-amber-300 underline-offset-8 transition-all duration-300"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default TopNav;
