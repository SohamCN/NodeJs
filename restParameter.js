let myarr = ["a", 3, "b", "go"],
    another_arr = [2, 30, 1]
  console.log("myarr==", myarr)
  const [val1, val2, ...rest] = myarr
  console.log("val1==", val1)
  console.log("val2==", val2)
  console.log("rest==", rest)
  // use with object
  let myobj = { a: 1, b: 2, c: 98, d: "dd" }
  console.log("myobj==", myobj)
  const { a, b, ...r } = myobj