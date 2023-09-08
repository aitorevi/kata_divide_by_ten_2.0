function divisionByTen(number: number) {
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
})