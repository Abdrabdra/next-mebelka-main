import Home from "@components/screens/Home";
import { MainLayout } from "@layouts/MainLayout";
import { useRouter } from "next/router";

export default function HomePage() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}
