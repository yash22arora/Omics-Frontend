import Link from "next/link";
import { Separator } from "./ui/separator";
import { NAV_ITEMS } from "@/lib/constants";

const Footer: React.FC = () => {
  return (
    <div className="p-12 flex flex-row items-start bg-card text-card-foreground mt-auto">
      <div className="flex flex-col gap-4 h-full">
        <span className="text-2xl font-semibold">OmicsML</span>
        <span className="font-light">
          Machine Learning for Omics Data Analysis
        </span>
        <div className="flex flex-col gap-3 mt-auto">
          <span className="font-medium">Contact Us</span>
          <Separator className="w-64 -ml-1" />
          <div className="flex flex-col gap-2 my-2">
            <span className="font-light">
              Email :{" "}
              <a href="mailto:test@gmail.com" className="text-blue-500">
                test@gmail.com
              </a>
            </span>
            <span className="font-light">
              Phone :{" "}
              <a href="tel:+919876543210" className="text-blue-500">
                +919876543210
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-32 ml-auto mr-32 w-max">
        <div className="flex flex-col gap-7 w-full">
          <div className="flex flex-col gap-3">
            <span className="font-medium">Links</span>
            <Separator className="w-32 -ml-1" />
          </div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/omics">Explore</Link>
          <Link href="/team">Team</Link>
        </div>
        <div className="flex flex-col gap-7 w-full">
          <div className="flex flex-col gap-3">
            <span className="font-medium">Tools</span>
            <Separator className="w-32 -ml-1" />
          </div>
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} href={item.path} className="w-max">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
