// Starter file provided by Instructor (03/09/2021) AC

const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const employ = new Employee();
    expect(typeof employ).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Susan";
    const employ = new Employee(name);
    expect(employ.name).toBe(name);

});

test("Can set id via constructor argument", () => {
    const id = 15;
    const employ = new Employee("Susan", id);
    expect(employ.id).toBe(id);

});

test("Can set email via constructor argument", () => {
    const email = "abc123@gmail.com";
    const employ = new Employee("Susan", 15, email);
    expect(employ.email).toBe(email);

});

test("Can get name via getName()", () => {
    const name = "Susan";
    const employ = new Employee(name);
    expect(employ.getName()).toBe(name);

});

test("Can get id via getId()", () => {
    const id = 15;
    const employ = new Employee("Susan", id);
    expect(employ.getId()).toBe(id);

});

test("Can get email via getEmail()", () => {
    const email = "abc123@gmail.com";
    const employ = new Employee("Susan", 15, email);
    expect(employ.getEmail()).toBe(email);

});

test("getRole() should return \"Employee\"", () => {
    const role = "Employee";
    const employ = new Employee("Susan", 15, "abc123@gmail.com");
    expect(employ.getRole()).toBe(role);

});
