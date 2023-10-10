export default function OmicsHome() {
  return (
    <div className="flex w-full flex-row bg-[url]">
      <div className="relative w-full">
        <video autoPlay playsInline muted loop className="w-full">
          <source
            src={"https://cdn.servatom.com/external/OmicsML/bg1_compressed.mp4"}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>
    </div>
  );
}
