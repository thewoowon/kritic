import OpenAI from "openai";
import { isUploadable } from "openai/uploads.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export const runtime = "edge";

export async function POST(req: Request) {
  if (!openai.apiKey) {
    console.error("API 키를 설정해주세요.");
    return;
  }

  const { prompt } = await req.json();

  if (isUploadable(prompt)) {
    const response = await openai.audio.transcriptions.create({
      model: "whisper-1",
      file: prompt,
    });

    return response.text;
  }
  return "";
}
