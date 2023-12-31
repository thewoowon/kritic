import type Chrome from "chrome";
import {
  ChatHistories,
  SessionHistories,
} from "@pages/background/lib/storage/chatHistoryStorage";

declare namespace chrome {
  export default Chrome;
}

declare module "virtual:reload-on-update-in-background-script" {
  export const reloadOnUpdate: (watchPath: string) => void;
  export default reloadOnUpdate;
}

declare module "virtual:reload-on-update-in-view" {
  const refreshOnUpdate: (watchPath: string) => void;
  export default refreshOnUpdate;
}

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.json" {
  const content: string;
  export default content;
}

declare global {
  type Chat = {
    role: "user" | "assistant" | "error";
    content: string;
  };

  type News = {
    id: number;
    title: string;
    content: string;
    journalist: string;
    src: string;
    press: string;
    date: string;
    url: string;
    summary: string;
  };

  type SideMessageType = {
    leftMessage?: React.ReactNode | null;
    rightMessage?: React.ReactNode | null;
  };
}
