import { ThemeToggle } from "./ThemeToggle";

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-col gap-5 p-4 shadow-xl">
      <span className="text-2xl font-bold">OmicsML</span>
      <div className="justify-self-end">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
