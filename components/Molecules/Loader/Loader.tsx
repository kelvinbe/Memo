// app/loading.tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FBF6EE]">
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#4B2E2E] border-t-transparent" />

        {/* Text */}
        <p className="font-serif text-[#4B2E2E] text-sm tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  );
}
