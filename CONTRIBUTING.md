# Contributing to Cypress Test Framework

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Workflow

### Adding New Tests

1. Create a new test file in `cypress/e2e/` with the `.cy.js` extension
2. Follow the existing test structure and naming conventions
3. Use descriptive test names that explain what is being tested
4. Group related tests using `describe` and `context` blocks

Example:
```javascript
describe('Feature Name', () => {
  context('Specific Scenario', () => {
    it('should do something specific', () => {
      // Test implementation
    })
  })
})
```

### Writing Good Tests

- **Be Specific**: Test one thing at a time
- **Be Independent**: Tests should not depend on each other
- **Be Repeatable**: Tests should produce the same result every time
- **Use Fixtures**: Store test data in fixtures for reusability
- **Add Comments**: Explain complex logic or workarounds

### Custom Commands

Add reusable commands to `cypress/support/commands.js`:

```javascript
Cypress.Commands.add('commandName', (param) => {
  // Command implementation
})
```

### Fixtures

Add test data to `cypress/fixtures/` as JSON files:

```json
{
  "key": "value",
  "array": [1, 2, 3]
}
```

## Testing Your Changes

### Run Tests Locally

```bash
# Run all tests
npm test

# Open test runner
npm run cypress:open

# Run specific browser
npm run test:chrome
```

### Verify GitHub Actions

1. Push your changes to your fork
2. Check that GitHub Actions workflows pass
3. Review any failed tests and fix issues

## Pull Request Process

1. **Update Documentation**: Update README.md if you add new features
2. **Write Tests**: Include tests for new functionality
3. **Follow Code Style**: Match the existing code style
4. **Commit Messages**: Use clear, descriptive commit messages
5. **PR Description**: Explain what changes you made and why

### Commit Message Format

```
type: brief description

Detailed explanation if needed

Fixes #issue_number
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `test`: Adding or updating tests
- `refactor`: Code refactoring
- `chore`: Maintenance tasks

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Test improvement

## Testing
How to test these changes

## Checklist
- [ ] Tests pass locally
- [ ] GitHub Actions pass
- [ ] Documentation updated
- [ ] Code follows project style
```

## Code Style Guidelines

### JavaScript

- Use semicolons
- Use single quotes for strings
- Use 2 spaces for indentation
- Use meaningful variable names
- Add comments for complex logic

### Test Organization

```javascript
describe('Top-level feature', () => {
  beforeEach(() => {
    // Setup code
  })

  context('Specific scenario', () => {
    it('should do something', () => {
      // Test code
    })
  })

  afterEach(() => {
    // Cleanup code
  })
})
```

## Reporting Issues

### Bug Reports

Include:
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots or videos if applicable
- Environment details (OS, browser, Node version)

### Feature Requests

Include:
- Clear description of the feature
- Use cases and benefits
- Potential implementation approach

## Questions?

Feel free to open an issue for any questions or discussions.

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License.
