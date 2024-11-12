import { useState } from "react"
import {ListaTareas} from "./ListaTareas"

export const ToDoApp = () => {
    const [nuevaTarea, setNuevaTarea] = useState<string>("")
    const [listaTareas, setlistaTareas] = useState<string[]>([])
    const handleAddTask = () =>{
        if (nuevaTarea.trim() === "") return
        setlistaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
        setNuevaTarea("")
    }
    const handleDeleteTask = (index: number) =>{
        setlistaTareas(tareas => tareas.filter((_,i)  => i !== index))
    }
    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div className="flex">
                <input 
                type="text"
                value={nuevaTarea}
                placeholder="Nueva Tarea"
                onChange={(e) => setNuevaTarea(e.target.value)}
                />
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleDeleteTask}></ListaTareas>
        </div>
    )
}