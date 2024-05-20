import { client } from "../../sanity/lib/client";
import { CardType } from "@/typings/CardType";
import Card from "@/components/Card/Card";
export default async function Home() {
  const cards = await client.fetch<CardType[]>(`*[_type == "card"]`);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {cards.map((card) => (
        <Card key={card._id} {...card} />
      ))}
    </main>
  );
}
