type greetingParams = {
    name: string;
    age: number;
    format?: 'Table' | 'Default';
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