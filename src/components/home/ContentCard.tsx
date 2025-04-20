export function ContentCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="shadow-md border-1 bg-[#fff] dark:bg-[#181818] border-[#d5d5d5] dark:border-[#2d2d2d] w-full md:w-[640px] rounded-none md:rounded-3xl">
      {children}
    </div>
  )
}
