import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname));

app.get('/api/health', (req, res) => {
    res.json({ status: 'online', platform: 'DarkAIs AI Academy', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`🧠 DarkAIs AI Academy running at http://localhost:${PORT}`);
});
