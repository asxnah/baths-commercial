import Link from "next/link";
import Image from "next/image";
import { data } from "@data/baths";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Наши бани</h1>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((project) => (
          <Link key={project.id} href={`/baths/${project.id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="relative w-full h-48">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-green-700 font-bold">
                  {project.price.toLocaleString("ru-RU")} ₽
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
