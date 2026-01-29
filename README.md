# Rate Limiter using Redis (Node.js + Express)

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
| Time Window | 30 seconds |
| Storage | Redis |
| Strategy | Fixed Window Counter |

---

## 🔑 Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000

REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_USERNAME=default
REDIS_PASSWORD=your_redis_password


