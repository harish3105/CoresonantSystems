import React, { useState, useEffect } from "react";
import TodosItem from "../TodoItem";
import "./index.css";

function Todos() {
  const [search, setSearch] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const [edit, setEdit] = useState({
    id: "",
    isEdited: false,
  });
  const [filteredData, setFilteredData] = useState("all");

  const fetchUserApi = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/todos"
      );
      const data = await response.json();
      setFetchedData(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchUserApi();
  }, []);

  const onAddTodo = () => {
    if (search.trim() !== "") {
      const newId = Math.max(...fetchedData.map((eachItem) => eachItem.id)) + 1;
      const newTodo = {
        userId: 1,
        id: newId,
        title: search,
        completed: false,
      };
      setFetchedData([...fetchedData, newTodo]);
      setSearch("");
    } else {
      alert("Enter task");
    }
  };

  const deleteTodo = (id) => {
    let newList = fetchedData.filter((eachItem) => eachItem.id !== id);
    setFetchedData(newList);
  };

  const editButton = (id) => {
    setEdit({ ...edit, id: id, isEdited: true });
    let editableItem = fetchedData.filter((eachItem) => eachItem.id === id);
    setSearch(editableItem[0].title);
  };

  const onClickUpdate = () => {
    let updatedTodo = fetchedData.map((eachItem) => {
      if (eachItem.id === edit.id) {
        return {
          title: search,
          id: edit.id,
        };
      }
      return eachItem;
    });
    setFetchedData(updatedTodo);
    setSearch("");
    setEdit({
      id: "",
      isEdited: false,
    });
  };

  const completedTask = (id) => {
    const updatedData = fetchedData.map((eachItem) => {
      if (eachItem.id === id) {
        return {
          ...eachItem,
          completed: !eachItem.completed,
        };
      }
      return eachItem;
    });
    setFetchedData(updatedData);
  };

  const filteredTasks = fetchedData.filter((eachItem) => {
    if (filteredData === "all") {
      return true;
    } else if (filteredData === "completed") {
      return eachItem.completed;
    } else if (filteredData === "not completed") {
      return !eachItem.completed;
    }
    return false;
  });

  return (
    <div className="todos-container">
      <h1 className="todos-heading">Todos Application</h1>
      <h1 className="create-task-heading">
        Create <span className="create-task-heading-subpart">Task</span>
      </h1>
      <input
        type="text"
        placeholder="Enter Note...."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="todo-user-input"
      />
      {edit.isEdited ? (
        <button type="submit" className="button" onClick={onClickUpdate}>
          Update
        </button>
      ) : (
        <button type="submit" className="button" onClick={onAddTodo}>
          Add
        </button>
      )}
      <div>
        <h1 className="create-task-heading-subpart">Category</h1>
        <select
          value={filteredData}
          className="select-todo"
          onChange={(e) => setFilteredData(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </div>
      <ul className="todos-ul-container">
        {filteredTasks.map((eachUser) => (
          <TodosItem
            key={eachUser.id}
            itemDetails={eachUser}
            editButton={editButton}
            deleteTodo={deleteTodo}
            completedTask={completedTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
