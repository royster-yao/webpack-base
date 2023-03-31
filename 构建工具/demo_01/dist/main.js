;(() => {
  "use strict"
  const e = {
    sayHello() {
      console.log("你好！webpack")
    },
    a: 10,
    b: 20,
  }
  ;({
    setH1() {
      document.body.insertAdjacentHTML("beforeend", "<h1>你好！webpack</h1>")
    },
  }.setH1(),
    e.sayHello())
})()
