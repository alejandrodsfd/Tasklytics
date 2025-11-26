export function createTask({title, desc = '', priority = 'baja'}) {
    if(!title) throw new Error("Title required");
    return{
        id: Date.now().toString(36),
        title,
        desc,
        priority,
        createdAt: new Date().toISOString(),
        completed: false,
    }
}

export function addTask(tasks = [], task) {
    return [task, ...tasks]
}

export function toggleComplete(tasks = [], id) {
    return tasks.map(t => t.id === id ? {...t, completed: !t.completed} : t);
}

export function removeTask(tasks = [], id) {
    return tasks.filter(t => t.id !== id);
}

export function updateTask(tasks = [], id, updates = {}){
    return tasks.map(t => t.id === id ? { ...t, ...updates} : t);
}