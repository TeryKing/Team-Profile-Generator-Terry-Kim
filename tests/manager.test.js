const Manager = require('../lib/manager')
//test function for managers for phonenumber and role
describe("getPhoneNumber", () => {
    it("should get the id number of the engineer", () =>{
        const manager = new Manager("Terry", 1, "tery_x3@hotmail.com", 1234);

        expect(manager.getPhonenumber()).toEqual(1234)
    })
})

describe("getRole", () =>{
    it("should get the role of the manager", () => {
        const manager = new Manager("Terry", 1, "tery_x3@hotmail.com", 1234)

        expect(manager.getRole()).toEqual("Manager")
    })
})