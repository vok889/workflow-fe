//import ObjectRender, { age, alive, sname } from "./components/ObjectRender";
// import {Quiz1} from "./components/Quiz1";
// import Quiz2 from "@/components/Quiz2";
// import Quiz3 from "./components/Quiz3";
// import Quiz4 from "./components/Quiz4";
// import ListRender from "./components/ListReader";

// // const name = "Jame";
// // const age = 19;
// // const alive = true;

// const App = () => {
//   return <div>
//     <Quiz1/>
//     <Quiz2/>
//     <Quiz3/>
//     <Quiz4/>
//     <ListRender/>
//     </div>;
// };

// export default  App
import '../components/ProductTable.module.css';
// pages/index.tsx
import { Quiz1 } from '../components/Quiz1';
import Quiz2 from '../components/Quiz2';
import Quiz3 from '../components/Quiz3';
import Quiz4 from '../components/Quiz4';
import ProductTable from "../components/ProductTable";
import RenderTable from '@/components/RenderTable';
import ObjectRender from '@/components/ObjectRender';

export default function Home() {
  const task = {
    title: "เบิกงบ",
    amount: 20,
  };
  return (
    <div>
      <ObjectRender title={task.title}/>
      <RenderTable/>
    </div>

  );
}