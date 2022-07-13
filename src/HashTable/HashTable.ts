import { LinkedList } from '../LinkedList/LinkedList'
import { Map, MapEntry } from './MapEntry'

const INITIAL_SIZE = 20
export class HashTable<K, V> implements Map<K, V> {
    private table: LinkedList<MapEntry<K, V>>[] = []
    private size: number = INITIAL_SIZE
    private capactiy: number = 50

    // TODO need to determine Load Factor (initial table size and when rehash occurs)
    // Clamp method to clamp the hash'd value down to an accessible index size
    // Create own hash function or JS built in?

    constructor() {
        for (let i = 0; i < this.size; i++) {
            this.table.push(new LinkedList())
        }
    }

    clamp(hashCode: number) {
        return Math.abs(hashCode) % this.table.length
    }

    containsKey(key: K) {
        return false
    }

    containsValue(value: V) {
        return false
    }

    get(key: K) {
        return ('hell' as unknown) as V
    }

    isEmpty() {
        return false
    }

    put(key: K, value: V) {
        const entry = new MapEntry(key, value)
        // Find clamped index by hashing the key and using mod operator to keep within the table capacity
        const clampedIndex = 5
        this.table[clampedIndex].add(entry)
        return entry.getValue()
    }

    getEntries() {
        return []
    }

    remove(key: K) {
        return ('v' as unknown) as V
    }

    clear() {}

    getSize() {
        return this.size
    }
}
