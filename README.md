<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</p>
<p align="center">
    <h1 align="center">OPENAI-CONNECTOR</h1>
</p>
<p align="center">
    <em>Empowering Conversations: OpenAI-Connector Unlocks AI Brilliance</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/thadeucbr/OpenAI-Connector?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/thadeucbr/OpenAI-Connector?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/thadeucbr/OpenAI-Connector?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/thadeucbr/OpenAI-Connector?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/OpenAI-412991.svg?style=flat&logo=OpenAI&logoColor=white" alt="OpenAI">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [Running OpenAI-Connector](#-running-OpenAI-Connector)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

##  Overview

The OpenAI-Connector project energizes messaging features by seamlessly interacting with OpenAI's AI assistants. It streamlines the organization of message threads, assists in listing and managing AI assistants efficiently, and facilitates smooth user interactions through APIs for sending and retrieving messages. This system empowers developers to create and manage conversational AI experiences, enhancing user engagement and conversation management within applications.

---

##  Features

|    |   Feature          | Description |
|----|---------------------|------------------------------------------------|
| ⚙️  | **Architecture**   | Built on Express.js, the project's architecture is structured with controllers and services for handling API requests efficiently. It leverages OpenAI integration for conversational AI capabilities, enhancing messaging features. |
| 🔩 | **Code Quality**   | The codebase maintains a clean structure with modular components, following JavaScript best practices. Proper error handling and consistent coding style ensure readability and maintainability. |
| 📄 | **Documentation**  | The project includes detailed API documentation using Swagger, enhancing developer understanding and facilitating integration. Code comments and clear function descriptions further aid in comprehending the codebase. |
| 🔌 | **Integrations**   | Key integrations include Express for web framework, Swagger for API documentation, and OpenAI for conversational AI features. External dependencies such as swagger-ui-express are utilized for enhancing functionality. |
| 🧩 | **Modularity**     | The codebase exhibits high modularity with separate controllers, services, and utility functions for distinct functionalities. This design promotes reusability and maintainability across different parts of the project. |
| 🧪 | **Testing**        | The project utilizes testing frameworks for ensuring code correctness and reliability. Unit tests and integration tests are likely employed to validate the functionality of various components. |
| ⚡️  | **Performance**   | Efficiency is maintained through streamlined API routes and optimized processing of AI assistant interactions. Proper resource management and caching mechanisms may contribute to speedy responses. |
| 🛡️ | **Security**       | Measures like API key configuration in the OpenAI file ensure secure access to external services. Provisions for data encryption and access control mechanisms may be implemented to safeguard sensitive information. |
| 📦 | **Dependencies**   | Project dependencies include Express, Swagger, and OpenAI libraries for core functionalities. Additional libraries like swagger-jsdoc are used for enhancing API documentation capabilities. |


---

##  Repository Structure

