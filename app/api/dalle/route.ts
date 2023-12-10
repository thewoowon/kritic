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

  const dallePrompt = `
  먼저 아래의 본문을 확인하세요.

  "${prompt}"

  이제 4컷의 만평을 생성합니다. 담백하고 간결하게 본문의 내용을 잘 담아내는 것이 중요합니다.
  캐릭터를 활용해도 좋습니다. 캐릭터는 4컷의 주인공이 될 수 있습니다.
  `;

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: dallePrompt,
    n: 1,
    size: "1024x1024",
  });

  const image_url = response.data[0].url;

  return Response.json({ image_url });
}
