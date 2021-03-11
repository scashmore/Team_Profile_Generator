// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const git = "scagithub";
    const employ = new Engineer("Susan", 15, "abc123@gmail.com", git);
    expect(employ.github).toBe(git);

});

test("getRole() should return \"Engineer\"", () => {
    const role = "Engineer";
    const employ = new Engineer("Susan", 15, "abc123@gmail.com", "scasgithub");
    expect(employ.getRole()).toBe(role);

});

test("Can get GitHub username via getGithub()", () => {
    const git = "scagithub";
    const employ = new Engineer("Susan", 15, "abc123@gmail.com", git);
    expect(employ.getGithub()).toBe(git);

});
