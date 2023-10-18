# Todo Application with API Integration

This is a Todo application built using React.js that allows users to manage tasks. The application integrates with an API to fetch and display a list of tasks. Users can add, edit, and delete tasks, as well as mark them as completed. Additionally, the application provides a filter functionality to toggle between displaying all tasks and completed tasks.

## Functionality

The Todo application includes the following features:

1. **Display Existing Tasks**: The application displays a list of existing tasks, showing the task name and its status (completed or not). This list is initialized with todos fetched from the following API endpoint: [https://jsonplaceholder.typicode.com/users/1/todos](https://jsonplaceholder.typicode.com/users/1/todos).

2. **Task Properties**:
   - **id (number)**: The unique identifier for the todo.
   - **title (string)**: The title of the todo.
   - **completed (boolean)**: Indicates whether the todo has been completed or not.

3. **Add New Tasks**: Users can add new tasks via an input field. Tasks added will be displayed in the list.

   - Validations:
     - The task name should not be empty.

4. **Mark Tasks as Completed**: Users can mark a task as completed by clicking on it. Completed tasks are visually distinguishable, often with a different color.

5. **Edit Tasks**: Users can edit the task name by clicking on an edit button/icon next to each task. When a task is edited, the task name is updated in the list.

6. **Delete Tasks**: A delete button/icon is provided to allow users to remove a task from the list.

7. **Filter Tasks**: The application implements a filter or tab functionality to toggle between displaying all tasks and completed tasks.

## Components and Libraries

The application is built using React.js and may utilize additional libraries or CSS frameworks as needed. The core components and logic include:

- **TaskList**: Displays the list of tasks, handles completion status, editing, and deletion.
- **TaskForm**: Manages the input field for adding new tasks.
- **FilterTabs**: Implements the filter functionality for displaying all tasks and completed tasks.
- **API Integration**: Utilizes the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users/1/todos) to fetch and populate tasks.
- **Validation**: Ensures that task names are not empty before adding them to the list.

## Getting Started

To run the Todo application locally, follow these steps:

1. Clone the repository.

2. Install the required dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open the application in your web browser (usually at http://localhost:3000).

## Additional Information

- This README provides an overview of the Todo application. Detailed code and component implementations can be found in the source code.

Feel free to customize and extend the application according to your specific requirements or use case.

---

This README file provides a high-level overview of the Todo Application with API Integration. You can expand upon it with installation instructions, usage examples, and additional details as needed.
