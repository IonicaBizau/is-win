const tester = require("tester")
    , isWin = require("..")
    ;

tester.describe("is-win", t => {
    t.should("check if it's windows or not on x86/x64", () => {
        t.expect(isWin()).toBe((process.platform === "win32") && (process.arch !== "arm"));
    });
});
      
