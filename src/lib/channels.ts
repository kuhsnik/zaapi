import type { ComponentType, SVGProps } from "react";
import {
  IconBag,
  IconBubble,
  IconBubbleBolt,
  IconBubbleDots,
  IconCamera,
  IconMail,
  IconParcel,
  IconPlayBag,
  IconWindow,
} from "@/components/ui/icons";

export type Channel = {
  name: string;
  /* Brand hue, used only as a tint and glyph colour. We identify channels by
     name and our own glyph rather than reproducing third-party logo files. */
  hue: string;
  tint: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  note: string;
};

/* Marketplaces first. This is the ground respond.io and sleekflow.io leave
   open, and it is where ~70% of Zaapi's customers actually sell. */
export const marketplaceChannels: Channel[] = [
  {
    name: "Shopee",
    hue: "#EE4D2D",
    tint: "#FEF1ED",
    icon: IconBag,
    note: "Chat + order sync",
  },
  {
    name: "Lazada",
    hue: "#F1592A",
    tint: "#FEF2EE",
    icon: IconParcel,
    note: "Chat + order sync",
  },
  {
    name: "TikTok Shop",
    hue: "#111827",
    tint: "#F1F2F4",
    icon: IconPlayBag,
    note: "Chat + order sync",
  },
  {
    name: "LINE",
    hue: "#06C755",
    tint: "#EDFAF1",
    icon: IconBubble,
    note: "OA + rich menus",
  },
];

export const messagingChannels: Channel[] = [
  {
    name: "WhatsApp",
    hue: "#25D366",
    tint: "#EEFBF2",
    icon: IconBubbleDots,
    note: "Business API",
  },
  {
    name: "Facebook",
    hue: "#0866FF",
    tint: "#EDF3FF",
    icon: IconBubbleBolt,
    note: "Messenger + comments",
  },
  {
    name: "Instagram",
    hue: "#DD2A7B",
    tint: "#FDEEF5",
    icon: IconCamera,
    note: "DMs + story replies",
  },
  {
    name: "Web chat",
    hue: "#00A68E",
    tint: "#EAFAF6",
    icon: IconWindow,
    note: "On your own site",
  },
  {
    name: "Email",
    hue: "#475569",
    tint: "#F1F3F6",
    icon: IconMail,
    note: "Shared mailbox",
  },
];
