type greetingParams = {
    name: string;
    age: number;
    format?: 'Table' | 'Default';   //? is optional
  }
  
  function greeting({name, age, format}: greetingParams) {
    if (format == "Table" ){
      let result: greetingParams = {
        name: name,
        age: age
    };
      console.table(result)
    } else if (format == "Default" || format == null ){
      console.log("Hi, " + name)
    } 
  }

//   type PrintFormat = "Default" | "Table"
// // หลอก Compiler, TypeScript ว่ามี format
// function greeting(params: GreetingParams) {
//   if (params.format === "Table") {
//       console.table({
//           name: params.name,
//           age: params.age
//       })
//   }
//   if (params.format === "Default") {
//       return "Hi, " + params.name
//   }
// }
// test("Display default", () => {
//   const data = {
//     name: "Alice",
//     format: "Default"
//   } as GreetingParams
//   const result = greeting(data);
//   expect(result).toEqual("Hi, Alice")
// }) 