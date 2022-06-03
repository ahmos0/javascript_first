function createGreeting(greeting) {
    return (function (name) {
      console.log(greeting + name + "!")
    })
  }
   
  const morningGreeting = createGreeting("Good morning! ")
  morningGreeting("HAMADA")
   
  const helloGreeting = createGreeting("Hello! ")
  morningGreeting("waseda")