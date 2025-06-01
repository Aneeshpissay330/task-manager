const resetPasswordEmailTemplate = (userName, resetLink) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reset Your Password</title>
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
        <h1>Reset Your Password</h1>
      </div>
      <div class="content">
        <p>Hi ${userName},</p>
        <p>We received a request to reset your password. Click the button below to choose a new password. This link will expire in <strong>one hour</strong>.</p>
        <a href="${resetLink}" class="button">Set a New Password</a>
        <p>If the button doesn’t work, copy and paste this URL into your browser:</p>
        <p><a href="${resetLink}">${resetLink}</a></p>
        <p>If you didn’t request a password reset, you can safely ignore this email.</p>
        <p>Thanks,<br />Task Manager</p>
      </div>
      <div class="footer">
        &copy; ${new Date().getFullYear()} UXPilot. All rights reserved.
      </div>
    </div>
  </body>
  </html>
  `;
};

export default resetPasswordEmailTemplate;
