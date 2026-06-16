"use strict";

const domainElement = document.getElementById("domain");

const hostname = window.location.hostname.replace(/^www\./, "");

const localHostnames = new Set([
  "localhost",
  "127.0.0.1",
  "::1"
]);

if (
  domainElement &&
  hostname &&
  !localHostnames.has(hostname)
) {
  domainElement.textContent = hostname;
  document.title = `${hostname} | Website Coming Soon`;
}