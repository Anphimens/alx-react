import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

// Test for getFullYear function
test("getFullYear returns the current year", () => {
  const currentYear = new Date().getFullYear();
});

// Test for getFooterCopy function
test("getFooterCopy returns correct string based on argument", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

// Test for getLatestNotification function
test("getLatestNotification returns correct HTML string", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
