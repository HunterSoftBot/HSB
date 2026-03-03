export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL required" });
  }

  const apiKey = process.env.TIKTOK_API_KEY;

  try {
    const response = await fetch(
      `https://api.botcahx.eu.org/api/dowloader/tiktok?url=${encodeURIComponent(url)}&apikey=${apiKey}`
    );

    const data = await response.json();

    if (data.status) {
      return res.status(200).json(data);
    } else {
      return res.status(400).json({ error: "Download gagal" });
    }

  } catch (err) {
    return res.status(500).json({ error: "Terjadi kesalahan server" });
  }
}