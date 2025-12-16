# Quick Start Guide

Get up and running with Cypress tests in 5 minutes!

## 1. Install Dependencies

```bash
npm install
```

## 2. Run Your First Test

```bash
npm test
```

This will run all tests in headless mode.

## 3. Open Cypress Test Runner

```bash
npm run cypress:open
```

Click on any test file to run it interactively.

## 4. Upload to GitHub

```bash
# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial commit"

# Add remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push
git branch -M main
git push -u origin main
```

## 5. Watch Tests Run in GitHub Actions

1. Go to your repository on GitHub
2. Click the "Actions" tab
3. Watch your tests run automatically!

## Next Steps

- Edit `cypress/e2e/sample.cy.js` to write your own tests
- Update `cypress.config.js` with your app's URL
- Add more test files in `cypress/e2e/`
- Customize GitHub Actions workflow in `.github/workflows/cypress.yml`

## Common Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests headless |
| `npm run cypress:open` | Open Cypress UI |
| `npm run test:chrome` | Run tests in Chrome |
| `npm run test:firefox` | Run tests in Firefox |

## Need Help?

Check out the main [README.md](README.md) for detailed documentation.
