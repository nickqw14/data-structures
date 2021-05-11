import { LinkedList } from '../src/LinkedList/ObjectOriented/LinkedList'

const myList = new LinkedList()

myList.addFirst('hello')
myList.addFirst('world')
myList.addFirst('aga')
myList.addFirst('a')
myList.addFirst('v')
myList.addFirst('x')

console.log(myList.indexOf('hello'))
console.log(myList.toString())
