const root = ReactDOM.createRoot(document.getElementById("root"));

const Cohort40FS = () => {
  const num = 4;
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Cohort40FS</h1>
      <h1 className="">Cohort40FS</h1>
    </div>
  );
};


// 1. TERNARY OPERATOR;

const Cohort40FS1 = () => {
  const num = 4;

  return num % 2 ? (
    <div style={{ textAlign: "right" }}>
      <h1>Cohort40FS1</h1>
      <h1>Cohort40FS1</h1>
    </div>
  ) : (
    <div style={{ textAlign: "left" }}>
      <h1>Cohort40FS1</h1>
      <h1>Cohort40FS1</h1>
    </div>
  );
};


// 2. IF / ELSE;
// const root = ReactDOM.createRoot(document.getElementById("root"));

const Cohort40FS2 = () => {
  const num = 4;

  if (num % 2) {
    return (
      <div style={{ textAlign: "right" }}>
        <h1>Cohort40FS2</h1>
        <h1>Cohort40FS2</h1>
      </div>
    );
  } else {
    return (
      <div style={{ textAlign: "left" }}>
        <h1>Cohort40FS2</h1>
        <h1>Cohort40FS2</h1>
      </div>
    );
  }
};


// 3. ADVANCED
const Cohort40FS3 = () => {
  const num = 4;
  return (
    <div>
      {/* <h1 style={ num % 2 ? { textAlign: "left" } : { textAlign: "right" } }>Cohort40FS</h1> */}
      <h1 style={  { textAlign: num % 2 ? "right" : "left" } }>Cohort40FS3</h1>
      <h1 className="text-center">Cohort40FS3</h1>
    </div>
  );
};

root.render(
  <>
    <Cohort40FS3 />
    <Cohort40FS3 />
    <Cohort40FS3 />
  </>
);
