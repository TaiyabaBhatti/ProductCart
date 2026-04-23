export const formatProductName = (name) => 
    {  
      console.log(name)
      const formatedName = name.split(" ").map((word) => word[0].toUpperCase() + word.slice(1));
      console.log(formatedName.join(" "))
      return formatedName.join(" ");

    }