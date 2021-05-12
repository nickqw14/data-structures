import { LinkedList } from '../src/LinkedList/ObjectOriented/LinkedList'

const myList = new LinkedList<string>()

myList.add('Suck')
myList.add('it')
myList.add('terry')
myList.add('man')

console.log(myList.removeLast())
console.log(myList.removeLast())
console.log(myList.removeLast())
console.log(myList.toString())
console.log(myList.removeLast())
console.log(myList.toString())
