export async function parseSummaryResult(
  response: Response,
  onDelta?: (chunk: string) => unknown
) {
  const reader = response.body
    ?.pipeThrough(new TextDecoderStream())
    .getReader();

  let result = "";

  while (reader) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }

    result += value;
    onDelta?.(value);
  }
  return result;
}

export async function requestStreamApi({ messages }: { messages: string }) {
  return fetch("/api/chat", {
    headers: {
      "Content-Type": "text/event-stream",
      withCredentials: "true",
      Accept: "text/event-stream",
    },
    credentials: "include",
    method: "POST",
    body: JSON.stringify({ messages }),
  }).then((response) => response);
}
