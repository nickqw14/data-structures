import { LinkedList } from 'src'
import { Map, MapEntry } from './MapEntry'

export class HashTable<K, V> implements Map<K, V> {
    private table: LinkedList<MapEntry<K, V>>[]
    private size: number = 0
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
        return value
    }

    getEntries() {
        return []
    }

    remove(key: K) {
        return ('v' as unknown) as V
    }

    clear() {}

    getSize() {
        return 0
    }
}
