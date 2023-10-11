import Image from "next/image";
import illustration from "@/assets/about2.png";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="flex w-full flex-col p-12 pl-16 bg-gradient-to-br to-slate-900 from-gray-800  h-full text-white">
      <h1 className="text-4xl font-semibold">About Us</h1>
      <Separator className="my-4 bg-amber-300 w-1/3" />
      <div className="flex flex-row gap-6 mt-4 mb-8">
        <p className="w-2/3 text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
          veritatis illo nihil voluptates! Cum maiores cumque, vitae tempora
          sint minus vero ut nulla libero, aliquam architecto facilis possimus
          eveniet at voluptates maxime, quis quam exercitationem eligendi.
          Expedita laborum saepe excepturi. Laboriosam voluptas consequuntur
          molestias nihil distinctio architecto rerum ab fugit in
          exercitationem. Distinctio itaque culpa omnis fugiat, optio eligendi
          unde vitae libero architecto. Voluptates totam error similique maxime
          sequi veritatis omnis eos, praesentium vero! Ut nam delectus
          repudiandae qui tempora, magni aliquid quam deserunt ab porro sunt,
          dolorem, vitae beatae rem nostrum rerum quasi est! Aliquam maiores
          optio nesciunt, a dolorum error neque veniam quaerat aperiam sunt
          aliquid culpa officia quisquam quam ut incidunt vel iusto. Ipsa
          aliquam, tempora facere recusandae obcaecati repudiandae mollitia ex
          voluptate totam, consectetur laudantium sequi fugit quasi maxime eos.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ipsum
          consectetur quia laborum ut atque nisi, exercitationem natus
          voluptatum, provident voluptate quibusdam reprehenderit dolor quod non
          quam. Nemo provident vero laudantium quia omnis dolorum maiores,
          voluptates expedita quas impedit corporis repellendus fugit modi
          exercitationem, porro neque fugiat odio sed quaerat.
        </p>
        <Image
          alt="illustration"
          src={illustration}
          width={400}
          height={400}
          className="rotate-[15deg]"
        />
      </div>
    </div>
  );
}
