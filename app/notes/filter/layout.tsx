type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

export default function NotesLayout({ children, sidebar }: Props) {
  return (
    <section>
      <div>{children}</div>
      <aside>{sidebar}</aside>
    </section>
  );
}
