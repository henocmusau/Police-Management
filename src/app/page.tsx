import CardWrapper from "@/components/Dashboard/CardWrapper";

export default function Home() {
  return (
    <section className="grow relative overflow-y-hidden">
      <ul className="flex gap-8 text-2xl mb-4">
        {['All', 'Staff', 'Positions'].map(filter => (
          <li key={filter}>
            <button className="hover:text-third font-thin duration-150">
              {filter}
            </button>
          </li>
        ))}
      </ul>

      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-hidden">
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
      </div>
    </section>
  );
}
