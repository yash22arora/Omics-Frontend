export default function PreProcessingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="flex flex-col">
        <p>This is the PreProcessing page</p>
        {children}
      </main>
    </div>
  );
}
