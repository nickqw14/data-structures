export class MapEntry<K, V> {
    private key: K
    private value: V

    constructor(key: K, value: V) {
        this.key = key
        this.value = value
    }

    setValue(value: V) {
        this.value = value
    }

    getValue() {
        return this.value
    }

    getKey() {
        return this.key
    }

    equals(other: Object) {
        if (!(other instanceof MapEntry)) {
            return false
        }
        return other.getKey() === this.key && other.getValue() === this.value
    }
}
