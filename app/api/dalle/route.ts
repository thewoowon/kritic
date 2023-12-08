import OpenAI from "openai";

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

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt,
    n: 1,
    size: "1024x1024",
  });

  const image_url = response.data[0];

  // Convert the response into a friendly text-stream

  // Respond with the stream
  return Response.json({ image_url });
}
