import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function analyzeImage(imageBuffer) {
  try {
    const base64Image = Buffer.from(imageBuffer).toString('base64');
    const imageUrl = `data:image/jpeg;base64,${base64Image}`;

    const promptContent = `Based on the provided image, analyze the plant and provide:

1. Disease identification (if any)
2. Confidence level of the diagnosis
3. Brief description of the disease
4. Three specific care recommendations
5. Preventive measures for the future

Note: Provide a direct, factual analysis without using phrases like "I can" or "I think". Present the information in plain text format without markdown headers.`;

    console.log("TRYING TO ANALYZE IMAGE");
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: promptContent },
            {
              type: "image_url",
              image_url: { url: imageUrl }
            }
          ],
        },
      ],
      max_tokens: 500,
    });

    console.log("RESPONSE",response.choices[0].message.content);
    console.log("USAGE",response.usage);
    console.log("COMPLETION TOKENS",response.usage.completion_tokens);
    console.log("PROMPT TOKENS",response.usage.prompt_tokens);
    console.log("TOTAL TOKENS",response.usage.total_tokens);
    console.log("TOTAL TOKENS",response.usage.prompt_tokens + response.usage.completion_tokens);
    return {
      analysis: response.choices[0].message.content
    };

  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to analyze image');
  }
} 