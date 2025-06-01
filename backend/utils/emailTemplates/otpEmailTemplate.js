export const otpEmailTemplate = (userName, otpCode) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your One-Time Password (OTP)</title>
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
      .otp-box {
        display: inline-block;
        margin: 20px 0;
        padding: 16px 24px;
        background-color: #f0f4ff;
        border: 2px dashed #2a7cf6;
        border-radius: 6px;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 4px;
        color: #2a7cf6;
      }
      .footer {
        margin-top: 40px;
        font-size: 13px;
        text-align: center;
        color: #999;
      }
      a {
        color: #2a7cf6;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Your One-Time Password</h1>
      </div>
      <div class="content">
        <p>Hi ${userName},</p>
        <p>We received a request to log in to your account. Use the OTP below to complete your sign-in process. This code will expire in <strong>10 minutes</strong>.</p>
        <div class="otp-box">${otpCode}</div>
        <p>If you did not request this code, please ignore this email or <a href="mailto:aneeshpissay330@gmail.com">Contact Support</a>.</p>
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
