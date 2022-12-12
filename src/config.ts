import * as dotenv from "dotenv";
dotenv.config();
import { parse } from "yaml";
import fs from "fs";
import { IConfig, IAccount } from "./interface";
// If config file exist read config file. else read config from environment variables.
let configFile: any = {};
if (fs.existsSync("./config.yaml")) {
  const file = fs.readFileSync("./config.yaml", "utf8");
  configFile = parse(file);
} else {
  configFile = {
    chatGPTAccountPool: [
      {
        email: process.env.CHAT_GPT_EMAIL,
        password: process.env.CHAT_GPT_PASSWORD,
        session_token: process.env.CHAT_GPT_SESSION_TOKEN,
      },
    ],
    chatGptRetryTimes: Number(process.env.CHAT_GPT_RETRY_TIMES),
    chatPrivateTiggerKeyword: process.env.CHAT_PRIVATE_TRIGGER_KEYWORD,
    openAIProxy: process.env.OPENAI_PROXY,
    clearanceToken: "TVuVYrRhyHtHN2W7hYGv7r6SAh2ZpGtLWddmgIDm4hw-1670832084-0-160",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
  };
}
dotenv.config();

export const config: IConfig = {
  chatGPTAccountPool: configFile.chatGPTAccountPool as Array<IAccount>,
  chatGptRetryTimes: configFile.chatGptRetryTimes || 3,
  chatPrivateTiggerKeyword:
    configFile.chatPrivateTiggerKeyword ||
    // Try compatible with previous designs
    (configFile?.botConfig as Array<Map<string, string>>)?.reduce(
      (prev: string, curr: Map<string, string>) =>
        curr.get("trigger_keywords") || "",
      ""
    ) ||
    "",
  // Support openai-js use this proxy
  openAIProxy: configFile.openAIProxy,
};
