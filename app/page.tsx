import { Mansory } from "@/components";
import { ImageList } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <Mansory column={5} gap={20} items={ImageList} />
    </main>
  )
}
