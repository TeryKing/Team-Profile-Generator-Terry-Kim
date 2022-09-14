const Engineer = require('../lib/engineer')
//testing engineer for github and role
describe("getGithub", () => {
    it("should get the id number of the engineer", () =>{
        const engineer = new Engineer("Terry", 1, "tery_x3@hotmail.com", "TeryKing");

        expect(engineer.getGithub()).toEqual("TeryKing")
    })
})

describe("getRole", () =>{
    it("should get the role of the engineer", () => {
        const engineer = new Engineer("Terry", 1, "tery_x3@hotmail.com")

        expect(engineer.getRole()).toEqual("Engineer")
    })
})