import { Control } from "../../Control";

export default async function Read(props) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `topics/${props.params.id}`,
    {
      cache: "no-store",
    }
  );
  const topic = await res.json();
  return (
    <>
      <h2>제목: {topic.title}</h2>
      <div>
        <Control />
      </div>
      <div>본문: {topic.body}</div>
    </>
  );
}
