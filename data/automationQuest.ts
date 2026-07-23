export type AutomationQuestStep = {
  title: string;
  description: string;
  log: string;
};

export type AutomationQuestProfile = {
  codename: string;
  briefing: string;
  objective: string;
  steps: AutomationQuestStep[];
  before: {
    label: string;
    value: string;
  };
  after: {
    label: string;
    value: string;
  };
  impact: string;
  approach: string[];
  projectId: string;
};

export const automationQuests: Record<string, AutomationQuestProfile> = {
  "data-entry": {
    codename: "Clean Intake",
    briefing:
      "New requests arrive through a form, but someone still has to retype every field into a spreadsheet and tracker.",
    objective: "Move each submission into the right system without copying and pasting.",
    steps: [
      {
        title: "Capture input",
        description: "Watch for every new submission.",
        log: "New record detected",
      },
      {
        title: "Validate fields",
        description: "Check required values and formats.",
        log: "Input rules passed",
      },
      {
        title: "Map the data",
        description: "Match each field to its destination.",
        log: "Fields mapped successfully",
      },
      {
        title: "Sync records",
        description: "Write clean data into every system.",
        log: "Destinations updated",
      },
    ],
    before: { label: "Manual batch", value: "45 minutes" },
    after: { label: "Automated batch", value: "2 minutes" },
    impact: "Illustrative result: about 95% less manual handling",
    approach: ["Structured inputs", "Validation rules", "Reliable sync"],
    projectId: "paper-flowers",
  },
  macro: {
    codename: "One-Key Sequence",
    briefing:
      "A repetitive desktop task needs the same clicks, keystrokes, waits, and checks every single time.",
    objective: "Turn a fragile manual sequence into one repeatable trigger.",
    steps: [
      {
        title: "Record actions",
        description: "Capture the exact click and key sequence.",
        log: "Action sequence recorded",
      },
      {
        title: "Add timing",
        description: "Wait for screens and apps reliably.",
        log: "Timing controls applied",
      },
      {
        title: "Handle branches",
        description: "React to expected screen states.",
        log: "Conditions are ready",
      },
      {
        title: "Run macro",
        description: "Execute the sequence from one trigger.",
        log: "Macro completed",
      },
    ],
    before: { label: "Manual sequence", value: "18 clicks" },
    after: { label: "Automated sequence", value: "1 trigger" },
    impact: "Illustrative result: the same process, repeatable at full speed",
    approach: ["Jitbit", "Macrorify", "Custom scripts"],
    projectId: "amyt",
  },
  workflow: {
    codename: "Connected Pipeline",
    briefing:
      "Work moves between people and apps through messages, reminders, and manual status updates.",
    objective: "Connect the handoffs from the first trigger to the final output.",
    steps: [
      {
        title: "Detect trigger",
        description: "Start the flow from the right event.",
        log: "Trigger is listening",
      },
      {
        title: "Route the work",
        description: "Send each case down the correct path.",
        log: "Routing logic activated",
      },
      {
        title: "Update status",
        description: "Keep every system and person aligned.",
        log: "Status synced",
      },
      {
        title: "Deliver output",
        description: "Complete the workflow automatically.",
        log: "Output delivered",
      },
    ],
    before: { label: "Manual workflow", value: "5 handoffs" },
    after: { label: "Automated workflow", value: "1 connected flow" },
    impact: "Illustrative result: fewer missed steps and a visible process",
    approach: ["Trigger logic", "Branching paths", "Error recovery"],
    projectId: "wescomm",
  },
  productivity: {
    codename: "Auto Report",
    briefing:
      "Updates live across different files, so every report starts with finding, sorting, and summarizing information.",
    objective: "Turn scattered updates into a current report without rebuilding it.",
    steps: [
      {
        title: "Collect updates",
        description: "Pull the latest data from each source.",
        log: "Sources connected",
      },
      {
        title: "Organize data",
        description: "Sort and group the important records.",
        log: "Records organized",
      },
      {
        title: "Calculate status",
        description: "Generate the metrics that matter.",
        log: "Metrics calculated",
      },
      {
        title: "Publish report",
        description: "Refresh the dashboard automatically.",
        log: "Dashboard refreshed",
      },
    ],
    before: { label: "Manual report", value: "2 hours" },
    after: { label: "Automated report", value: "10 minutes" },
    impact: "Illustrative result: a consistent report that stays current",
    approach: ["Auto-organization", "Live dashboards", "Clear reporting"],
    projectId: "wescomm",
  },
  "custom-tools": {
    codename: "Purpose-Built Tool",
    briefing:
      "The workflow is spread across generic apps that were never designed to work together.",
    objective: "Give the operator one focused workspace built around the actual job.",
    steps: [
      {
        title: "Model the job",
        description: "Turn the real workflow into clear screens.",
        log: "Workflow model created",
      },
      {
        title: "Build controls",
        description: "Add only the actions the operator needs.",
        log: "Core controls online",
      },
      {
        title: "Connect logic",
        description: "Automate the work behind each action.",
        log: "Automation logic connected",
      },
      {
        title: "Ship workspace",
        description: "Deliver one usable operating tool.",
        log: "Custom tool ready",
      },
    ],
    before: { label: "Generic setup", value: "4 tools" },
    after: { label: "Custom setup", value: "1 workspace" },
    impact: "Illustrative result: less context switching and a clearer job flow",
    approach: ["Next.js", "TypeScript", "Purpose-built UX"],
    projectId: "sellables-calc",
  },
  "web-automation": {
    codename: "Always Watching",
    briefing:
      "Someone repeatedly opens the same pages to check changes, collect details, or submit routine information.",
    objective: "Let a browser workflow watch and act while people handle exceptions.",
    steps: [
      {
        title: "Open target",
        description: "Reach the right page and state.",
        log: "Target page loaded",
      },
      {
        title: "Read the page",
        description: "Extract the information that matters.",
        log: "Page data captured",
      },
      {
        title: "Apply rules",
        description: "Decide what needs action or attention.",
        log: "Monitoring rules passed",
      },
      {
        title: "Send result",
        description: "Store the data or alert the operator.",
        log: "Result delivered",
      },
    ],
    before: { label: "Manual checking", value: "Daily rounds" },
    after: { label: "Automated checking", value: "Always watching" },
    impact: "Illustrative result: people review exceptions, not every page",
    approach: ["Browser flows", "Monitoring", "Data extraction"],
    projectId: "amyt",
  },
};
