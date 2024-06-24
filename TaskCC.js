const root = ReactDOM.createRoot(document.getElementById("root"));

class TaskCC extends React.Component {
    
    state = {
        isEdit: false,
      };

  
    render() {
      const { isEdit } = this.state;
  
      return (
        <div style={{ textAlign: "center" }}>
          {isEdit ? (
            <>
              <textarea>Name task</textarea>
              <button>Save</button>
            </>
          ) : (
            <>
              <input placeholder="Введите новую задачу..." />
              <button style={{ width: "160px" }}>Add Task</button>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </>
          )}
        </div>
      );
    }
  }

root.render(
  <>
    <h1 className="text-center" style={{ margin: "50px" }}>Todo List App</h1>
    <TaskCC />
  </>
);
