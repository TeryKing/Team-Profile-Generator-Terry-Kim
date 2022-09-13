const Employee = require("../lib/employee")

describe("getName", () => {
    it("should get the name of the Employee", () => {
        const employee = new Employee("Terry", 1, "tery_x3@hotmail.com");

        expect(employee.getName()).toEqual("Terry")
    });
});

describe("getID", () => {
    it("should get the ID of the Employee", () => {
        const employee = new Employee("Terry", 1, "tery_x3@hotmail.com");

        expect(employee.getId()).toEqual(1)
    });
});

describe("getEmail", () => {
    it("should get the email of the Employee", () => {
        const employee = new Employee("Terry", 1, "tery_x3@hotmail.com");

        expect(employee.getEmail()).toEqual("tery_x3@hotmail.com")
    });
});

describe("getRole", () => {
    it("should get the role of the Employee", () => {
        const employee = new Employee("Terry", 1, "tery_x3@hotmail.com");

        expect(employee.getRole()).toEqual("Employee")
    });
});