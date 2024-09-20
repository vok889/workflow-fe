
interface Props { 
  title: string; 
  amount: NullableNumber
}

type PartialProps = Omit<Props, "amount">
type OnlyAmountProps = Pick<Props, "amount">
function ObjectRender(props: Props) {
  return (
    <div>
      <h1>Task: {props.title}</h1>
      <p>${props.amount || "-"}</p>
    </div>
  );
}
export default ObjectRender;

export const sname = "Jame";
export const age = 19;
export const alive = true;

            