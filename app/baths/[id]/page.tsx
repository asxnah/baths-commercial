import { data } from "@data/baths";
import Gallery from "@widgets/Gallery";
import SpecsTable from "@widgets/SpecsTable";
import SeoJsonLd from "@widgets/SeoJsonLd";
import OrderModal from "@widgets/OrderModal";
import Link from "next/link";

export default async function ProjectPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const project = data.find((p) => p.id === id);

  if (!project) return <p>Проект не найден</p>;

  return (
    <main className="py-4 px-4 sm:px-8 lg:px-16">
      <SeoJsonLd project={project} />

      <nav aria-label="Хлебные крошки" className="py-4 text-sm text-gray-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-gray-900 hover:underline">
              Главная
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium" aria-current="page">
              {project.title}
            </span>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_512px] gap-8 pb-8">
        <div className="w-full lg:order-1">
          <Gallery images={project.images} />
        </div>

        <div className="space-y-6 lg:space-y-8 lg:order-2">
          <h1 className="text-2xl sm:text-3xl font-bold">{project.title}</h1>
          <p className="text-2xl sm:text-3xl font-bold text-green-700">
            {project.price.toLocaleString("ru-RU")} ₽
          </p>

          <section className="flex flex-col gap-6 sm:gap-8">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {project.description}
            </p>
            <OrderModal projectTitle={project.title} />
          </section>
        </div>
      </div>

      <section className="my-8 lg:my-12">
        <h2 className="text-xl sm:text-2xl font-medium mb-6">Характеристики</h2>
        <SpecsTable specs={project.specs} />
      </section>
    </main>
  );
}
