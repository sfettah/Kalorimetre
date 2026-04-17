const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Sadece ana dizindeki statik dosyaları sunar
app.use(express.static(__dirname));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Önizleme sunucusu http://localhost:${PORT} üzerinde çalışıyor`);
});
