export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await fetch("https://ffc5-211-198-125-45.ngrok.io/gen", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  return new Response(await response.text(), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
