import { LinkedList } from '../src/LinkedList/ObjectOriented/LinkedList'

const myList = new LinkedList()

myList.addFirst('Poop')
myList.addFirst('second')
myList.addFirst('third')
myList.addFirst('fourth')
myList.addLast('fifth')

// for (let i = 0; i < 10; i++) {
//     console.log('NODE IS : ', myList.remove())
// }
console.log(myList)
