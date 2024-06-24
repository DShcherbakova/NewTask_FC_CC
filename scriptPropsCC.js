const root = ReactDOM.createRoot(document.getElementById("root"));

class Student extends React.Component {
  render() {
    // const name = this.props.name;
    // const age = this.props.age;
    // or
    const { name, age } = this.props;

    return (
      <>
        {/* 3. Использование props*/}
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
      </>
    );
  }
}

root.render(
  <>
    {/* 1. Передача props */}
    <Student name="Tigran" age={50} />
    <Student name="John" age={25 - 6} />
    <Student name="Bill" age={23} />
    <Student name="Semeon" age={18} />
    <Student name="David" age={25} />
  </>
);
