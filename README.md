# TaskFlow

TaskFlow is a task management web application built with **Node.js, Express.js, PostgreSQL and EJS**.

The project is designed as a practical backend/full-stack learning project, with a focus on **MVC architecture, REST principles, PostgreSQL, CRUD operations and server-side rendering**.

## 🚀 Features

- Create tasks
- View all tasks
- View a task by ID
- Edit tasks
- Delete tasks
- Mark tasks as completed
- Search tasks
- Filter tasks by status and priority
- Sort tasks by different fields
- Responsive user interface
- Server-side rendering with EJS
- PostgreSQL database integration

## 🛠️ Technologies

### Backend

- Node.js
- Express.js
- PostgreSQL
- SQL

### Frontend

- HTML5
- CSS3
- EJS

### Development tools

- npm
- Git
- GitHub
- Postman
- Visual Studio Code

## 🏗️ Architecture

TaskFlow follows the **MVC (Model-View-Controller)** architecture.

```text
Client
  ↓
Router
  ↓
Controller
  ↓
Model
  ↓
PostgreSQL
```

### Project structure

```text
taskflow/
├── config/
│   └── database.js
├── controllers/
│   └── taskController.js
├── models/
│   └── taskModel.js
├── routes/
│   └── taskRoute.js
├── views/
│   ├── index.ejs
│   ├── create.ejs
│   └── edit.ejs
├── public/
│   └── css/
│       └── styles.css
├── .env
├── .gitignore
├── package.json
└── server.js
```

## 📋 Requirements

Before running the project, make sure you have installed:

- Node.js
- npm
- PostgreSQL

## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Go to the project directory:

```bash
cd taskflow
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and configure your PostgreSQL database connection.

Example:

```env
DB_USER=your_user
DB_HOST=localhost
DB_NAME=your_database
DB_PASSWORD=your_password
DB_PORT=5432
```

Create the required PostgreSQL database and `tasks` table.

Then start the application:

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

## 🔄 Task Operations

TaskFlow currently supports the following operations:

| Method | Endpoint              | Description                |
| ------ | --------------------- | -------------------------- |
| GET    | `/tasks`              | Get all tasks              |
| GET    | `/tasks/:id`          | Get a task by ID           |
| GET    | `/tasks/create`       | Display task creation form |
| POST   | `/tasks`              | Create a task              |
| GET    | `/tasks/:id/edit`     | Display task editing form  |
| PATCH  | `/tasks/:id`          | Update a task              |
| PATCH  | `/tasks/:id/complete` | Mark a task as completed   |
| DELETE | `/tasks/:id`          | Delete a task              |
| GET    | `/tasks/search?q=...` | Search tasks               |

Task filtering and sorting are also supported through query parameters.

Examples:

```text
/tasks?status=pending
```

```text
/tasks?priority=high
```

```text
/tasks?sort=due_date&order=asc
```

## 🎯 Project Goals

TaskFlow is also a learning project used to practice and understand:

- Node.js
- Express.js
- REST APIs
- MVC architecture
- Asynchronous JavaScript
- PostgreSQL
- SQL queries
- CRUD operations
- HTTP methods and status codes
- Query parameters
- Dynamic SQL with safe whitelisting
- EJS server-side rendering
- Middleware
- Method override
- Git and GitHub

## 🔜 Future Improvements

The project will continue to evolve with additional backend and application features, including:

- Input validation
- Improved error handling
- Pagination
- API security
- Authentication
- Authorization
- Improved search, filtering and sorting interface
- Frontend improvements
- Refactoring and code cleanup
- Deployment

## 📚 Learning Project

TaskFlow is developed progressively, with each feature being implemented to reinforce backend and full-stack development concepts.

The project will eventually serve as a foundation for deeper learning in:

**Node.js → Express.js → REST APIs → TypeScript → NestJS**

## 👨‍💻 Author: Emilio_LG

Developed as a personal learning and portfolio project.

---
