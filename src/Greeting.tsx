function greeting(props:{name: string, age: number, format: string}) {
    if (props.format == "Table" ){
      const result = {};
      result.name = props.name;
      result.age = props.age;
      console.table(result )
    } else{
      console.log("Hi, " + props.name)
    }
    
  }