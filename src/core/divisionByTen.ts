export function divisionByTen(number: number) {
    number = Math.abs(number)
    if (number >= 1) {
        return divisionByTen(number / 10) + 1
    }
    return 0;
}