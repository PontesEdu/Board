import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Section } from "@/components/section";
import { listIssues } from "@/http/list-issues";
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

  const issues = await listIssues()
  return (
    <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
      <Section.Root>
        {/* Header */}
        <Section.Header >
          <Section.Title >
            <ArchiveIcon/>
            Backlog
          </Section.Title>

          <Section.IssueCount>{issues.backlog.length}</Section.IssueCount>
        </Section.Header>

        {/* Content */}
        <Section.Content >
          {issues.backlog.map(issues => {
            return (
              <Card.Root key={issues.id}>
                <Card.Header>
                  <Card.Number>{issues.issueNumber}</Card.Number>
                  <Card.Title>{issues.title}</Card.Title>
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
            )
          })}
        </Section.Content>
      </Section.Root>


      {/* To-do */}
      <Section.Root>
        {/* Header */}
        <Section.Header >
          <Section.Title >
            <ArchiveIcon/>
            To-do
          </Section.Title>

          <Section.IssueCount>{issues.todo.length}</Section.IssueCount>
        </Section.Header>

        {/* Content */}
        <Section.Content >
          {issues.todo.map(issues => {
            return (
              <Card.Root key={issues.id}>
                <Card.Header>
                  <Card.Number>{issues.issueNumber}</Card.Number>
                  <Card.Title>{issues.title}</Card.Title>
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
            )
          })}
        </Section.Content>
      </Section.Root>


      <Section.Root>
        {/* Header */}
        <Section.Header >
          <Section.Title >
            <ArchiveIcon/>
            In progress
          </Section.Title>

          <Section.IssueCount>{issues.in_progress.length}</Section.IssueCount>
        </Section.Header>

        {/* Content */}
        <Section.Content >
          {issues.in_progress.map(issues => {
            return (
              <Card.Root key={issues.id}>
                <Card.Header>
                  <Card.Number>{issues.issueNumber}</Card.Number>
                  <Card.Title>{issues.title}</Card.Title>
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
            )
          })}
        </Section.Content>
      </Section.Root>


      <Section.Root>
        {/* Header */}
        <Section.Header >
          <Section.Title >
            <ArchiveIcon/>
            Done
          </Section.Title>

          <Section.IssueCount>{issues.done.length}</Section.IssueCount>
        </Section.Header>

        {/* Content */}
        <Section.Content >
          {issues.done.map(issues => {
            return (
              <Card.Root key={issues.id}>
                <Card.Header>
                  <Card.Number>{issues.issueNumber}</Card.Number>
                  <Card.Title>{issues.title}</Card.Title>
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
            )
          })}
        </Section.Content>
      </Section.Root>
    </main>
  );
}
