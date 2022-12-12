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
        session_token: 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..MBdO26R-ph55tW8X.SEiYz3boKJzp1Fm6ksKM511XnKYWyz-4IZQQgdPCClO8J3qHxMmu5eI22r0NTa5MHmoNwWx1N_kZ2OWlx0aXry_-j-pVtCTPdqrMzm3qBCyjwlLMiS81jVotaI7yd3Hwd9m0ptWubfRNL9e_2UKo1AMOkJGr-VAQlyuUx6fK1btuuUPvJAWEdh574lwVeoXAo1kRg_jKM_MsJE2MNKd0Hk0Ba6pP6Q-iKVLmiTbGmceFDiXC7pa7aHGw-yMDOyWTtfaCgSrN3VtAjDHTZbJP8eZyKX_gRxCfViX_CiKf9fMKL5roMci-Ywaz8UskEKeexG3dKK838sHP9ZjkIeI4JNGMsijgAIVK6ZrQ4lRkBSq6febkcG5l6dXcp10qAfBDrkDsUKxqhKLpT-hVpzK9b49lsH-3Ij1iSZH5e_Ad3Z2-UX5Oq6IO4-QrfsZuhO-fbLmXAT4tkdxZujG4fv1vffLXfoMZCTTJU6bBwxxHQt7y_3hQgwxkpOavMi5xe_hqM5D3ifkokR36QE9PNaTKwK0ldyl-OCeRpDc46laahgEm1j9UcLAopObUkDEUECe27dF1ykA8DT9JfBbsx7Pz-CiZmMQw_LN2o19FAWczGAFdhsgxxK75zCVXcU1Ni7hAvL1sWHOS5JGDQU67I6MT533dFBhuyyP41Lm11cIzzZUGzlHiRlI1huiD6MxyHiflkfN5pCa1ns7R0od9wTZqS6-tEKj6r_pPIG2sEG0VFy2zZG9RdzYAJGK60T7GusKHbgvMT8rFoKR8VXPfEXzMdLdiB243mJNFVN55t275eFRCFtM0Y549CFZIZ4UmeSBNd2Cv3zsMfFMZtid5CazVbHr0Uzo8R0E8dxCexKQ-vwHEBrkDOjFG21nqfGK_2dnuTfI6x8-wpucGZ9fMu7nYCfb17cBPYnX9lja2rWWYKW3NbZ2R8W1ODKg9E0Zigl42yFdOHfUzOo3ssIY2ciTLqODUf9DUU_NDlHdu_O-Kb4ddCIr6Al3QoHvMzRSLQE62RHaJzPsYU1F1j0tD4U2BvcK2h9PoxZTp3MOowvzhKHwl5jB8RzQh2KD-TS0Rhy6HBeBdHO6zhSrUF66Xgut9gj_Qkx3YeIXUnM5Nf1Vo8xeZjKPijyPND1QeVVWzKP3iSxxeVaFGt7NXYYuNVly3gJHHb6P3hYWOuYy8KX_KO20MdlU6GSZsAGGsv1s77NqtYEpKO5C2MfFh4EHQblApjPmFKRL6Yn2sorO7rYB8Zi1OQ-a3VoykwrzZqfeg9S8ZA-gql84Cvst9ywC0tQ8MMwTzbaehB-2aU4BhCfSSYnqDenpotRkabYfbfoFTeq7HyFnZQ6oaHyCzK_ZQyoU21vDXy8CWstVG40uiFotrJp45JKToPIBXhHpsm8pFkqBLgCndPdl3pJhc_lkzJ7HevBAWrvGatG8biiI-pFIBnoTtTHZBsy0A5S8d_34lRHQoIjvAuVHqL9O_ZGk9sgU4iB3HM4Jv7Eu9LsFurOQ6uJsuBzHUsCWjoFjnqJiDvtn1oBrpUTLmzvZS7nMDmJk3y3yyh1Dz0QfkVMgxwSPJ2eDsraEKGjSHuUgg0afWSe-SnauRK5Gl2BPOiHWT4gH7b0p7mTr-u-We8_BQPTK_Dy8gBjoqAgSVzVHdP--FLSqXEKL6wpLLfqgNdMs3e-UfOlQqQsuQ8m8TFihRSEzWlCRhy1MycLIGS69vLjVarn7hTWUBroByI2AZ2HKgPU8an5wJfsO9F0auyIwPaeeFoDfTAfJW43zizu-7ub-viNZuRdeBw1E2fMgTx2JXTiMflQyuEt9yyzNxV_EHqXcn2ZVxSN2Uwcea_yXmIlmm0u4k6j6q7Q2CavIs6EVcfHhBlHTZ_hsbDNLge3L_F2am1YlaepiFB_fXtRV6Bt1-lU8eHRG5CKnHolL1JhESS_FJi0b-lggl-Jp5ivqV-UdmTL4bZ1u7XowtMasmfIK5tdpZfGaujKbRcwYKpVJi2_LcNmRu2ksCS2i-_EepPu8jt1BN7jzTvz6vTy5FPG40DPCmEsTXuGdfcmpZiJqUF0Jmc9RL8r9vki5jfKXmqA2A80KTTMKm2n8hWb6kbepB0UaiH4xBv0geGIePYkJCv--hXSfETgbUJypmCi-uGn7aP-AnP-ZL2oQj45w_0yq5NwbF73Ss13FUuNNn20WKXqdLR83rcU3IAEuBnz6kvHbdodTSjWx7CKwcdwkZEsJwBPPbprymSGa0-qbnr9-P9BBkFuF8HAGlhsLcT_YV9E7ZLrdnLnCVgxoMPeF3jwLRysvSzg9-k8GEPiswyicpDvUujjEvg1ximpOr4-TU3dIPv8ZKQzzpmxSXyY8.4ebB84Pq5W9CDF5CPZbjsg',
      },
    ],
    chatGptRetryTimes: Number(process.env.CHAT_GPT_RETRY_TIMES),
    chatPrivateTiggerKeyword: process.env.CHAT_PRIVATE_TRIGGER_KEYWORD,
    openAIProxy: process.env.OPENAI_PROXY,
    clearanceToken: 'vQ_7V2ZhBfbWDlAolqi4J9U3zMsPgoAWJQXpTmYDkf8-1670835510-0-250',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
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
