const express = require('express');
const db = require("./config/connection")
const app = express();
const routes = require ("./routes")
const PORT = process.env.PORT || 3000; 

app.use(express.json());

app.use(routes)
db.sync({force:false}).then(()=> { 
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})

