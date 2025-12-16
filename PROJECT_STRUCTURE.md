# Project Structure

```
cypress-test-framework/
│
├── .github/                          # GitHub configuration
│   ├── workflows/
│   │   ├── cypress.yml              # Main CI/CD workflow (multi-browser)
│   │   └── cypress-simple.yml       # Simple workflow example
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md           # Bug report template
│   │   └── feature_request.md      # Feature request template
│   └── PULL_REQUEST_TEMPLATE.md    # Pull request template
│
├── cypress/                          # Cypress test directory
│   ├── e2e/                         # Test files
│   │   ├── sample.cy.js            # UI test examples
│   │   ├── api-test.cy.js          # API test examples
│   │   └── advanced-example.cy.js   # Advanced patterns
│   ├── fixtures/                    # Test data
│   │   └── example.json            # Sample fixture data
│   ├── screenshots/                 # Auto-generated on failures
│   ├── videos/                      # Auto-generated test recordings
│   └── support/                     # Support files
│       ├── commands.js             # Custom commands
│       └── e2e.js                  # Global configuration
│
├── node_modules/                     # Dependencies (auto-generated)
│
├── .env                             # Environment variables (local)
├── .gitignore                       # Git ignore rules
├── cypress.config.js                # Cypress configuration
├── cypress.env.example.json         # Environment variables template
├── package.json                     # Project metadata & scripts
├── package-lock.json                # Dependency lock file
│
├── LICENSE                          # MIT License
├── README.md                        # Main documentation
├── QUICKSTART.md                    # Quick start guide
├── CONTRIBUTING.md                  # Contribution guidelines
├── SETUP_SUMMARY.md                 # Complete setup summary
├── PROJECT_STRUCTURE.md             # This file
│
├── setup-github.sh                  # Setup script (Mac/Linux)
└── setup-github.bat                 # Setup script (Windows)
```

## Directory Details

### `.github/`
Contains GitHub-specific configurations including Actions workflows and issue/PR templates.

**workflows/**: CI/CD automation
- `cypress.yml`: Runs tests on multiple browsers, uploads artifacts
- `cypress-simple.yml`: Basic workflow for simple projects

**ISSUE_TEMPLATE/**: Standardized issue templates
- `bug_report.md`: For reporting bugs
- `feature_request.md`: For suggesting new features

### `cypress/`
Main Cypress directory containing all test-related files.

**e2e/**: End-to-end test files
- All test files must end with `.cy.js`
- Tests are organized by feature or page

**fixtures/**: Static test data
- JSON files containing mock data
- Reusable across multiple tests

**support/**: Global configuration and custom commands
- `commands.js`: Custom Cypress commands (e.g., `cy.login()`)
- `e2e.js`: Runs before all tests, sets up global config

**screenshots/**: Auto-generated (git-ignored)
- Created when tests fail or `cy.screenshot()` is called

**videos/**: Auto-generated (git-ignored)
- Records each test spec file execution

## Key Files

### Configuration Files

| File | Purpose |
|------|---------|
| `cypress.config.js` | Main Cypress configuration (baseUrl, viewports, etc.) |
| `package.json` | Dependencies and npm scripts |
| `cypress.env.example.json` | Template for environment variables |
| `.env` | Local environment variables (git-ignored) |
| `.gitignore` | Files to exclude from Git |

### Test Files

| File | Contains |
|------|----------|
| `sample.cy.js` | Basic UI interactions and assertions |
| `api-test.cy.js` | API request testing examples |
| `advanced-example.cy.js` | Advanced patterns (fixtures, intercepts, viewports) |

### Documentation

| File | Purpose |
|------|---------|
| `README.md` | Complete project documentation |
| `QUICKSTART.md` | Get started in 5 minutes |
| `CONTRIBUTING.md` | How to contribute |
| `SETUP_SUMMARY.md` | What's included and how to use it |
| `PROJECT_STRUCTURE.md` | This file - project layout |
| `LICENSE` | MIT License terms |

### Utility Scripts

| File | Purpose |
|------|---------|
| `setup-github.sh` | Automated GitHub setup (Mac/Linux) |
| `setup-github.bat` | Automated GitHub setup (Windows) |

## Adding New Files

### New Test File
Create in `cypress/e2e/` with `.cy.js` extension:
```javascript
// cypress/e2e/my-feature.cy.js
describe('My Feature', () => {
  it('should work', () => {
    cy.visit('/')
    // test code
  })
})
```

### New Fixture
Create in `cypress/fixtures/` as JSON:
```json
// cypress/fixtures/users.json
{
  "admin": { "username": "admin", "password": "pass123" },
  "user": { "username": "user", "password": "pass456" }
}
```

### New Custom Command
Add to `cypress/support/commands.js`:
```javascript
Cypress.Commands.add('myCommand', (arg) => {
  // command implementation
})
```

## Auto-Generated Directories

These directories are created automatically and should not be committed to Git:

- `node_modules/` - npm dependencies
- `cypress/screenshots/` - failure screenshots
- `cypress/videos/` - test recordings
- `cypress/downloads/` - downloaded files during tests

All are included in `.gitignore`.

## Workflow Files

### `cypress.yml` Features
- Multi-browser testing matrix
- Artifact uploads (screenshots, videos)
- Runs on push and PR
- Manual trigger option

### `cypress-simple.yml` Features
- Single browser testing
- Server start/wait capability
- Basic workflow for simple projects

## Best Practices

### File Naming
- Tests: `feature-name.cy.js`
- Fixtures: `descriptive-name.json`
- Custom commands: Descriptive function names

### Organization
- Group related tests in the same file
- Use subdirectories in `e2e/` for large projects
- Keep fixtures small and focused
- Document custom commands

### Git Workflow
- Commit meaningful changes
- Use descriptive commit messages
- Test locally before pushing
- Review CI results after push
