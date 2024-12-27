import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function analyzeImage(imageBuffer) {
  try {
    const base64Image = Buffer.from(imageBuffer).toString('base64');
    const imageUrl = `data:image/jpeg;base64,${base64Image}`;

    const promptContent = `Based on the provided image, analyze the plant and provide the answer in the following very strict format:

Disease Name: (name with short description)
Stage of the disease: ( with short description)
Main Causes:
Specific Nutrients deficiency:
Personalized advice: 

Note: Provide a actual analysis without using phrases like "I can" or "I think". Present the information in plain text format without markdown headers.`;

    console.log("TRYING TO ANALYZE IMAGE");
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: promptContent,
        },
      ],
      max_tokens: 1000,
    });

    const analysisContent = response.choices[0].message.content;
    console.log("RESPONSE", analysisContent);

    // Regex patterns to extract each part
    const diseaseNameMatch = analysisContent.match(/Disease Name:\s*(.*)/);
    const stageMatch = analysisContent.match(/Stage of the disease:\s*(.*)/);
    const causesMatch = analysisContent.match(/Main Causes:\s*(.*)/);
    const nutrientsMatch = analysisContent.match(/Specific Nutrients deficiency:\s*(.*)/);
    const adviceMatch = analysisContent.match(/Personalized advice:\s*(.*)/);

    // Extracted values
    const diseaseName = diseaseNameMatch ? diseaseNameMatch[1].trim() : null;
    const stage = stageMatch ? stageMatch[1].trim() : null;
    const mainCauses = causesMatch ? causesMatch[1].trim() : null;
    const nutrientsDeficiency = nutrientsMatch ? nutrientsMatch[1].trim() : null;
    const personalizedAdvice = adviceMatch ? adviceMatch[1].trim() : null;

    console.log("Disease Name:", diseaseName);
    console.log("Stage of the disease:", stage);
    console.log("Main Causes:", mainCauses);
    console.log("Specific Nutrients deficiency:", nutrientsDeficiency);
    console.log("Personalized advice:", personalizedAdvice);

    return {
      diseaseName,
      stage,
      mainCauses,
      nutrientsDeficiency,
      personalizedAdvice,
    };
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to analyze image');
  }
}
 