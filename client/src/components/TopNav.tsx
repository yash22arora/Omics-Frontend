import Link from "next/link";

const TopNav: React.FC = () => {
  return (
    <nav className="px-8 py-6 flex flex-row justify-between items-center bg-primary-foreground text-card-foreground shadow-lg z-20">
      <span className="text-2xl font-semibold">
        Omics
        <span className="text-amber-300">ML</span>
      </span>
      <div className="flex flex-row gap-10">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/omics">Explore</Link>
        <Link href="/team">Team</Link>
      </div>
    </nav>
  );
};

export default TopNav;
