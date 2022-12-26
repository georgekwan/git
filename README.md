# GitHub User Lookup

This React app allows users to search for GitHub users by username, using the GitHub REST API. The app is built with Tailwind CSS for styling and Daisy UI for user interface components.

## Getting Started

1. Clone this repository

```bash
git clone https://github.com/georgekwan/github-finder.git
cd github-finder

```

2. Set up a personal access token with the user scope in GitHub.
3. Create a file called .env at the root of the project and add the following line, replacing YOUR_TOKEN with your personal access token:

```bash
  REACT_APP_GITHUB_TOKEN=YOUR_TOKEN
```

4. Install dependencies

```bash
  npm install
```

5. Start the development server:

```bash
  npm start
```

## Features

- Search for GitHub users by username
- View basic profile information for each user, including their name, avatar, and number of followers
- See a list of the user's public repositories, with links to view them on GitHub

## Technology

- [React](https://reactjs.org/) for building the user interface
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Daisy UI](https://daisyui.com/) for user interface components
- [GitHub REST API](https://docs.github.com/en/rest?apiVersion=2022-11-28) for fetching user data
