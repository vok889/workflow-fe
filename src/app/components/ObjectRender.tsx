function ObjectRender() {
    const task = {
      title: "เบิกงบ",
      amount: 20,
    };
    return (
      <div>
        <h1>Task: {task.title}</h1>
        <p>${task.amount}</p>
      </div>
    );
  }

  export const sname = "Jame";
  export const age = 19;
  export const alive = true;

  export default ObjectRender;                