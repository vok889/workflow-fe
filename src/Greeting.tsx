type greeting = {
    name: string;
    age: number;
    format: 'Table' | 'Default';
  }
  
  function greeting({name, age, format}: greeting) {
    if (format == "Table" ){
      const result = {};
      result.name = name;
      result.age = age;
      console.table(result)
    } else{
      console.log("Hi, " + name)
    } 
  }