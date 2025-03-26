import OpenAI from "openai";

// const token =
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o";

export async function main() {
  const client = new OpenAI({ baseURL: endpoint, apiKey: token });

  const response = await client.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "What can we do with Git Hub Models? Provide a 20 word description" },
    ],
    temperature: 1.0,
    top_p: 1.0,
    max_tokens: 1000,
    model: modelName,
  });

  console.log(response.choices[0].message.content);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
