import Navbar from "@/components/Navbar";

export default function OmicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-row max-h-screen overflow-hidden w-full`}>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col p-16 overflow-y-scroll ">
        {children}
      </main>
    </div>
  );
}
