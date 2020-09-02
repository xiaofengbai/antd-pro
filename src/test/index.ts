const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
console.log(1)

async function fn() {
    await sleep(2000)
    console.log(2)
    setTimeout(() => {
        console.log(3)
    }, 3000)
}
fn()
setTimeout(() => {
    console.log(4)
}, 2000)
const p1 = new Promise((res, rej) => {
    console.log(5)
    setTimeout(() => {
        console.log(6)
    })
    res(7)
})
p1.then((res) => {
    console.log(res)
})




const obj = {
    name: 'inner name1',
    getName() {
        return this
    },
    sub: {
        name: 'inner name2',
        getName() {
            return this
        }
    }
}
const f1 = obj.getName
console.log(f1())
console.log(obj.getName())
console.log(obj.sub.getName())


export { };
// var va = 1;
// ~(function () {
//     console.log('va', va)
//     let va = 1
// })()

