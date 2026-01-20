import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Section } from "@/components/section";
import { ArchiveIcon, MessageCircleCodeIcon, ThumbsUpIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board"
};


interface BoardProps {
  searchParams: Promise<{q?: string}>
}


export default async function Home({searchParams}: BoardProps) {

  const { q } = await searchParams
  return (
    <div className="max-w-405 w-full mx-auto p-10 flex flex-col gap-8 h-dvh">
      <div></div>

      <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
        <Section.Root>
          {/* Header */}
          <Section.Header className="flex items-center justify-between px-3">
            <Section.Title className="bg-navy-700 rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs">
              <ArchiveIcon className="size-3" />
              Backlog
            </Section.Title>

            <Section.IssueCount className="text-xs text-navy-200">16</Section.IssueCount>
          </Section.Header>

          {/* Content */}
          <Section.Content className="flex flex-col gap-2.5 overflow-y-scroll p-3">
            <Card.Root>
              <Card.Header>
                <Card.Title>Implementar cartão de credito</Card.Title>
                <Card.Number>ECO-001</Card.Number>
              </Card.Header>
              <Card.Footer>
                <Button type="button">
                  <ThumbsUpIcon className="size-3"/>
                  <span className="text-sm">12</span>
                </Button>

                <Button type="button">
                  <MessageCircleCodeIcon className="size-3"/>
                  <span className="text-sm">6</span>
                </Button>
              </Card.Footer>
            </Card.Root>
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  );
}
