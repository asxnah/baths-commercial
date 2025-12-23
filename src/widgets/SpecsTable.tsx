interface SpecsTableProps {
  specs: Record<string, string>;
}

export default function SpecsTable({ specs }: SpecsTableProps) {
  return (
    <div className="w-full">
      <dl className="divide-y divide-gray-200 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {Object.entries(specs).map(([key, value], index) => (
          <div
            key={key}
            className={`px-6 py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 ${
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            } transition-colors hover:bg-indigo-50/50`}
          >
            <dt className="text-sm font-bold text-gray-900 flex items-center gap-2">
              {key}
            </dt>
            <dd className="text-sm text-gray-700 font-medium sm:text-right">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
