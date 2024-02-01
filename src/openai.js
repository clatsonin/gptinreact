import OpenAI from "openai";

const openai = new OpenAI("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");

async function sendMsgToOpenAI (message) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: message }],
        model: "gpt-3.5-turbo",
    });

    return console.log(completion.choices[0]);
  
}
export default sendMsgToOpenAI;
