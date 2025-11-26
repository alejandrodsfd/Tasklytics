import { describe, it, expect } from "vitest";
import { createTask, addTask, toggleComplete, removeTask, updateTask} from "../src/tasks";

describe("tasks core", () => {
    it("createTask crea objeto válido", () => {
        const t = createTask({title: "X"});
        expect(t.title).toBe("X");
        expect(t.completed).toBeFalsy();
        expect(typeof t.id).toBe("string");
    });

    it("addTask no muta el array", () => {
        const arr = [];
        const t = createTask({title: "Y"});
        const res = addTask(arr, t);
        expect(res.length).toBe(1);
        expect(arr.length).toBe(0);
    });

    it("toggleComplete alterna completed", () => {
        const t = createTask({ title: "Z"});
        let arr = addTask([], t);
        arr = toggleComplete(arr, t.id);
        expect(arr[0].completed).toBeTruthy();
    });

    it("removeTask elimina por id", () => {
        const t = createTask({ title: "A"});
        let arr = addTask([], t);
        arr = removeTask(arr, t.id);
        expect(arr.length).toBe(0);
    })

    it("updateTask aplica cambios", () => {
        const t = createTask({ title: "B"});
        let arr = addTask([], t);
        arr = updateTask(arr, t.id, { title: "B2"});
        expect(arr[0].title).toBe('B2');
    })

})