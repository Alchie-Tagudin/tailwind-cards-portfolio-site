import { client } from "../../sanity/lib/client";
import { CardType } from "@/typings/CardType";
import Card from "@/components/Card/Card";
export default async function Home() {
  const cards = await client.fetch<CardType[]>(`*[_type == "card"]`);

  return (
    <main className="min-h-screen justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 items-start justify-around p-4 2xl:p-24">
        {cards.map((card) => (
          <Card key={card._id} {...card} />
        ))}
      </div>
    </main>
  );
}
