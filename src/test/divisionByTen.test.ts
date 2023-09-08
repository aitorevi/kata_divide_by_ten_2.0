function divisionByTen(number: number) {
    if (number >= 1) {
        const resultOfDivision: number = number / 10
        return divisionByTen(resultOfDivision) + 1
    }
    return 0;
}

/*
0 -> 0
1 -> 1
89 -> 2
0.32 -> 0
-8376 -> 4
*/
describe("divide by ten", () => {
    it("not necessary to divide", () => {
        expect(divisionByTen(0)).toBe(0)
    })
    it("the simplest division", () => {
        expect(divisionByTen(1)).toBe(1)
    })
    it("two-digit number", () => {
        expect(divisionByTen(89)).toBe(2)
    })
    it("decimal number", () => {
        expect(divisionByTen(32.45)).toBe(2)
    })
})