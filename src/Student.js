// all about props
// props =parameters
function Student(props) {
  console.log(props);
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        margin: 20,
        padding: 10,
        color: "blue",
      }}
    >
      <h1>Student Component</h1>
      <p>a fn() based component</p>
      <h2>name:{props.name}</h2>
      <h2>email:{props.email}</h2>
      {/* <h2>address:{props.other.address}</h2>
      <h2>mobile:{props.other.mobile}</h2> */}
    </div>
  );
}

export default Student;
