import React, {useState} from "react";

const TodoList = () => {

    const [taskList, setTaskList] = useState([])

    const addTask = (e) => {
        e.preventDefault()
        let newTask = document.getElementById("newTask").value
        setTaskList( taskList =>  [...taskList, newTask])
        document.getElementById("taskForm").reset()
    }

    const deleteTask = (index) => {
        const temp = [...taskList];
        temp.splice(index, 1);
        setTaskList(temp);
    }

	return (
		<>
            <h2 className="todoList_title">todos</h2>
            <div className="todoList_box">
                <form method="post" id="taskForm" onSubmit={(e) => addTask(e)}>
                    <input type="text" name="newTask" id="newTask" className="todoList_taskInput" placeholder="What needs to be done?"/>
                </form>
                <hr/>
                <div>
                    {taskList.map((element, index) => {
                        return (
                            <div>
                                <div className="todoList_task" key={index}>
                                    {element}
                                    <div className="todoList_deleteTask" onClick={() => deleteTask(index)}>X</div>
                                </div>
                                <hr/>
                            </div>
                        )
                    })}
                    
                </div>
                <div className="todoList_footer">
                    {taskList.length ? taskList.length + " item left" : "No tasks, add a task"}
                </div>
            </div>
		</>
	);
};

export default TodoList;
