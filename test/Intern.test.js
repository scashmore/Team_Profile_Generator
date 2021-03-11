// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const school = "UNCSA";
    const employ = new Intern("Susan", 15, "abc123@gmail.com", school);
    expect(employ.school).toBe(school);

});

test("getRole() should return \"Intern\"", () => {
    const role = "Intern";
    const employ = new Intern("Susan", 15, "abc123@gmail.com", "UNCSA");
    expect(employ.getRole()).toBe(role);
});

test("Can get school via getSchool()", () => {
    const school = "UNCSA";
    const employ = new Intern("Susan", 15, "abc123@gmail.com", school);
    expect(employ.getSchool()).toBe(school);

});
