export function debounce(callback: Function, delay: number): Function {
    let timer;

    return function() {
        let args = arguments
        let context = this

        clearTimeout(timer)

        timer = setTimeout(() => {
            callback.apply(context, args)
        }, delay)
    }
}