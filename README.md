```
  __________  ________  _______  ____  _____    ____  ______   _       _____    ____
 /_  __/ __ \/ ____/  |/  / __ \/ __ \/ ___/   / __ \/ ____/  | |     / /   |  / __ \
  / / / /_/ / __/ / /|_/ / / / / /_/ /\__ \   / / / / /_      | | /| / / /| | / /_/ /
 / / / _, _/ /___/ /  / / /_/ / _, _/___/ /  / /_/ / __/      | |/ |/ / ___ |/ _, _/
/_/ /_/ |_/_____/_/  /_/\____/_/ |_|/____/   \____/_/         |__/|__/_/  |_/_/ |_|
```

![alt text](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
<img src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white" />
<img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" />
<img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" />

---

### 🏰 Choose your Ruleset

### 🐉 Select your army Faction

### 🏹 Build your models

### 📃 Complete your army list

### 🔥 PLAY

---

If you're a battle game enthusiast, you know that creating the perfect army is key to achieving victory on the battlefield. Tremors of War is the ultimate tool to help you customize your models and build your army with ease.

---

<img src="docs\start_screen_image.PNG" />

🌎 [Tremors of War](https://tremorsofwar.com/) &nbsp; | &nbsp;
🎨 [Figma](https://www.figma.com/file/HkyeNNaQfRiU74VjAM8IOB/Warhammer-List-Builder?node-id=10401%3A129274&t=cV9yLwXfCMko7IyZ-1)

# Development

## Node

Pre-requisites:

- node v16
- npm

Setup:

```bash
# Install deps
npm install

# Run locally
npm run dev
```

## Python

We use python to parse the `Database.xlsx` file and generate the `./src/data.json` file.

Pre-requisites:

- Python v3.11
- Poetry
- pyenv

Setup:

```bash
cd ./data_parser/

# Create Virtualenv
pyenv virtualenv 3.11 tremors-of-war
pyenv local tremors-of-war

# Install deps
pip install --upgrade pip
poetry install

# Build database.json from Database.xlsx
./main.py
```

## Publishing a release

```
# On the main branch
npm version patch
git push -u origin main --tags
```
