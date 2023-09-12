import Link from "next/link";

export async function TodoList() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "topics", {
    cache: "no-store",
  });
  const topics = await res.json();
  return (
    <>
      <ol>
        {topics.map((topic) => {
          return (
            <li key={topic.id}>
              <Link href={`/read/${topic.id}`}>{topic.title}</Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}
