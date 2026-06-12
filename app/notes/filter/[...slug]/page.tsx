import mapCategory from "@/lib/utils";
import NotesClient from "../../Notes.client";

interface FilterProps {
  params: Promise<{ slug: string }>;
}
export default async function Filter({ params }: FilterProps) {
  const { slug } = await params;
  const category = slug[0];
  const param = mapCategory(category);

  return <NotesClient tag={param} />;
}
