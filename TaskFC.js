const root = ReactDOM.createRoot(document.getElementById("root"));

const TaskFC = () => {
  // Tuples - кортеж
  const [isEdit, setIsEdit] = React.useState(false);

  // isEdit = true - пример ошибки
  // setIsEdit(true); - пример того, как можно менять значение локального состояния.

  if (isEdit) {
    return (
      <div style={{ textAlign: "center" }}>
        <textarea>Name task </textarea>
        <button>Save</button>
      </div>
    );
  } else {
    return (
      <div style={{ textAlign: "center" }}>
        <input placeholder="Введите новую задачу..." />
        <button style={{ width: "160px" }}>Add Task</button>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    );
  }
};

root.render(
  <>
    <h1 className="text-center" style={{ margin: "50px" }}>
      Todo List App
    </h1>
    <TaskFC />
  </>
);
