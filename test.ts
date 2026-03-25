class Counter{
    static count: number = 0;


constructor(){
    Counter.count++
}
}
const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();

console.log(Counter.count);
console.log(c1.count);