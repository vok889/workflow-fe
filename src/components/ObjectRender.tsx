function ObjectRender( props:{
  title: string;
  amount?: number;
}) {
    return (
      <div>
        <h1>Task: {props.title}</h1>
        <p>${props.amount || "-"}</p>
        {/* <p>${props.amount ? props.amount : "-" || "-"}</p> */}
      </div>
    );
  }

  export const sname = "Jame";
  export const age = 19;
  export const alive = true;

  export default ObjectRender;                