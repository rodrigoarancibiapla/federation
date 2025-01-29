
# Module Federation Demo Server

This is a demonstration server for Module Federation using Vite and React. The project is structured as a monorepo with two applications: `host` and `remote`.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

To run the server, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Build and start the containers using Docker Compose:

   ```bash
   docker-compose up --build
   ```

   This command will build the Docker images and start the containers for both the `host` and `remote` applications.

3. Access the applications:

   - Host application: [http://localhost:3001](http://localhost:3001)
   - Remote application: [http://localhost:3002](http://localhost:3002)

## Project Structure

The project is organized as follows:

```
.
├── apps
│   ├── host
│   │   ├── Dockerfile
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── public
│   │   ├── src
│   │   └── vite.config.js
│   └── remote
│       ├── Dockerfile
│       ├── index.html
│       ├── package.json
│       ├── public
│       ├── src
│       └── vite.config.js
├── docker-compose.yml
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License.
