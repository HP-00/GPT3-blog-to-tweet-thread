# Blog to Tweet thread transformer

## Project description

This web application uses OpenAI's GPT-3 language model to convert a blog post of the user's choosing into a numbered Tweet thread. Tweet threads are a common method of increasing engagement, this generator streamlines the process for content creators to increase their reach on Twitter. You can access it here: https://blog-to-thread.up.railway.app/.

## Setup

1. Copy `.env.example` to `.env` and replace `your_openai_api_key_here` with your actual API key.

## Usage

1. Open https://blog-to-thread.up.railway.app/.
2. Paste the blog post you want to convert into the prompt box and click generate.
3. Once your Tweet Thread has been generated, you can copy the individual Tweets and publish them on your Twitter account.

## Features and technologies

- Frontend: React & CSS.
- Backend serverless function: NextJS.
- Utilises OpenAI API.
- gpt-3.5-turbo-instruct model.
- Base prompt created following experimentation using OpenAI playground.
- Temperature and max tokens optimised following experimentation in playground.
- Continuous deployment to Railway directly from GitHub.

## Future considerations

- Optimised outputs depending on input length.
- Optimised outputs depending on user-defined criteria, such as: thread length, Tweet brevity, use of emojis and Tweets optimised for higher engagement.
- Integrate with Twitter so outputs are automatically Tweeted.
- User ability to edit output.
- "Tweet this now" button following output/edit.
- Save output to Tweet drafts.
- Chrome extension which can convert directly from source to Twitter.

Built with [Buildspace](https://buildspace.so).
