import Image from "next/image";
import { TodoList } from "./TodoList";

export default function Home() {
  return (
    <>
      <h2>To do List</h2>
      <TodoList />
    </>
  );
}
