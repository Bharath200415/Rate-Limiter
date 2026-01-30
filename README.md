# 🚦Rate Limiter using Redis (Node.js + Express)

A simple and scalable **rate-limiting middleware** implemented using **Node.js, Express, and Redis**.  
This project demonstrates how Redis can be used to efficiently control the number of requests from a client within a fixed time window.

---

## 📌 Why Rate Limiting?

Rate limiting helps:
- Prevent **API abuse**
- Protect against **DDoS attacks**
- Ensure **fair usage** of resources
- Improve overall **system stability**

Redis is used because it is:
- Extremely fast (in-memory)
- Supports atomic operations
- Ideal for distributed systems

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **Redis** (via `ioredis`)
- **dotenv** (for environment variables)

---

## 📂 Project Structure
```
├── helpers/
│   ├── redis/    # Static assets
├── index.js
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── package.json
├── README.md

```

## ⚙️ How It Works

- Each incoming request is identified by the **client IP address**
- Redis stores a **counter per IP**
- The counter is incremented on every request
- If the count exceeds the allowed limit within the time window:
  - Server responds with **HTTP 429 (Too Many Requests)**
- Redis automatically expires keys after the defined time window

---

## ⏱ Rate Limiting Rules

| Rule | Value |
|----|------|
| Max Requests | 5 |
| Time Window | 20 seconds |
| Storage | Redis |
| Strategy | Fixed Window Counter |

---
## Follow the steps below to set up and run the project locally.

#### 1️⃣ Initialize the Node.js project

If you are starting from scratch, initialize a Node.js project:

```bash
npm init -y
```
### 2️⃣ Install required dependencies

Install Express (server framework):

```bash
npm install express
```
Install ip and ioredis 

```bash
npm install ip ioredis
```
### 3️⃣ Install development dependency (Nodemon)

Nodemon automatically restarts the server on file changes:

```bash
npm install -g nodemon
```

### 🔑 Environment Variables

---
Create a `.env` file in the project root:

```env
PORT=3000

REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_USERNAME=default
REDIS_PASSWORD=your_redis_password

```
### Run the application locally
For development: 
```bash
npm run dev
```
```bash 
npm start
```
Server will start at
```bash
http://localhost:3000
```

## 🧪 Testing the Rate Limiter
### Send multiple requests to the server:
Use postman to send *get* requests to the server or 
```bash 
curl http://localhost:3000
```
After exceeding the allowed limit, the server responds with:
```bash
HTTP/1.1 429 Too Many Requests
```
---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome.  
Feel free to fork the repository and submit a pull request.

---

## ⭐ Support
If you found this project useful, consider giving it a ⭐ on GitHub.

---