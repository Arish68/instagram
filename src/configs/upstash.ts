// Upstash configs
export const upstashUrl = "https://healthy-joey-37943.upstash.io";
export const upstashToken = "AZQ3ASQgZTNlZjdhOGYtZWIzYy00MWY3LThlY2MtZjQzZDM1NDYxYmEyYjdjMDVlZWMwMzMwNDA3YzgyZGJlNzMyNjIwNTRhN2Y=";
const isUsingUpstash = "true";
export const enableUpstash = isUsingUpstash === "true";
// Ratelimit configs
export const maxRequests = 5; // Max requests every requests window
export const requestsWindow = "1 m"; // 5 requests allowed every 1 min
// Ban configs
export const upstashBanEnabled = true; // Ban user by ip in case of spam
export const upstashBanDuration = 14400; // 4 hours;
