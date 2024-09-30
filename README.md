# 🛍️ mytheresa-assessment 

Welcome to the FashionHub testing project! This project allows you to automate and run tests for the FashionHub application using Playwright, both locally and across different environments. Let’s walk you through the steps to get started. 🚀

## 🛠️ Prerequisites

Before you begin, make sure you have the siguiente:

- **[Docker](https://www.docker.com/get-started)** installed 🐋
- **[Docker Compose](https://docs.docker.com/compose/)** installed 🐳
- **[Node.js](https://nodejs.org/)** installed 
- **[TypeScript](https://www.typescriptlang.org/)** installed (this will be included automatically if you run the project with Docker) 📜
- **[Playwright](https://playwright.dev/)** installed (this will be included automatically if you run the project with Docker)
- A `.env` file with the necessary credentials (details below)

---

## 🔧 How to Run the Project

You can run this project in two different ways: **locally** or with **Docker Compose** in múltiples entornos.

### 1️⃣ Running Locally

You'll need to run the **FashionHub Demo App** locally in a container using Docker. 

1. Run the **FashionHub Demo App** with the following command:

   ```bash
   docker run -d -p 4000:4000 pocketaces2/fashionhub-demo-app
   ```

2.	Set up a .env file in the root of your project. This file should include the following environment variables:

 ```
USERNAME=your_username
PASSWORD=your_password
GITHUB_REPO=appwrite/appwrite
BASE_URL= 
 ```

Make sure to replace your_username and your_password with the actual credentials for the tests.

3.	After setting up the .env file, you can execute the Playwright tests:

 ```
npx playwright test
 ```

4.	Once the tests complete, you’ll get a link to view the report:

    http://localhost:9323  Open this URL to see the test results! 🎉


### 2️⃣ Running with Docker Compose 🐳

You can also run the tests across different environments (Local, Staging, and Production) using Docker Compose.

Environment URLs 🌍:

	•	Local: http://fashionhub-demo-app:4000
	•	Staging: https://staging-env/fashionhub/
	•	Production: https://pocketaces2.github.io/fashionhub/


Run the commands below, depending on the environment you’d like to test in:

### 🚀 Commands to run:

### Local environment:
 
 ```
docker compose --profile local up --build
 ```

### Staging environment:
 
 ```
docker compose --profile staging up --build
 ```

### Production environment:
 
 ```
docker compose --profile prod up --build
 ```

🚨 Important: Make sure you have the .env file properly configured with all the necessary variables (USERNAME, PASSWORD, GITHUB_REPO, and BASE_URL) before running the commands!

### 🧪 Viewing Test Results

Once the tests are finished, you’ll see a message like this in the terminal:

```
	Serving HTML report at http://0.0.0.0:9323
```

Simply open this URL in your browser, and you’ll be able to view the detailed test results and report! 🎉📊

---

#### 📂 Node Version Management with `.nvmrc`

This project includes a `.nvmrc` file to ensure consistency in the Node.js version across all environments. If you're using **[NVM (Node Version Manager)](https://github.com/nvm-sh/nvm)**, you can easily switch to the correct version of Node.js by running:

```
nvm use
```
This command will automatically set the Node.js version specified in the .nvmrc file, helping everyone on the team work with the same version of Node.js. 

### 🛠️ Tech Stack

	•	Playwright for end-to-end testing
	•	Docker and Docker Compose for managing different environments
	•	Node.js and TypeScript for test automation


Time to automate!🤖