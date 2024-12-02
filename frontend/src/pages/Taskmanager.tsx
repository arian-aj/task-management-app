import { useState, useEffect } from "react"


export default function Taskmanager() {
    const [fetchTrigger, setFetchTrigger] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3050/api/tasks")
        .then(res => {
            if (!res.ok) {
                throw new Error("Fetch failed")
            }

            return res.json()
        })
        .then(data => {
            setTasks(data);
        })
    }, [fetchTrigger])

    const deleteTask = async (taskId) => {
        try {
            const response = await fetch(`http://localhost:3050/api/tasks/${taskId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Trigger re-fetch of tasks
                setFetchTrigger(!fetchTrigger);
            } else {
                console.error('Failed to delete task');
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <>
            <div>
                <h1>Taskmanagement</h1>
                <select name="filter" id="filter">filter</select>
                <div>
                    <h4>Add Task</h4>
                    <form action="">
                        <label htmlFor="task">
                            Tasktitle:
                            <input type="text" />
                        </label>
                    </form>
                </div>
            </div>
            <div>
                <h3>Pending Tasks</h3>
                {
                    tasks
                        .filter(task => task.status === "pending")
                        .map((task) => (
                            <div key={task._id}>
                            <span>{task.title}</span>
                            <button onClick={() => deleteTask(task._id)}>Delete</button>
                        </div>
                        ))
                }
            </div>
            <div>
                <h3>Progressed Tasks</h3>
                {
                    tasks
                        .filter(task => task.status === "in progress")
                        .map((task) => (
                            <div key={task._id}>
                            <span>{task.title}</span>
                            <button onClick={() => deleteTask(task._id)}>Delete</button>
                        </div>
                        ))
                }
            </div>
            <div>
                <h3>Completed Tasks</h3>
                {
                    tasks
                        .filter(task => task.status === "completed")
                        .map((task) => (
                            <div key={task._id}>
                            <span>{task.title}</span>
                            <button onClick={() => deleteTask(task._id)}>Delete</button>
                        </div>
                        ))
                }
            </div>
        </>
    )
}