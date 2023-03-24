# YouTubeConverterAPI

A nodejs API used for downloading YouTube videos in the following formats: mp3,mp4

## Requirements

- [NodeJS](https://nodejs.org/)
- [Docker](https://www.docker.com/) (Optional)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/DarkWalker19/YouTubeConverterAPI
   ```
2. Navigate to the project directory:
   ```bash
   cd YouTubeConverterAPI
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```
4. Start the API:
   `bash
npm start
`
   The API should now be available at http://localhost:9000 by default.

## Installation for Docker

1. Clone this repository:
   ```bash
   git clone https://github.com/DarkWalker19/YouTubeConverterAPI
   ```
2. Navigate to the project directory:
   ```bash
   cd YouTubeConverterAPI
   ```
3. Install the necessary dependencies:
   ```bash
   docker build -t youtubeconverterapi .
   ```
4. Run the Docker container:
   ```bash
   docker run -d --name youtubeconverterapi -p 9000:9000 youtubeconverterapi
   ```

The API should now be available at http://localhost:9000 by default.

## Usage

1. Navigate a YouTube video that you want to convert.

2. Copy the video URL.

3. Access the API at http://localhost:9000/?url=<YouTube video URL\>&format=<mp3|mp4\>.

4. Wait for the download to complete.