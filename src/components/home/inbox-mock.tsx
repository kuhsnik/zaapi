import { IconBag, IconBolt, IconCheck } from "@/components/ui/icons";

type Convo = {
  name: string;
  channel: string;
  hue: string;
  preview: string;
  time: string;
  active?: boolean;
  unread?: boolean;
};

const convos: Convo[] = [
  {
    name: "Ploy S.",
    channel: "Shopee",
    hue: "#EE4D2D",
    preview: "Hi, I ordered on Friday. When will it…",
    time: "2m",
    active: true,
  },
  {
    name: "ณัฐพงษ์ ว.",
    channel: "LINE",
    hue: "#06C755",
    preview: "มีไซส์ 42 ไหมครับ",
    time: "5m",
    unread: true,
  },
  {
    name: "@bee.styles",
    channel: "TikTok Shop",
    hue: "#111827",
    preview: "Is the bundle deal still live?",
    time: "11m",
  },
  {
    name: "Aisha R.",
    channel: "WhatsApp",
    hue: "#25D366",
    preview: "Can I change the delivery address?",
    time: "18m",
  },
  {
    name: "Somchai P.",
    channel: "Lazada",
    hue: "#F1592A",
    preview: "Refund status on #LZ-9014?",
    time: "26m",
  },
];

function ChannelDot({ hue }: { hue: string }) {
  return (
    <span
      className="inline-block size-[7px] shrink-0 rounded-full"
      style={{ backgroundColor: hue }}
      aria-hidden="true"
    />
  );
}

function OrderCard() {
  return (
    <div className="mt-2 w-full max-w-[335px] overflow-hidden rounded-xl border border-line bg-white">
      <div className="flex items-center gap-2 border-b border-line-soft bg-sand px-3.5 py-2.5">
        <IconBag className="size-3.5 text-[#EE4D2D]" />
        <span className="t-mono font-medium text-ink-2">#SP-4821</span>
        <span className="t-mono ml-auto text-faint">Shopee</span>
      </div>
      <div className="px-3.5 py-3">
        <p className="text-[13px] leading-snug font-medium text-ink">
          Linen Oversize Shirt
        </p>
        <p className="mt-0.5 text-[12px] text-muted">Sand · Size L · Qty 1</p>
        <div className="mt-3 flex items-center justify-between border-t border-line-soft pt-2.5">
          <span className="text-[13px] font-semibold text-ink">฿1,290</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2 py-0.5 text-[11px] font-medium text-teal-700">
            <IconCheck className="size-3" />
            Shipped · Flash Express
          </span>
        </div>
      </div>
    </div>
  );
}

export function InboxMock() {
  return (
    <div className="card lift overflow-hidden">
      {/* app bar */}
      <div className="flex items-center gap-3 border-b border-line px-4 py-3 sm:px-5">
        <span className="t-h4 text-ink">Inbox</span>
        <span className="rounded-full bg-sand px-2 py-0.5 text-[11px] font-medium text-muted">
          128 open
        </span>
        <div className="ml-auto hidden items-center gap-4 sm:flex">
          <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-teal-700">
            <span className="relative flex size-1.5">
              <span
                className="absolute inline-flex size-full rounded-full bg-teal"
                style={{ animation: "blink 2.4s ease-in-out infinite" }}
              />
            </span>
            AI agent on
          </span>
          <div className="flex -space-x-1.5">
            {["#0F172A", "#00A68E", "#475569"].map((c) => (
              <span
                key={c}
                className="size-6 rounded-full border-2 border-white"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-[minmax(0,236px)_minmax(0,1fr)]">
        {/* conversation list */}
        <div className="hidden border-r border-line bg-sand/60 md:block">
          <div className="border-b border-line-soft px-4 py-3">
            <div className="flex h-8 items-center rounded-lg border border-line bg-white px-2.5 text-[12px] text-faint">
              Search conversations
            </div>
          </div>
          <ul>
            {convos.map((c) => (
              <li
                key={c.name}
                className={`border-b border-line-soft px-4 py-3 last:border-0 ${
                  c.active ? "bg-white" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <ChannelDot hue={c.hue} />
                  <span className="truncate text-[13px] font-semibold text-ink">
                    {c.name}
                  </span>
                  <span className="t-mono ml-auto shrink-0 text-faint">
                    {c.time}
                  </span>
                </div>
                <p className="mt-1 truncate pl-[15px] text-[12px] text-muted">
                  {c.preview}
                </p>
                <p className="mt-1 pl-[15px] text-[11px] font-medium text-faint">
                  {c.channel}
                  {c.unread && (
                    <span className="ml-2 inline-block size-1.5 rounded-full bg-teal align-middle" />
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* thread */}
        <div className="flex min-w-0 flex-col">
          <div className="flex items-center gap-3 border-b border-line px-4 py-3 sm:px-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-[13px] font-semibold text-white">
              P
            </span>
            <div className="min-w-0">
              <p className="truncate text-[14px] font-semibold text-ink">
                Ploy S.
              </p>
              <p className="flex items-center gap-1.5 text-[12px] text-muted">
                <ChannelDot hue="#EE4D2D" />
                Shopee · Bangkok · 4 orders
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 px-4 py-5 sm:px-5">
            {/* inbound */}
            <div className="max-w-[86%] sm:max-w-[78%]">
              <div className="rounded-2xl rounded-tl-md border border-line bg-sand px-3.5 py-2.5">
                <p className="text-[13.5px] leading-relaxed text-ink-2">
                  Hi, I ordered on Friday. When will it arrive?
                </p>
              </div>
              <p className="t-mono mt-1 pl-1 text-faint">09:14</p>
            </div>

            {/* AI reply */}
            <div
              className="animate-rise max-w-[92%] self-end sm:max-w-[82%]"
              style={{ animationDelay: "160ms" }}
            >
              <div className="flex items-center justify-end gap-1.5 pr-1 pb-1.5">
                <IconBolt className="size-3 text-teal-700" />
                <span className="text-[11px] font-semibold tracking-wide text-teal-700 uppercase">
                  Zaapi AI
                </span>
              </div>
              <div className="rounded-2xl rounded-tr-md bg-ink px-3.5 py-2.5">
                <p className="text-[13.5px] leading-relaxed text-white/95">
                  Hi Ploy! Your order shipped on Saturday and is with Flash
                  Express now. Estimated delivery is Tuesday 29 July. Tracking:
                  TH29384710.
                </p>
              </div>
              <div className="flex justify-end">
                <OrderCard />
              </div>
              <p className="t-mono mt-1 pr-1 text-right text-faint">09:14</p>
            </div>

            {/* inbound */}
            <div
              className="animate-rise max-w-[70%]"
              style={{ animationDelay: "320ms" }}
            >
              <div className="rounded-2xl rounded-tl-md border border-line bg-sand px-3.5 py-2.5">
                <p className="text-[13.5px] leading-relaxed text-ink-2">
                  Perfect, thank you 🙏
                </p>
              </div>
              <p className="t-mono mt-1 pl-1 text-faint">09:15</p>
            </div>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-line bg-teal-50/60 px-4 py-3 sm:px-5">
            <IconCheck className="size-3.5 shrink-0 text-teal-700" />
            <span className="text-[12.5px] font-medium text-teal-700">
              Resolved by AI agent in 41 seconds.
            </span>
            <span className="text-[12.5px] text-muted">
              No human touched this one.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
