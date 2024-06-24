const root = ReactDOM.createRoot(document.getElementById("root"));

// 2. Принимаем props
const Student = (props) => {
    return( 
    <>
      {/* 3. Использование props*/}
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
    </>
    )
}

// 2. Принимаем props
const Student1 = ({ name, age }) => {
    return( 
    <>
      {/* 3. Использование props*/}
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
    </>
    )
}

root.render(
 <>
  {/* 1. Передача props */}
  <Student1 name='Tigran' age={50} />
  <Student1 name='John' age={25 - 6} />
  <Student1 name='Bill' age={23} />
  <Student1 name='Semeon' age={18} />
  <Student1 name='David' age={25} />
 </>
);
