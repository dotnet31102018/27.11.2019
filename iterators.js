// iteratos

// generators
function* genny() {
  yield 'a'
  yield 'b'
  yield 'c'
}
let iter = genny()
for(let f of iter) {
  c(f)
}
let iter1 = genny()
c(iter1.next()) // { value : 'a', done: false}
c(iter1.next()) // { value : 'b', done: false}
c(iter1.next()) // { value : 'c', done: false} !!
c(iter1.next()) // { value : undefined, done: true}

function* gennyReturn() {
  console.log("once") // printed only once
  yield 'a'
  yield 'b'
  return 'c'
  yield 'd' // unreachable code
}
let iter2 = gennyReturn()
for(let f of iter2) {
  c(f)
}
let iter3 = gennyReturn()
c(iter3.next()) // { value : 'a', done: false}
c(iter3.next()) // { value : 'b', done: false}
c(iter3.next()) // { value : 'c', done: true} !!
c(iter3.next()) // { value : undefined, done: true}
