import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";

export default function OmicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col w-full bg-slate-200 min-h-screen text-black`}
    >
      <TopNav />
      {children}
      <Footer />
    </div>
  );
}
