import TeamMember from "@/components/TeamMember";
import { Separator } from "@/components/ui/separator";
import { TEAM } from "@/lib/constants";

export default function Team() {
  return (
    <div className="flex w-full flex-col p-12 pl-16 bg-gradient-to-br to-slate-900 from-gray-800 h-full text-white relative">
      <div className="inset-0 opacity-40 bg-gradient-to-tl from-transparent to-amber-300 absolute"></div>
      <h1 className="text-4xl font-semibold text-center">Our Team</h1>
      <Separator className="my-4 bg-amber-300 w-1/3 mx-auto" />
      <div className="flex flex-wrap justify-center flex-row gap-24 mx-auto my-20">
        {TEAM.map((member, index) => (
          <TeamMember {...member} key={index} />
        ))}
      </div>
    </div>
  );
}
