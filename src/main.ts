import { LinkedList } from '../src/LinkedList/ObjectOriented/LinkedList'

const myList = new LinkedList<string>()

myList.add('Suck')
myList.add('it')
myList.add('terry')
myList.add('man')

myList.add('Insertion', 1)
console.log(myList.toString())
