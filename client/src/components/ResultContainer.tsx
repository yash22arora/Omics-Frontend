import { cn } from "@/lib/utils";

const ResultContainer: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "bg-[hsl(var(--secondary))] rounded-md dark:opacity-60 min-h-96 max-h-96 overflow-scroll p-8 font-mono text-sm whitespace-pre",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ResultContainer;
