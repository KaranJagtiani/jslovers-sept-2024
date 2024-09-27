# Becoming a 10x Engineer with AI and New-Age Tools

This repository is part of a talk given at the [JSLovers September 2024 Meetup](https://www.meetup.com/jslovers-pune/events/302751894/) titled "Becoming a 10x Engineer with AI and New-Age Tools".

## Folder Structure

- `todo-app1` - Todo app created using Continue and Ollama.
- `todo-app2` - Todo app created using v0 with shadcn.
- `continue.config.json` - Continue config file used in the talk.

## Tools Used

- Continue VSCode Extension - [Link](https://docs.continue.dev/)
- Ollama - [Link](https://ollama.com/download)

## Models Used with Continue

- llama3.2:3b (2 GB) - [Link](https://ollama.com/library/llama3.2)
- starcoder2:3b (1 GB) - [Link](https://ollama.com/library/starcoder2)

## Ollama Model Installation Commands

```base
ollama run starcoder2:3b

ollama run llama3.2
```

## Next App Create Commands

```bash
npx create-next-app@latest todo-app1 --use-yarn --ts --eslint --app --src-dir --tailwind

npx create-next-app@latest todo-app2 --use-yarn --ts --eslint --app --src-dir --tailwind
```

## Prompts

_1. Continue.dev + Ollama_

This is a Next.js 14 project. I want to create a modern looking todo list application. Provide the entire component file with all the functionalities of a todo list application. The following functionalities need to be added:

1. add a task

2. delete a task

No need to make any API calls and use bare bones tailwind css for styling. Assume this is going to be directly added as the main component of the next.js project.

_2. v0 with shadcn_

Create a modern, minimalistic, dark-themed todo list application that uses material like UI

## Iterm - Ollama Setup

1. Make sure that Ollama is running
2. Install the Iterm AI Plugin - [Link](https://iterm2.com/ai-plugin.html) and start the AI Plugin
3. Go to the settings of Iterm
4. Go to the AI tab under the General section
5. Enter anything random in the OpenAI API Key field like 'foo'
6. The following can be set as the system prompt:

```
Return commands suitable for executing directly into \(shell) on \(uname).

- Do not add any back quotes on the resulting command
- Do not add any description or explanation about the commmand
- Only show a single command
- No additional text besides the command to run
- Consider the target machine \(uname) to generate a command that works for the OS and CPU architecture
- Consider the aliases that are configured in the file ~/.aliases

The script should do this: \(ai.prompt)
```

7. Type in the model that you want to use in the 'Model' field like 'llama3.2'
8. Change the Custom URL to "http://localhost:11434/v1/chat/completions"