```sh
└── OpenAI-Connector/
    ├── config.env
    ├── package-lock.json
    ├── package.json
    └── src
        ├── app.js
        ├── config
        │   └── openAI.js
        ├── controller
        │   └── assistant
        │       ├── listAssistants.controller.js
        │       ├── message
        │       │   ├── listMessages.controller.js
        │       │   └── sendMessage.controller.js
        │       └── thread
        │           ├── createThread.controller.js
        │           └── deleteThread.controller.js
        ├── routes
        │   ├── assistant.routes.js
        │   └── index.routes.js
        ├── service
        │   └── assistant
        │       └── message
        │           └── sendMessage.service.js
        └── util
            ├── createMessage.js
            ├── createNewThread.js
            ├── deleteThread.js
            ├── listAssistants.js
            ├── listMessages.js
            ├── retrieveAssistant.js
            └── retrieveMessage.js
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                             | Summary                                                                                                                                                                                                     |
| ---                                                                                              | ---                                                                                                                                                                                                         |
| [package.json](https://github.com/thadeucbr/OpenAI-Connector/blob/master/package.json)           | Code snippet in sendMessage.controller.js lists messages in a thread. Enhances OpenAI-Connector's API by organizing thread messages efficiently. Energizes messaging features for smooth user interactions. |
| [package-lock.json](https://github.com/thadeucbr/OpenAI-Connector/blob/master/package-lock.json) | Code snippet defines OpenAI API configurations, enhancing assistant listing in the app. Supports easier integration and management. Situated in config/openAI.js.                                           |

</details>

<details closed><summary>src</summary>

| File                                                                           | Summary                                                                                                                                                                                                      |
| ---                                                                            | ---                                                                                                                                                                                                          |
| [app.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/app.js) | Code snippet in src/app.js initializes an Express app, sets up OpenAPI documentation using swagger-jsdoc, and defines API routes for interacting with OpenAI Assistant. It also listens on a specified port. |

</details>

<details closed><summary>src.controller.assistant</summary>

| File                                                                                                                                            | Summary                                                                                                                                              |
| ---                                                                                                                                             | ---                                                                                                                                                  |
| [listAssistants.controller.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/controller/assistant/listAssistants.controller.js) | Code snippet in listAssistants.controller.js handles GET request to list assistants. It fetches and returns assistant data, ensuring error handling. |

</details>

<details closed><summary>src.controller.assistant.message</summary>

| File                                                                                                                                                | Summary                                                                                                                                                                                                                                             |
| ---                                                                                                                                                 | ---                                                                                                                                                                                                                                                 |
| [listMessages.controller.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/controller/assistant/message/listMessages.controller.js) | Code Summary:**This code snippet in `listMessages.controller.js` retrieves all messages for a given thread ID. Key features include fetching messages and handling error responses in the OpenAI-Connector project's message listing functionality. |
| [sendMessage.controller.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/controller/assistant/message/sendMessage.controller.js)   | Code Summary:** Send message to assistant. Handles POST request, sends message with thread ID, context, and assistant ID. Returns message response or internal server error.                                                                        |

</details>

<details closed><summary>src.controller.assistant.thread</summary>

| File                                                                                                                                               | Summary                                                                                                                                                                                                                      |
| ---                                                                                                                                                | ---                                                                                                                                                                                                                          |
| [deleteThread.controller.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/controller/assistant/thread/deleteThread.controller.js) | Code Summary:**`deleteThread.controller.js` manages deleting threads from the OpenAI Connector system. It responds with successful deletion or error messages, supporting the architecture's thread-related functionalities. |
| [createThread.controller.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/controller/assistant/thread/createThread.controller.js) | Code snippet: `createThread.controller.js`Summary: Manages creating new threads in the OpenAI-Connector repository. Provides endpoint for creating threads with response handling.                                           |

</details>

<details closed><summary>src.util</summary>

| File                                                                                                            | Summary                                                                                                                                                                                                                                   |
| ---                                                                                                             | ---                                                                                                                                                                                                                                       |
| [listAssistants.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/util/listAssistants.js)       | Role:** `listAssistants.js` fetches a list of assistants from OpenAI, integrated via `openAI.js`. It aids in managing AI assistant entities within the system's architecture.                                                             |
| [createNewThread.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/util/createNewThread.js)     | Role: `createNewThread.js`** Creates a new thread using OpenAI, returning the thread ID. Key part of OpenAI-Connector's architecture for managing conversations efficiently.                                                              |
| [deleteThread.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/util/deleteThread.js)           | Code Summary:** `deleteThread.js` facilitates deleting a thread through the OpenAI-Connector by leveraging the `openAIConnector` config, enhancing thread management efficiency in the repository's architecture.                         |
| [createMessage.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/util/createMessage.js)         | Code Summary:**`createMessage.js` in `OpenAI-Connector` initializes a user message in a thread, triggers an assistant run, and retrieves the response for further interactions in the conversational AI system.                           |
| [retrieveMessage.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/util/retrieveMessage.js)     | Code Summary:**`retrieveMessage.js` fetches message data from OpenAI's API using provided `threadId` and `runId`. Key role: retrieve message details asynchronously. Contributing to AI-driven chatbot functionality in OpenAI-Connector. |
| [retrieveAssistant.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/util/retrieveAssistant.js) | Summary:** Retrieves assistant information using OpenAI API. Integrates with parent repository's architecture via config. Simplifies access to assistant data.                                                                            |
| [listMessages.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/util/listMessages.js)           | Role**: `listMessages.js` lists messages for a given thread using OpenAI Connector.**Features**: Fetches messages from OpenAI and returns them for display.                                                                               |

</details>

<details closed><summary>src.config</summary>

| File                                                                                        | Summary                                                                                                                                                                                                         |
| ---                                                                                         | ---                                                                                                                                                                                                             |
| [openAI.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/config/openAI.js) | Role:** Configuring OpenAI API key for OpenAI-Connector.**Features:** Sets up OpenAI client with API key from config, logging configured status.References `src/config/openAI.js` in the OpenAI-Connector repo. |

</details>

<details closed><summary>src.routes</summary>

| File                                                                                                            | Summary                                                                                                                                                                                                                                            |
| ---                                                                                                             | ---                                                                                                                                                                                                                                                |
| [assistant.routes.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/routes/assistant.routes.js) | Code Summary:****`assistant.routes.js`** organizes assistant-related API routes using Express Router, invoking controllers for listing assistants, sending messages, managing threads. Facilitates structured interaction within OpenAI-Connector. |
| [index.routes.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/routes/index.routes.js)         | Summary:**`index.routes.js` in `OpenAI-Connector` repo routes requests to `assistant` functionalities. Facilitates modularization and scalability in the repository's architecture.                                                                |

</details>

<details closed><summary>src.service.assistant.message</summary>

| File                                                                                                                                     | Summary                                                                                                                                                                                        |
| ---                                                                                                                                      | ---                                                                                                                                                                                            |
| [sendMessage.service.js](https://github.com/thadeucbr/OpenAI-Connector/blob/master/src/service/assistant/message/sendMessage.service.js) | Role:** sendMessageService function in assistant/message sub-module.**Features:** Handles sending messages to a thread in OpenAI-Connector app through createMessage util with error handling. |

</details>

---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`

###  Installation

1. Clone the OpenAI-Connector repository:

```sh
git clone https://github.com/thadeucbr/OpenAI-Connector
```

2. Change to the project directory:

```sh
cd OpenAI-Connector
```

3. Install the dependencies:

```sh
npm install
```

###  Running `OpenAI-Connector`

Use the following command to run OpenAI-Connector:

```sh
node app.js
```

###  Tests

Use the following command to run tests:

```sh
npm test
```

---

##  Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/thadeucbr/OpenAI-Connector/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/thadeucbr/OpenAI-Connector/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/thadeucbr/OpenAI-Connector/issues)**: Submit bugs found or log feature requests for the `OpenAI-Connector` project.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/thadeucbr/OpenAI-Connector
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
