// scripts/generate-html-report.js
// Simple script stub: in a real setup, transform JUnit XML into an HTML summary.
// For now, just create a placeholder HTML file so GitHub Actions can upload it.

const fs = require('fs')
const path = require('path')

const reportsDir = path.join(__dirname, '..', 'cypress', 'reports')
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true })
}

const htmlPath = path.join(reportsDir, 'index.html')
const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Cypress Test Report</title>
</head>
<body>
  <h1>Cypress Test Report</h1>
  <p>This is a placeholder HTML report. JUnit XML files are in <code>cypress/results/junit</code>.</p>
</body>
</html>`

fs.writeFileSync(htmlPath, content)
console.log('Generated HTML report at', htmlPath)

