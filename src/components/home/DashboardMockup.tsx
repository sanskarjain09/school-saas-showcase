import * as Icons from "lucide-react";
import type { LucideIcon } from "@/types";
import { type Accent, accentText, accentBg } from "@/lib/theme";
import { cn } from "@/lib/utils";

type MockupKind =
  | "students"
  | "academics"
  | "exams"
  | "finance"
  | "communication"
  | "transport"
  | "library"
  | "hr"
  | "inventory"
  | "reports"
  | "mobile"
  | "ai";

interface DashboardMockupProps {
  kind: MockupKind;
  accent: Accent;
  className?: string;
}

const kindConfig: Record<MockupKind, { icon: string; label: string; rows: string[] }> = {
  students: { icon: "Users", label: "Students", rows: ["Aarav Sharma · Grade 8-A", "Meera Iyer · Grade 6-C", "Rohan Das · Grade 10-B"] },
  academics: { icon: "CalendarClock", label: "Timetable", rows: ["09:00 · Mathematics · Room 4", "10:00 · Physics · Lab 2", "11:00 · English · Room 1"] },
  exams: { icon: "FileCheck2", label: "Result Summary", rows: ["Term 2 Mathematics · 88 avg", "Term 2 Science · 82 avg", "Term 2 English · 91 avg"] },
  finance: { icon: "Wallet", label: "Fee Collection", rows: ["Grade 9 · ₹4,82,000 collected", "Grade 10 · ₹3,95,000 collected", "Overdue · 12 invoices"] },
  communication: { icon: "MessagesSquare", label: "Notices", rows: ["PTM scheduled · Fri 10 AM", "Circular: Sports Day", "WhatsApp broadcast sent"] },
  transport: { icon: "Bus", label: "Live Routes", rows: ["Route 4 · On time · 12 stops", "Route 7 · 3 min delay", "Route 2 · Arrived"] },
  library: { icon: "BookMarked", label: "Circulation", rows: ["The Alchemist · Issued", "Grade 7 Science · Returned", "2 overdue fines"] },
  hr: { icon: "Briefcase", label: "Staff Overview", rows: ["Present today · 94%", "Leave requests · 3 pending", "Payroll run · Aug 1"] },
  inventory: { icon: "Package", label: "Stock Levels", rows: ["Lab equipment · 82% stocked", "Stationery · Reorder soon", "PO #1042 · Received"] },
  reports: { icon: "BarChart3", label: "Analytics", rows: ["Attendance trend · +3.2%", "Fee recovery · 96%", "Exam pass rate · 91%"] },
  mobile: { icon: "Smartphone", label: "Parent App", rows: ["Fee reminder sent", "Homework posted · Grade 5", "Bus arriving in 4 min"] },
  ai: { icon: "Bot", label: "AI Assistant", rows: ["\u201cWho hasn't paid Term 2 fees?\u201d", "\u201cSummarize Grade 9 attendance\u201d", "\u201cDraft a holiday notice\u201d"] },
};

export function DashboardMockup({ kind, accent, className }: DashboardMockupProps) {
  const config = kindConfig[kind];
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[config.icon] ?? Icons.LayoutDashboard;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-card",
        className
      )}
    >
      {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b border-border bg-foreground/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="ml-3 text-xs text-muted">jinanam.in/app</span>
      </div>

      <div className="flex">
        {/* sidebar */}
        <div className="hidden w-14 flex-col items-center gap-4 border-r border-border py-5 sm:flex">
          <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg", accentBg[accent])}>
            <Icon className={cn("h-4 w-4", accentText[accent])} aria-hidden />
          </div>
          <span className="h-1.5 w-6 rounded-full bg-foreground/10" />
          <span className="h-1.5 w-6 rounded-full bg-foreground/10" />
          <span className="h-1.5 w-6 rounded-full bg-foreground/10" />
        </div>

        {/* main panel */}
        <div className="flex-1 p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">{config.label}</span>
            <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-medium", accentBg[accent], accentText[accent])}>
              Live
            </span>
          </div>

          {/* bar chart */}
          <div className="mb-5 flex h-20 items-end gap-2">
            {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
              <div
                key={i}
                className={cn("flex-1 rounded-t-sm bg-gradient-to-t opacity-70", accentBg[accent])}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          {/* list rows */}
          <div className="space-y-2.5">
            {config.rows.map((row, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg bg-foreground/[0.03] px-3 py-2.5">
                <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", accentBg[accent])} />
                <span className="truncate text-xs text-foreground/80">{row}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
