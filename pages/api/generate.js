import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `
I am going to provide you with a blog post I have written, I want you to convert it into a tweet thread, number each tweet and show breaks in between, make sure the whole tweet thread is able to include the important points of my blog post, the tweets need to be concise and include relevant emojis.

Blog post:
`;
const generateAction = async (req, res) => {
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`);

  if (!process.env.OPENAI_API_KEY) {
    console.error("Missing OpenAI API Key");
    return res.status(500).json({ error: "OpenAI request failed" });
  }

  try {
    const baseCompletion = await openai.createCompletion({
      model: "gpt-3.5-turbo-instruct",
      prompt: `${basePromptPrefix}${req.body.userInput}\n`,
      temperature: 0.7,
      max_tokens: 1000,
    });

    const basePromptOutput = baseCompletion.data.choices.pop();

    res.status(200).json({ output: basePromptOutput });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "OpenAI request failed" });
  }
};

export default generateAction;
