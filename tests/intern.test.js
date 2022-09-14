const Intern = require('../lib/intern')
//testing to check interns for school and role
describe("getSchool", () => {
    it("should get the id number of the intern", () =>{
        const intern = new Intern("Terry", 1, "tery_x3@hotmail.com", "University of Houston");

        expect(intern.getSchool()).toEqual("University of Houston")
    })
})

describe("getRole", () =>{
    it("should get the role of the Intern", () => {
        const intern = new Intern("Terry", 1, "tery_x3@hotmail.com")

        expect(intern.getRole()).toEqual("Intern")
    })
})