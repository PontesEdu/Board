import { Section } from "@/components/section";
import { ArchiveIcon } from "lucide-react";

export default function Home() {
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
            <div>card 1</div>
            <div>card 2</div>
            <div>card 3</div>
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  );
}
