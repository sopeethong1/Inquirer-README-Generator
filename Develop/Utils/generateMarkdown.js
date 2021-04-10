const mit = "The MIT License: MIT(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const mozilla =  "Mozilla Public License 2.0: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
const gnu = "GNU GPL v3 License: GPL v3 (https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(data.license === "The MIT License") {
        data.license = mit;
    } else if (data.license === "Mozilla Public License 2.0") {
        data.license = mozilla;
    } else if (data.license ==="GNU GPL v3") {
        data.license = gnu;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;