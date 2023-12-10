import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export const runtime = "edge";

export async function POST(req: Request) {
  if (!openai.apiKey) {
    console.error("API 키를 설정해주세요.");
    return;
  }

  const { messages } = await req.json();

  const chatCompletionMessageParam: ChatCompletionMessageParam[] = [
    {
      role: "user",
      content: messages,
    },
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-4-0613",
    messages: chatCompletionMessageParam,
    temperature: 0.7,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
    stream: true,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
