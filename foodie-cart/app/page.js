import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import CategoryList from "./_components/CategoryList";

export default function Home() {

  
  return (
    <div>
      {/* <h1>Hello World</h1>
      <Button>This is a Button</Button>
      <UserButton afterSignOutUrl="/"/> */}
      <CategoryList />
    </div>
  );
}
