const activationEmailTemplate = (userName, activationLink) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verify Your Email</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f9f9f9;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        padding-bottom: 20px;
      }
      .header h1 {
        color: #2a7cf6;
        margin-bottom: 5px;
      }
      .content {
        font-size: 16px;
        line-height: 1.6;
      }
      .button {
        display: inline-block;
        margin-top: 20px;
        padding: 12px 24px;
        background-color: #2a7cf6;
        color: #ffffff;
        text-decoration: none;
        border-radius: 6px;
        font-weight: 600;
      }
      .footer {
        margin-top: 40px;
        font-size: 13px;
        text-align: center;
        color: #999;
      }
      a.button {
        color: #ffffff;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Verify Your Email</h1>
      </div>
      <div class="content">
        <p>Hi ${userName},</p>
        <p>Thank you for signing up for Task Manager. Please click the button below to verify your email address and activate your account:</p>
        <a href="${activationLink}" class="button">Verify My Email</a>
        <p>If the button doesn't work, copy and paste the following link into your browser:</p>
        <p><a href="${activationLink}">${activationLink}</a></p>
        <p>Welcome aboard,<br />Task Manager</p>
      </div>
      <div class="footer">
        &copy; ${new Date().getFullYear()} UXPilot. All rights reserved.
      </div>
    </div>
  </body>
  </html>
  `;
};

export default activationEmailTemplate;