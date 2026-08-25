import { createFileRoute } from "@tanstack/react-router";
import { PaperShell } from "@/components/paper/shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <PaperShell />;
}
