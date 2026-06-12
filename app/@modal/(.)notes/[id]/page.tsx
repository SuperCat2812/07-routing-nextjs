import NoteDetailsClient from "@/components/NoteDetailsClient/NoteDetailsClient";
import NotePreview from "@/components/NotePreview/NotePreview";
import { fetchNoteById } from "@/lib/api";

interface ModalPageProps {
  params: Promise<{ id: string }>;
}
export default async function ModalPage({ params }: ModalPageProps) {
  const { id } = await params;
  const data = await fetchNoteById(id);
  return (
    <NotePreview>
      <NoteDetailsClient note={data} />
    </NotePreview>
  );
}
