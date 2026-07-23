interface StatusBadgeProps {
  status: "live" | "building" | "archived";
  className?: string;
}

const config = {
  live: {
    label: "LIVE",
    dot: "bg-neon-green",
    text: "text-neon-green",
    bg: "bg-neon-green/5 border-neon-green/15",
  },
  building: {
    label: "BUILDING",
    dot: "bg-yellow-400",
    text: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
  },
  archived: {
    label: "ARCHIVED",
    dot: "bg-text-muted",
    text: "text-text-muted",
    bg: "bg-text-muted/10 border-text-muted/30",
  },
};

export default function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const c = config[status];
  return (
    <span
    className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold border rounded-full ${c.bg} ${c.text} ${className}`}
  >
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
}
