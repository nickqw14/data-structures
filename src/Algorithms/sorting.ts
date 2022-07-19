const brute = (arr: []) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                const current = arr[i]
                arr[i] = arr[j]
                arr[j] = current
            }
        }
    }
}

const insertion = (arr: []) => {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if (current > arr[j]) {
                break
            }
            arr[j + 1] = arr[j]
            arr[j] = current
        }
    }
}
