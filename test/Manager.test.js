// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const office = 20;
    const employ = new Manager("Susan", 15, "abc123@gmail.com", office);
    expect(employ.officeNumber).toBe(office);
});

test('getRole() should return "Manager"', () => {
    const role = "Manager";
    const employ = new Manager("Susan", 15, "abc123@gmail.com", 20);
    expect(employ.getRole()).toBe(role);

});

test("Can get office number via getOffice()", () => {

    const office = 20;
    const employ = new Manager("Susan", 15, "abc123@gmail.com", office);
    expect(employ.getOfficeNumber()).toBe(office);
});
