// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) =>
  license !== "None"
  ? `![${license}](https://img.shields.io/static/v1?label=license&message=${license}&color=green)`
    : "";

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "ISC": 
      return "(https://opensource.org/licenses/ISC)"; 

    case "MIT":
      return "https://opensource.org/licenses/MIT";

    case "Apache":
      return "https://opensource.org/licenses/Apache-2.0";

    case "IBM":
      return "https://opensource.org/licenses/IPL-1.0";

    case "BSD":
      return "https://opensource.org/licenses/BSD-3-Clause";

    default:
      return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;