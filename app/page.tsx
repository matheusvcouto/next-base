import { ModeToggleBotton } from "@/components/theme/toggle-theme";


export default function Home() {
  return (
    <main className="h-screen bg-white dark:bg-black p-6 flex flex-col">
      <div className="flex gap-8 w-full items-center justify-center min-h-full">
        <h1>Hello</h1>
        <ModeToggleBotton />
      </div>
    </main>
  )
}
