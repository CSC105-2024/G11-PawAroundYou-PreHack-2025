
## :wrench: Ma Help Kan

This project focuses on social good and volunteering. We chose to create a community help board for people seeking assistance not only with houseworks but also mental problems. Because many people face problems they don’t fully understand, and it becomes even harder when there’s no one around to help.

Our website was designed to be like a traditional community bulletin board, similar to those found in villages or schools. Based on this concept, users can create, edit, and delete their requests, as well as view all requests posted by others.

---

##  Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CSC105-2024/G11-PawAroundYou-PreHack-2025git
   cd G11-PawAroundYou-PreHack-2025
   ```

---
## :computer: Frontend - React

### :space_invader: Tech Stack

- React.ts
- Vite
- Axios
- React Router DOM
- Tailwind CSS
- Zod

### :bulb: Getting Started - React Client

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The client will be running on [http://localhost:5173](http://localhost:5173).

---

## :open_file_folder: Backend - Node.js

### :space_invader: Tech Stack

- Node.js
- Hono
- JWT

### :electric_plug: API Endpoints

- User 

| Method |          Endpoint               |        Description           |
|--------|---------------------------------|------------------------------|
| POST   | `/user/create`                  | Create new user.             |
| POST   | `/user/login`                   | Login user                   |
| GET    | `/user/get?userId={userId}`     | Get user by using user ID.   |
| GET    | `/user/getLoggedIn`             | Get user loggedin            |
| GET    | `/user/getAll`                  | Get all users                |
| GET    | `/user/requests?userId={userId}`| Get all requests from user   |



- Request

| Method |       Endpoint                           |               Description                    |
|--------|------------------------------------------|----------------------------------------------|
| POST   | `/request/create`                        | Create new request.                         |
| GET    | `/request/get?requestId={requestId}`     | Get request by using request ID.             |
| GET    | `/request/getAll`                        | Get all requests.                            |
| PATCH  | `/request/edit`                          | Edit request.                   |
| DELETE | `/request/delete/?requestId={requestId}` | Delete request.                              |



### :bulb: Getting Started - Node.js Server

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies & Genrate the database:
   ```bash
   npm install
   npx prisma generate
   ```

3. Create a `.env` file and configure the following variables:
   ```
   DATABASE_URL="file:./dev.db"

   JWT_SECRET_TOKEN=66cb176ce3489eb8020d44d492825a259589203dfc4b480556d97f51a742d2a1
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. The server will be running on [http://localhost:3000](http://localhost:3000)

