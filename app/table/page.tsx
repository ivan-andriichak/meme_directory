import { MemeTable } from "@/components/MemeTable";

export default function TablePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-900">
      <div className="text-3xl font-bold mb-4 text-gray-900 dark:text-amber-100">
        Meme Table
      </div>
      <MemeTable />
    </div>
  );
}
