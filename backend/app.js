const express = require('express');



const app = express();
const port = 8888;              // 서버포트번호


// TEST
app.get('/', (req, res) => {
    res.send("Test Good");
});

app.listen(port, () => {
    console.log(`서버시작 Port:${port}`);
});