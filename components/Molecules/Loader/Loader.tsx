export default function PageLoader() {
  return (
    <div className="absolute  flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
      {/* Circle GIF */}
      <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-[#3B2F2F] shadow-lg">
        <img
          src="/cat.gif"
          alt="Loading..."
          className="h-full w-full object-cover"
        />
      </div>

    
    </div>
  );
}
