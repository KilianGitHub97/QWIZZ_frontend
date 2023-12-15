<p align="center">
  <img src="readme img/backgroundPencil.png">
</p>

# Large Language Models for Analysis of Qualitative Data in Research (Frontend)
This project, developed as a master's project under the guidance of Dr. Mateusz Dolata, holds a web application where users can chat with their own interview data. The user interface is built with React and TypeScript. The frontend utilizes the React Query library to manage global states and make REST API calls.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Technology](#technology)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
Welcome to Qwizz! 🚀

Qwizz, short for "Q" for qualitative interview data and "wizz" as a reference to its chatbot functionality, is the brainchild of Richard Specker, Ivelin Ivanov, and Kilian Sennrich, three master students from the University of Zurich (UZH). With guidance from Dr. Mateusz Dolata of the Department of Informatics - Information Management Research Group, we've developed this user-friendly web application to address the challenges faced by researchers when handling large volumes of qualitative interview data.

Over a series of interviews (reqirement engineering), we've learnt about the struggle of sifting through a mountain of interviews (sometimes more than 50!), trying to extract meaningful insights. Qwizz steps in to assist with this daunting task! It doesn't automate the entire analysis process, but rather acts as your trusty companion, guiding you through your interviews, helping you find your information quickly, and inspiring new ideas.

Qwizz simplifies the process of interacting with your interview data through a chatbot interface. It extracts and presents relevant content to you, allows you to explore relevant interview passages, and ultimately empowers you to make the most of your research journey.

Give Qwizz a try, and let it be your partner in the exploration and understanding of your interview data. Click [here](https://qwizz-frontend.ivelin.info/) to get started. Happy researching! 📚💡

## Installation

Follow these installation steps:

**Clone the Repository**: Begin by cloning the Qwizz frontend repository to your local machine. In your terminal, execute the following command:
```shell
git clone https://github.com/LLM-for-Qualitative-Data-Analysis/frontend
```

**Navigate to the Project Directory**: Change your working directory to the Qwizz-frontend folder:
```shell
cd your/local/qwizz/directory
```

**Install JavaScript Dependencies**: Make sure that you have the latest node.js and npm verisons. Next, install the necessary dependencies using npm:
```shell
npm install
```

**Start the Development Server**: Finally, start the development server:
```shell
npm run start
```

Qwizz's frontend should now be up and running. You can access it through your web browser on http://localhost:8080 . If you encounter any issues during the installation, ensure that you've followed these steps correctly and that your npm environment is properly configured.

## Usage

 In the following you'll discover a selection of the essential features of Qwizz.

![Projects](readme%20img/projects.png)
**Create a New Project!** Projects help you organize your work. They provide you with a dedicated space to cluster related chats and organize your documents. Add a new project by clicking on the New Project button. </br></br>

![Chat](readme%20img/chat.png)
**Create a New Chat and Start Your Conversation!** Within the Chats tab, you can categorize your project into separate chats to keep discussions well-structured. Every chat possesses its own memory, guaranteeing accurate context and personalized interactions. Chats are time-stamped upon creation, and can be renamed using the three dots adjacent to the title. </br></br>

![Summary](readme%20img/summary.png)
**Gain a Comprehensive Overview!** Click the Background Information option in the dropdown menu, which can be accessed by clicking the three dots in the document upload modal. This action will open a modal providing you with a more comprehensive overview of the document. You'll find a word cloud and an AI-generated summary of the entire document. </br></br>

![Notes](readme%20img/notes.png)
**Write Down Your Thoughts!** Click the Notes icon in the icon bar on the left and open the notes section. Clicking on a specific note opens up the editing modal on the right. Don't forget to save your changes. </br></br>

![Settings](readme%20img/settings.png)
**Personalize Your Responses!** Access the Settings to tailor your responses to your preferences. You have the flexibility to modify the language model, adjust the temperature, and define the answer length to meet your specific needs.

This is only an assortment of the functions of the software, a more detailed list of the features can be found on the website's index page.

## Technology
The following technologies are used within the frontend:
- **Deployment**: The frontend is deployed on Heroku.
- **Web Server**: We used Nginx as the web server.
- **Framework**: The frontend is built with React and TypeScript, providing a robust and efficient development environment.
- **Global State Management**: We managed global states with React Query, making it easy to fetch and cache data.
- **Styling**: For UI and styling, we utilized Tailwind CSS, DaisyUI, and react-icons-kit to create a modern and responsive user interface.
- **API Communication**: For REST API communication, we used React Axios within React Query, ensuring efficient data retrieval and management.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear messages.
4. Push your branch to your fork on GitHub.
5. Create a pull request to the main repository's `main` branch.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE.txt) file for details.

**[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)**

## Contact
- **Developer**: Richard Jörg Specker: richardjoerg.specker@uzh.ch
- **Developer**: Ivelin Ivanov: ivelin.ivanov@uzh.ch
- **Developer**: Kilian Sennrich: kilian.sennrich@uzh.ch
- **Supervisor**: Dr. Mateusz Dolata: mateusz.dolata@uzh.ch

Don't hesitate to reach out to us if you have any questions!
