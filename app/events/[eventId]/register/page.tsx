import { getEvents } from "../../../lib/api";
import EventRegisterClient from "./EventRegisterClient";
import { notFound } from "next/navigation";

export const revalidate = 60;

export default async function EventRegisterPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  const events = await getEvents();
  const event = events.find((e) => e.id === eventId);

  if (!event) notFound();

  return <EventRegisterClient event={event} />;
}
