import { LinkedList } from '../src/LinkedList/ObjectOriented/LinkedList'

const myList = new LinkedList<string[]>()

myList.addFirst(['hello', 'Titles!'])
myList.addFirst(['Wow', 'this!', 'is', 'cool'])
myList.addFirst(['Maybe', 'it!', 'will', 'work'])

console.log(myList.indexOf(['hello', 'Titles!']))
console.log(myList.toString())
