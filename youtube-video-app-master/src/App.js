import React, { useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

const App = () => {
  const [videoId, setVideoId] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const apiKey = 'AIzaSyCJXyuKOoXOeOP5tomls0NGy_R-hweJkmQ';

      const clientId = '644214856325-jgpb9jgmvlv4mkn0pqf0ovicq6eemnmp.apps.googleusercontent.com';

      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,contentDetails`,
      );

      if (response.data.items.length === 0) {
        setError('Video not found');
        return;
      }

      const video = response.data.items[0];
      const videoTitle = video.snippet.title;

      setVideoUrl(`https://www.youtube.com/watch?v=${videoId}`);
      setVideoTitle(video.snippet.title);

    } catch (error) {
      console.error('Error fetching video:', error);
      setError('Error fetching video. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1>YouTube Video Player</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter YouTube Video ID (unlisted):
          <input
            type="text"
            value={videoId}
            onChange={(e) => setVideoId(e.target.value)}
            required
          />
        </label>
        <button type="submit">Load Video</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {videoUrl && (
        <div>
          <h2>{videoTitle}</h2>
          <ReactPlayer url={videoUrl} controls />
        </div>
      )}
    </div>
  );
};

export default App;
