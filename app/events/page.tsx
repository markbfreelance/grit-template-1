import { getCategories, getEvents } from "../lib/api";
import EventsClient from "./EventsClient";

export const revalidate = 60;

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const [categories, events] = await Promise.all([
    getCategories(),
    getEvents(category),
  ]);

  return <EventsClient categories={categories} events={events} activeCategoryId={category} />;
}
