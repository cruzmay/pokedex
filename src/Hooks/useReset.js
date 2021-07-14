export const useReset = (search, setsearch) => {
    const reset = () => {
        setsearch('')
        return search
    }

    return reset()
}
