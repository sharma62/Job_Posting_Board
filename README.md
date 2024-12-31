# Job Posting Board with Email Automation

## Objective
The purpose of this project is to design and implement a full-stack job posting board where companies can:
- Register and verify their accounts via email.
- Post jobs after verification.
- Send automated job alerts to candidates via email.

This project uses the MERN stack (MongoDB, Express.js, React.js, Node.js) and demonstrates authentication, email automation, and responsive UI design.

---

## Functional Requirements

### **User Registration (Company):**
- Companies can register by providing their basic details.
- Email and mobile verification must be implemented to activate the account.
- Unverified users should not be allowed to post jobs.

### **Company Login:**
- Implement an auto login system using JWT or session-based authentication.

### **Job Posting:**
- Authenticated companies can post jobs with the following details:
  - Job Title
  - Job Description
  - Experience Level
  - Candidate Emails
  - Job End Date

### **Candidate Email Automation:**
- Companies can send job alerts or updates to multiple candidates via email.
- Use Nodemailer (or a similar email service) to automate email sending.
- Ensure emails contain:
  - Job Details
  - Sender Information

### **Logout:**
- Provide a logout option to clear tokens or sessions.

---

## Technical Requirements

### **Frontend (React.js):**
- Build a responsive UI following the provided Figma design ([Figma Link](https://www.figma.com/design/3ru768FzQDG5J6CLC1IPB4/Cuvette-Assignment?node-id=0-1&t=4kRZ1x3vuXhWBiu7-1)).
- Include forms for:
  - Company Registration
  - Login
  - Job Posting

### **Backend (Node.js & Express.js):**
- Set up RESTful APIs for:
  - User Registration
  - Login
  - Job Posting
  - Email Automation
- Use Nodemailer to handle email automation.
- Implement validation for all inputs to ensure data consistency.

### **Database (MongoDB):**
- Store the following:
  - Company Details
  - Job Postings
  - Email Logs

### **Authentication:**
- Use JWT or session-based authentication to protect routes and ensure secure access.

---

## Bonus Features (Optional)
- Implement email templates for a more personalized candidate experience.

---

## Submission Guidelines

### **Steps to Submit:**
1. **GitHub Repository:**
   - Upload your code to a public GitHub repository.
   - Include a `README.md` file with the following details:
     - Project Overview
     - Setup Instructions
     - How to Run the Project Locally
2. **Deployment:**
   - Deploy the frontend (e.g., Vercel/Netlify).
   - Deploy the backend (e.g., Render/Heroku).
   - Submit the live demo link.
3. **Video Demo:**
   - Record a 3-4 minute video explaining the project.
   - Ensure your face is visible while explaining the functionality.
   - Use Loom (https://www.loom.com/) for recording.

### **Final Submission:**
Submit the following:
- GitHub repository link.
- Live demo link.
- Loom video link.

---

## Example README.md Structure

```markdown
# Job Posting Board with Email Automation

## Overview
This project is a full-stack application built using the MERN stack. It allows companies to register, post jobs, and send automated email alerts to candidates.

## Features
- Company registration with email and mobile verification.
- Secure login using JWT authentication.
- Job posting with required details.
- Automated email alerts to candidates using Nodemailer.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Email Automation:** Nodemailer

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone [repo-link]
   ```
2. Navigate to the project folder and install dependencies:
   ```bash
   cd [folder-name]
   npm install
   cd client
   npm install
   ```
3. Set up environment variables for the backend:
   ```plaintext
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   EMAIL_SERVICE=<your-email-service>
   EMAIL_USER=<your-email>
   EMAIL_PASS=<your-email-password>
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
5. Start the frontend server:
   ```bash
   cd client
   npm start
   ```

## Live Demo
[Deployed Frontend Link](#)  
[Deployed Backend Link](#)

## Video Walkthrough
[Loom Video Link](#)
