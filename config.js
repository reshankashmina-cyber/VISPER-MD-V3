const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'VISPER-MD&zkckGasyJO' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? 'HjLXInNd0S3lZwJTORksGWG1aUw0JX1tvh8h' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'reshankashmina-cyber' : process.env.SESSION_NAME, 

};

