# Cypress Test Framework

![Cypress Tests](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/workflows/Cypress%20Tests/badge.svg)

A complete Cypress testing framework with GitHub Actions integration for automated testing.

> **Note:** After uploading to GitHub, replace `YOUR_USERNAME/YOUR_REPO_NAME` in the badge URL above with your actual GitHub username and repository name.

## Features

- Complete Cypress E2E testing setup
- Sample tests for UI and API testing
- GitHub Actions workflows for CI/CD
- Multi-browser testing support (Chrome, Firefox, Edge)
- Video recording and screenshot capture on failures
- Custom commands and fixtures
- Automatic test artifact uploads

## Project Structure

```
cypress-test-framework/
├── .github/
│   └── workflows/
│       ├── cypress.yml           # Main workflow with multi-browser testing
│       └── cypress-simple.yml    # Simple workflow example
├── cypress/
│   ├── e2e/
│   │   ├── sample.cy.js         # UI test examples
│   │   └── api-test.cy.js       # API test examples
│   ├── fixtures/
│   │   └── example.json         # Test data fixtures
│   └── support/
│       ├── commands.js          # Custom Cypress commands
│       └── e2e.js              # Support file configuration
├── cypress.config.js            # Cypress configuration
└── package.json                 # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Git

### Local Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd cypress-test-framework
```

2. Install dependencies:
```bash
npm install
```

3. Verify installation:
```bash
npx cypress verify
```

## Running Tests

### Interactive Mode (Cypress Test Runner)

Open Cypress Test Runner to run tests interactively:
```bash
npm run cypress:open
```

### Headless Mode

Run all tests in headless mode:
```bash
npm test
```

Or:
```bash
npm run cypress:run
```

### Browser-Specific Tests

Run tests in specific browsers:
```bash
npm run test:chrome
npm run test:firefox
```

## GitHub Setup Instructions

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Enter a repository name (e.g., "cypress-test-framework")
5. Choose visibility (Public or Private)
6. Do NOT initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### Step 2: Initialize Git and Push Your Code

In your project directory, run these commands:

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Cypress test framework setup"

# Add your GitHub repository as remote (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Actions

1. Go to your repository on GitHub
2. Click on the "Actions" tab
3. GitHub Actions should be enabled by default
4. You should see your workflows listed:
   - "Cypress Tests" (main workflow)
   - "Cypress Simple Tests" (simple workflow)

### Step 4: Verify GitHub Actions Workflow

1. After pushing your code, go to the "Actions" tab
2. You should see a workflow run triggered by your push
3. Click on the workflow run to see details
4. Watch the tests execute in real-time
5. Check for:
   - Green checkmarks (tests passed)
   - Test artifacts (videos, screenshots)
   - Logs for each step

### Step 5: Configure Branch Protection (Optional)

1. Go to Settings → Branches
2. Click "Add rule"
3. Enter branch name pattern: `main`
4. Check "Require status checks to pass before merging"
5. Select the Cypress test workflow
6. Save changes

## GitHub Actions Workflows

### Main Workflow (cypress.yml)

- Triggers on push and pull requests to main/master/develop branches
- Runs tests on multiple browsers (Chrome, Firefox, Edge)
- Uploads artifacts on failure
- Matrix strategy for parallel testing

### Simple Workflow (cypress-simple.yml)

- Basic workflow example
- Single browser testing
- Includes server start and wait capabilities

## Customization

### Modify Base URL

Edit `cypress.config.js`:
```javascript
baseUrl: 'https://your-app-url.com'
```

### Add Environment Variables

Create a `cypress.env.json` file:
```json
{
  "apiUrl": "https://api.example.com",
  "username": "testuser",
  "password": "testpass"
}
```

Note: Add `cypress.env.json` to `.gitignore` for sensitive data.

### GitHub Secrets

For sensitive data in GitHub Actions:

1. Go to repository Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add secrets like `API_KEY`, `TEST_USERNAME`, etc.
4. Use in workflow:
```yaml
env:
  API_KEY: ${{ secrets.API_KEY }}
```

## Writing Tests

### Example Test Structure

```javascript
describe('Feature Name', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should do something', () => {
    cy.get('button').click()
    cy.get('.result').should('be.visible')
  })
})
```

### Using Fixtures

```javascript
cy.fixture('example.json').then((data) => {
  cy.log(data.name)
})
```

### Custom Commands

Use the custom commands defined in `cypress/support/commands.js`:

```javascript
cy.getByDataTestId('submit-button').click()
```

## Troubleshooting

### Tests Fail Locally but Pass in CI

- Check Node.js versions match
- Verify all dependencies are installed
- Clear Cypress cache: `npx cypress cache clear`

### GitHub Actions Workflow Not Triggering

- Verify workflow file is in `.github/workflows/`
- Check branch names match the triggers
- Ensure Actions are enabled in repository settings

### Browser Issues

- Update Cypress: `npm install cypress@latest`
- Clear browser cache
- Check browser compatibility in `cypress.config.js`

## Resources

- [Cypress Documentation](https://docs.cypress.io)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Cypress GitHub Action](https://github.com/cypress-io/github-action)

## License

MIT

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Support

For issues or questions:
- Check existing GitHub Issues
- Create a new issue with detailed information
- Include error messages and logs
