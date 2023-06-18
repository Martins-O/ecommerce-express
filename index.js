const express = require('express')
const dotenv = require('dotenv');
const sendinblue = require('sib-api-v3-sdk');

dotenv.config();

const app = express();
app.listen(port, () => {
    console.log(`::::::Server started on port ${port}::::::`);
});

const port = process.env.PORT ||`127.0.0.1`;

function message(name, subject, htmlContent, recipients) {
    const client = sendinblue.ApiClient.instance;
    const apiKey = client.authentications['api-key'];
    apiKey.apiKey = process.env.API_KEY;
    const apiInstance = new sendinblue.EmailCampaignAPI();
    var emailCampaigns = sendinblue.CreateEmailCampaign();
    emailCampaigns.name = name;
    emailCampaigns.subject = subject;
    emailCampaigns.sender = {"name": "Ecommerce App", "email": "noreply@gmail.com"};
    emailCampaigns.type = "classic";
    htmlContent: htmlContent;
    recipients: recipients;
    scheduleAt: '';
}

message();



