---
title: "Chatbot"
summary: "Virtual Assistant"
date: "Dec 18 2019"
draft: false
tags:
- Python
- Regular Expressions
- User Interface
- Text-to-Speech (TTS) 
- Regex

# demoUrl: ''
# repoUrl: ''
---
 Designed and implemented a Python-based chatbot utilizing the re library to enhance text interaction efficiency and user experience. Leveraged regular expressions for advanced pattern recognition, enabling the chatbot to seamlessly handle a variety of user queries including greetings, farewells, and support requests. This innovation streamlined operations by automating responses, significantly improving the conversational process and user engagement.
 <br>*Technologies used: Python, re library.*

### Example
Here is an example of a simple Python chatbot using the re library:
<br><br> **Step 1: Setting up the chatbot structure**
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

### Explanation:
1. Initialization: The Chatbot class is initialized with a dictionary of responses. Each key in the dictionary is a pattern to match user input, and each value is the corresponding response.

2. Pattern Matching: The get_response method uses the re.search function to check if any of the patterns in the dictionary match the user's input. If a match is found, the corresponding response is returned. If no matches are found, a default response is returned.

3. Chat Loop: The start_chat method runs a loop to keep the conversation going until the user types 'bye'. For each user input, it calls get_response to determine the chatbot's reply.

<br> **Step 2: Enhancing the chatbot**
<br>We can enhance the chatbot by adding more patterns and responses, and by implementing more sophisticated pattern matching.

```python

import re

class Chatbot:
    def __init__(self):
        self.responses = {
            r'hello|hi|hey': "Hello! How can I help you today?",
            r'bye|goodbye': "Goodbye! Have a great day!",
            r'help': "I am here to help you. What do you need assistance with?",
            r'how are you': "I'm just a bot, but I'm doing great! How about you?",
            r'what is your name': "I am a chatbot created to assist you.",
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
            if re.search(r'bye|goodbye', user_input, re.IGNORECASE):
                print("Chatbot:", self.get_response('bye'))
                break
            else:
                print("Chatbot:", self.get_response(user_input))

if __name__ == "__main__":
    bot = Chatbot()
    bot.start_chat()
```

Further Enhancements:
- Contextual Responses: Implement a state machine to keep track of the conversation context and provide more relevant responses.
- Integration with APIs: Enhance the chatbot with external APIs to provide functionalities like weather updates, news, or simple calculations.
- Natural Language Processing: Integrate libraries such as NLTK or spaCy for more advanced text processing and understanding.

 *This basic structure provides a foundation to build a chatbot*
