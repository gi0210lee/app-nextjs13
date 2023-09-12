"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  return (
    <>
      {id ? (
        <>
          <div>
            <Link href={`/update/${id}`}>Update</Link>
          </div>
          <div>
            <input
              type="button"
              value="delete"
              onClick={() => {
                const options = {
                  method: "DELETE",
                };
                fetch(process.env.NEXT_PUBLIC_API_URL + "topics/" + id, options)
                  .then((res) => res.json())
                  .then((result) => {
                    router.push("/");
                    router.refresh();
                  });
              }}
            ></input>
          </div>
        </>
      ) : null}
    </>
  );
}
