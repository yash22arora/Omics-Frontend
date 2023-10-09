import { cn } from "@/lib/utils";

const ResultContainer: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "bg-[hsl(var(--secondary))] rounded-md dark:opacity-60 h-96",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ResultContainer;
