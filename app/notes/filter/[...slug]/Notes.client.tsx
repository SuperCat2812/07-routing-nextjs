"use client";
import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";
import { TagValue } from "@/types/note";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import css from "./NotesPage.module.css";

interface NotesClientProps {
  tag: TagValue | undefined;
}
export default function NotesClientSlug({ tag }: NotesClientProps) {
  const { data } = useQuery({
    queryKey: ["note", { tag }],
    queryFn: () => fetchNotes({ tag }),
    enabled: true,
    placeholderData: keepPreviousData,
  });
  const notes = data?.notes || [];
  return (
    <>
      <div className={css.app}>
        {notes.length > 0 && <NoteList notes={notes} />}
      </div>
    </>
  );
}
