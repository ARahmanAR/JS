// ====================================
// Project: Simple To-Do List
// ====================================

class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }

    // Add a new todo
    addTodo(title, description = '') {
        const todo = {
            id: this.nextId++,
            title,
            description,
            completed: false,
            createdAt: new Date()
        };
        this.todos.push(todo);
        return todo;
    }

    // Get all todos
    getAllTodos() {
        return this.todos;
    }

    // Get todo by ID
    getTodoById(id) {
        return this.todos.find(todo => todo.id === id);
    }

    // Update todo
    updateTodo(id, updates) {
        const todo = this.getTodoById(id);
        if (todo) {
            Object.assign(todo, updates);
            return todo;
        }
        return null;
    }

    // Delete todo
    deleteTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            return this.todos.splice(index, 1)[0];
        }
        return null;
    }

    // Toggle todo completion
    toggleComplete(id) {
        const todo = this.getTodoById(id);
        if (todo) {
            todo.completed = !todo.completed;
            return todo;
        }
        return null;
    }

    // Get completed todos
    getCompletedTodos() {
        return this.todos.filter(todo => todo.completed);
    }

    // Get incomplete todos
    getIncompleteTodos() {
        return this.todos.filter(todo => !todo.completed);
    }

    // Clear all completed todos
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
    }

    // Get statistics
    getStats() {
        return {
            total: this.todos.length,
            completed: this.getCompletedTodos().length,
            incomplete: this.getIncompleteTodos().length
        };
    }

    // Search todos
    searchTodos(query) {
        const lowerQuery = query.toLowerCase();
        return this.todos.filter(todo =>
            todo.title.toLowerCase().includes(lowerQuery) ||
            todo.description.toLowerCase().includes(lowerQuery)
        );
    }
}

// Demo usage
console.log("=== To-Do List Demo ===\n");

const todoList = new TodoList();

// Add some todos
todoList.addTodo("Learn JavaScript", "Study ES6+ features");
todoList.addTodo("Build a project", "Create a to-do list app");
todoList.addTodo("Practice coding", "Solve algorithm problems");

console.log("All todos:");
console.log(todoList.getAllTodos());

// Toggle completion
todoList.toggleComplete(1);
console.log("\nAfter completing first todo:");
console.log(todoList.getTodoById(1));

// Get statistics
console.log("\nStatistics:");
console.log(todoList.getStats());

// Search todos
console.log("\nSearch results for 'project':");
console.log(todoList.searchTodos("project"));

// Update a todo
todoList.updateTodo(2, { title: "Build an awesome project" });
console.log("\nUpdated todo:");
console.log(todoList.getTodoById(2));

// Delete a todo
todoList.deleteTodo(3);
console.log("\nAfter deletion:");
console.log(todoList.getAllTodos());

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TodoList;
}
