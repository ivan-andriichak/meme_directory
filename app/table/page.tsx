import { MemeTable } from "@/components/MemeTable";

export default function TablePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Meme Table
      </h1>
      <MemeTable />
    </div>
  );
}
