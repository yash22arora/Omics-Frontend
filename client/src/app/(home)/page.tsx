import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";

export default function OmicsHome() {
  return (
    <div className="flex w-full flex-row bg-[url]">
      <div className="relative w-full">
        <video autoPlay playsInline muted loop className="w-full">
          <source
            src={"https://cdn.servatom.com/external/OmicsML/bg2.mp4"}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-[0.75]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-7xl font-bold">
            Omics
            <span className="text-amber-300">ML</span>
          </h1>
          <h4 className="mt-1">
            Machine Learning for Omics Data Analysis Simplified
          </h4>
          <a
            href="/omics"
            className="px-8 py-3 bg-amber-300 text-black font-semibold shadow-xl rounded-sm mt-12"
          >
            Explore
          </a>
          <div className="mt-24 px-32 flex flex-row justify-between w-full">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="flex flex-row items-center gap-2 p-5 pl-6 bg-slate-900 rounded-sm bg-opacity-70 transition-all duration-300 hover:shadow-2xl hover:scale-110"
              >
                <span className="scale-[2] mr-2">{item.icon}</span>
                <span className="text-xl">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
