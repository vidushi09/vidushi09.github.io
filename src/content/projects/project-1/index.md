---
title: "Chatbot"
summary: "Virtual Assistant"
date: "Dec 18 2019"
draft: false
tags:
- Python

# demoUrl: ''
# repoUrl: ''
---
 Designed and implemented a Python-based chatbot utilizing the re library to enhance text interaction efficiency and user experience. Leveraged regular expressions for advanced pattern recognition, enabling the chatbot to seamlessly handle a variety of user queries including greetings, farewells, and support requests. This innovation streamlined operations by automating responses, significantly improving the conversational process and user engagement.
 <br>*Technologies used: Python, re library.*

### A small write-up on how you can create a basic chatbot
 **Step 1: Setting up the chatbot structure**
<br>We'll define a basic structure for our chatbot, including a function to handle user input and generate responses based on predefined patterns.

```python

import re

class Chatbot:
    def __init__(self):
        self.responses = {
            'hello': "Hello! How can I help you today?",
            'bye': "Goodbye! Have a great day!",
            'help': "I am here to help you. What do you need assistance with?",
        }
        self.default_response = "I'm sorry, I didn't understand that."

    def get_response(self, user_input):
        for pattern, response in self.responses.items():
            if re.search(pattern, user_input, re.IGNORECASE):
                return response
        return self.default_response

    def start_chat(self):
        print("Chatbot: Hi there! Type 'bye' to exit.")
        while True:
            user_input = input("You: ")
            if re.search('bye', user_input, re.IGNORECASE):
                print("Chatbot:", self.get_response('bye'))
                break
            else:
                print("Chatbot:", self.get_response(user_input))

if __name__ == "__main__":
    bot = Chatbot()
    bot.start_chat()

```

 *This basic structure provides a foundation to build a chatbot and that's what I explored in much more detail in my project*
