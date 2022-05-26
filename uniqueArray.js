/*const ages = [45, 28, 45, 'arab', 'bus', 45, 76, 91, 19, 18, 16, 28, 'bus']
const uniqueAges = ages.filter((value,index,self)=> self.indexOf(value)==index)
console.log(uniqueAges);*/

const ages1 = [26, 27, 26, 26, 28, 28, 29, 29, 30]
const uniqueAges1 = [...new Set(ages1)]     //In ES6 Set method is used to printout unique object elements

console.log(uniqueAges1)

const students = [
    {
      name: 'Krunal',
      age: 26
    }, 
    {
      name: 'Ankit Singh',
      age: 25
    },
    {
      name: 'Krunal',
      age: 26
    },
    {
      name: 'Anurag',
      age: 25
    }
  ]
  const uniqueArr = [... new Set(students.map(data => data.name))]
  console.log(uniqueArr)