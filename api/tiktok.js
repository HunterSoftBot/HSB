export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL required" });
  }

  const apiKey = process.env.TIKTOK_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  try {
    const apiUrl = `https://api.botcahx.eu.org/api/dowloader/tiktok?url=${encodeURIComponent(url)}&apikey=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36",
        "Accept": "application/json,text/plain,*/*",
        "Accept-Language": "en-US,en;q=0.9",
        "Connection": "keep-alive",
      },
    });

    const text = await response.text();

    // Coba parse JSON
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      return res.status(500).json({
        error: "Response bukan JSON (kemungkinan diblokir Cloudflare)",
        raw: text.substring(0, 200)
      });
    }

    if (data.status) {
      return res.status(200).json(data);
    } else {
      return res.status(400).json({
        error: "API mengembalikan status false",
        raw: data
      });
    }

  } catch (err) {
    return res.status(500).json({
      error: "Server error",
      detail: err.message
    });
  }
}