## YouTube Video Player App

```markdown

This is a simple React application that allows users to fetch and play unlisted YouTube videos using the YouTube Data API V3.

## Features

- Fetch YouTube video details by entering an unlisted video ID.
- Display the video title and play the video using a custom video player.

## Prerequisites

Before you begin, ensure you have the following:

- Node.js installed on your machine.
- A YouTube Data API V3 key. You can obtain one by creating a project in the [Google Cloud Console](https://console.cloud.google.com/) and enabling the YouTube Data API.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/akashtripathiiiii/youtube-video-app.git
   ```

2. Navigate to the project folder:

   ```bash
   cd youtube-video-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

Replace the placeholders in `src/App.js` with your actual YouTube Data API key:

   ```javascript
   // Replace 'YOUR_API_KEY' with your actual YouTube Data API key
   const apiKey = 'YOUR_API_KEY';
   ```

## Usage

1. Start the React application:

   ```bash
   npm start
   ```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000).

3. Enter the unlisted YouTube video ID in the input field and click "Load Video."

4. The video details will be displayed, and you can play the video using the custom video player.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was created using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html).