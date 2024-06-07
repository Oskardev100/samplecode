# samplecode
This is a sample to identify bad practices

Steps to run the code: 
1. Clone the code
2. Install libraries using below command
    npm i
3. Run the server using below command.
    node index.js
4. Lunch client using this url: http://127.0.0.1:3000/data


Issues to Identify and Fix:

- Error Handling: Improve error handling across the application.
- Modularity: Break down code into more modular pieces.
- Naming Conventions: Use consistent and meaningful names for variables and functions.
- Async/Await: Replace callbacks with modern async/await syntax for better readability and error handling.
- Design Patterns: Implement design patterns where applicable (e.g., Singleton for managing server instance, Factory for creating responses).
- Configuration Management: Externalize configurations like hostname and port into a separate configuration file.
- Logging: Use a logging library instead of console.log.


Challenge
- Refactor the code to address the issues listed.
- Implement a Singleton pattern for the server instance.
- Use a Factory pattern for creating HTTP responses.
- Apply proper logging using a library like winston.
- Externalize configuration settings.