import {inject} from "./inject"
import {expect} from "chai"

describe(inject.name, () => {
    const objectify = (a: string, b: number, c: boolean) => ({a, b, c})

    it("can partially apply some parameters of the source function", () => {
        const injected = inject(objectify, "X", 5)

        expect(injected(true)).to.deep.equal({a: "X", b: 5, c: true})
    })

    it("can partially apply all parameters of the source function", () => {
        const injected = inject(objectify, "X", 5, true)

        expect(injected()).to.deep.equal({a: "X", b: 5, c: true})
    })

    it("allows access to the source function", () => {
        const injected = inject(objectify, "X", 5)

        expect(injected.source("A", 10, false)).to.deep.equal({a: "A", b: 10, c: false})
    })

})
