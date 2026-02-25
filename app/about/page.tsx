import { Github, Mail, Rss, Heart, Baby, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Kevin's Life Blog - 여성, 육아, 일과 삶의 균형",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* Profile */}
      <section className="mb-12 text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500">
          <span className="text-4xl font-bold text-white">K</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Kevin</h1>
        <p className="mt-2 text-muted-foreground">
          Tech Enthusiast &amp; Writer
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <a
            href="https://github.com/antkdi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="/rss.xml"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Rss className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* About */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold">About This Blog</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            안녕하세요! Kevin&apos;s Life Blog에 오신 것을 환영합니다.
            이 블로그에서는 여성, 육아, 일과 삶의 균형에 대한 따뜻하고
            실용적인 이야기를 공유합니다.
          </p>
          <p>
            워킹맘, 육아 심리학자, 페미니스트 작가 등 다양한 페르소나의
            시각으로 삶의 이야기를 나누며, 공감과 영감을 드리고자 합니다.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-bold">Topics</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm">
            <Heart className="mx-auto mb-3 h-8 w-8 text-pink-500" />
            <h3 className="font-semibold">Women &amp; Life</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              여성의 삶과 경력
            </p>
          </div>
          <div className="rounded-xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm">
            <Baby className="mx-auto mb-3 h-8 w-8 text-violet-500" />
            <h3 className="font-semibold">Parenting</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              육아와 아이 발달
            </p>
          </div>
          <div className="rounded-xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm">
            <Briefcase className="mx-auto mb-3 h-8 w-8 text-emerald-500" />
            <h3 className="font-semibold">Work-Life</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              일과 삶의 균형
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="mb-4 text-xl font-bold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Next.js 15",
            "TypeScript",
            "Tailwind CSS",
            "shadcn/ui",
            "GitHub Pages",
            "GitHub Actions",
          ].map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
