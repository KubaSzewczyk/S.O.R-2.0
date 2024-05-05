const userTimestamp = new Date();
export const formattedTimestamp = userTimestamp.toLocaleString("pl-PL", {
  timeZone: "Europe/Warsaw",
  hour12: false,
});
