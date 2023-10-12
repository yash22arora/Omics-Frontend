import { ITeam } from "@/lib/types";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";

const TeamMember: React.FC<ITeam> = ({
  name,
  subtitle,
  image,
  linkedin,
  github,
}) => {
  return (
    <div className="flex flex-col gap-1 w-fit my-8">
      <div className="relative w-full">
        <Image
          src={image}
          alt={name}
          width={250}
          height={250}
          className="shadow-lg relative z-20 mx-auto opacity-90"
        />
        <div className="absolute border-2 border-r-4 border-t-4 border-amber-300 h-full -top-4 -right-6 w-full z-5"></div>
      </div>
      <div className="flex flex-row justify-between mt-3">
        <div className="flex flex-col">
          <h3 className="text-xl">{name}</h3>
          <h5 className="text-sm italic">{subtitle}</h5>
        </div>
        <div className="flex flex-row gap-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-full bg-secondary-foreground h-fit"
            >
              <Linkedin className=" text-secondary" size={16} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-full bg-secondary-foreground h-fit"
            >
              <Github size={16} className=" text-secondary" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
