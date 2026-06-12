"use client";
import Loading from "@/app/loading";
import ErrorRoute from "@/app/notes/error";
import NoteDetailsClient from "@/components/NoteDetailsClient/NoteDetailsClient";
import NotePreview from "@/components/NotePreview/NotePreview";
import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function NoteDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <>
      {data && (
        <NotePreview>
          <NoteDetailsClient note={data} />
        </NotePreview>
      )}
      {isLoading && <Loading />} {error && <ErrorRoute error={error} />}
    </>
  );
}
