const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const { port } = require("./config.json");

const app = express();
app.use(cors());

const allowedFormats = ["mp3", "mp4"];
const ytdlOptions = {
	mp3: { format: "mp3", filter: "audioonly", quality: "highestaudio" },
	mp4: { format: "mp4", filter: "audioandvideo", quality: "highest" },
};

app.listen(port, () => {
	console.log(`Starting Server on port: ${port}`);
});

app.get("/convert", async (req, res) => {
	const videoURL = req.query.url;
	const format = req.query.format;

	if (!videoURL || !format)
		return res.status(400).send("URL and Format are required!");

	if (!ytdl.validateURL(videoURL)) return res.status(400).send("Invalid URL!");

	if (!allowedFormats.includes(format))
		return res.status(400).send("Unsupported Format!");

	try {
		const info = await ytdl.getBasicInfo(videoURL);

		const videoTitle = info.videoDetails.title;

		res.header(
			"Content-Disposition",
			`attachment; filename="${videoTitle}.${format}"`
		);

		const stream = ytdl(videoURL, ytdlOptions[format]);

		let isAborted = false;

		req.on("close", () => {
			if (!isAborted) {
				isAborted = true;
				stream.destroy();
			}
		});

		stream.on("error", (err) => {
			isAborted = true;
			res.status(500).send("An error occurred while downloading the video!");
		});

		if (!isAborted) stream.pipe(res);
	} catch (err) {
		if (err.message.includes("private"))
			return res.status(403).send("The video is private!");
		console.log(err.message);
		return res
			.status(500)
			.send("An error occurred while downloading the video!");
	}
});
