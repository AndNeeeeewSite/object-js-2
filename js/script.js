//     1.
console.log('')
user = {
    hobby: 'driving',
    premium: true
}
user.mood = 'happy'
user.hobby = 'skydiving'
user.premium = false
for (let array of Object.keys(user)){
    console.log('1.'+array + ':' + user[array])
} 
//       2.
console.log('')
countProps = (obj) =>{
    let keys = 0
    for(let array of Object.keys(obj)){
        keys++
    }
    console.log('2.Властивостей:' + keys)
    return keys
}
countProps(user)
//          3.
console.log('')
employees = {
    Valera:3,
    Vlad:2,
    Igor:1
}
findBestEmployee = (employees) =>{
    bestNum = 0
    for(let array of Object.keys(employees)){
        number = employees[array]
        if (number> bestNum){
            bestNum = number
            bestName = array
        }
    }
    console.log('3.' + bestName)
    return bestName
}
findBestEmployee(employees)
//        4.
console.log('')
employeesSalery = {
    Valera:30000,
    Vlad:20000,
    Igor:10000
}
countTotalSalary = (employees) => {
    let allSalary = 0
    console.log('4. Зарплата працівників:')
    for(let array of Object.keys(employees)){
        number = employees[array]
        console.log('4. ' + array + ':' + number)
        allSalary = allSalary + number
    }
    console.log('4. Сума усіх зарплат: ' + allSalary)
    return allSalary
}
countTotalSalary(employeesSalery)
//         5.
console.log('')
products = [  
    { name: 'Apple' , price: 300 , all:1},
    { name: 'Banana', price: 20 , all:2},
    { name: 'Lemon' , price: 1 , all:3}
]
getAllPropValues = (arr, prop) => {
    let props = []
    for (let array1 of arr){
        props.push(array1[prop])
    }
    console.log('5. ' + props)
    return props
} 
getAllPropValues(products,'price')
//         6.
calculateTotalPrice = (allProdcuts, productName) => {
    for(let array of allProdcuts){
        keysOfarray = Object.keys(array)

        array
        if(array[name] = productName){
        allPriceOfProduct = array[keysOfarray.indexOf(price)] * array[all] 
        console.log(array[name] + '=' + allPriceOfProduct)
    }
    }
}
calculateTotalPrice(products,'Apple') 