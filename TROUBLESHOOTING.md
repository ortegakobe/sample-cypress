# Troubleshooting Guide

Common issues and solutions for the Cypress Test Framework.

## Table of Contents
- [Installation Issues](#installation-issues)
- [Test Execution Issues](#test-execution-issues)
- [GitHub Actions Issues](#github-actions-issues)
- [Browser Issues](#browser-issues)
- [Network Issues](#network-issues)
- [Configuration Issues](#configuration-issues)

---

## Installation Issues

### Issue: `npm install` fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Cypress binary not found

**Solution:**
```bash
# Verify Cypress installation
npx cypress verify

# Reinstall Cypress binary
npx cypress install
```

### Issue: Permission denied on setup scripts

**Mac/Linux:**
```bash
chmod +x setup-github.sh
```

**Windows:**
- Right-click the .bat file → Run as Administrator

---

## Test Execution Issues

### Issue: Tests fail with "cy.visit() failed"

**Possible Causes:**
1. Base URL is incorrect
2. Server is not running
3. Network issues

**Solution:**
```javascript
// In cypress.config.js, verify baseUrl
baseUrl: 'https://your-actual-url.com'
```

### Issue: Element not found errors

**Solution:**
```javascript
// Add explicit waits
cy.get('.element', { timeout: 10000 }).should('exist')

// Or wait for API calls
cy.intercept('GET', '/api/**').as('apiCall')
cy.wait('@apiCall')
```

### Issue: Tests pass locally but fail in CI

**Common Causes:**
- Timing differences
- Different screen resolutions
- Missing environment variables

**Solution:**
```javascript
// Use more reliable selectors
cy.get('[data-testid="element"]') // Good
cy.get('.dynamic-class-name')     // Bad

// Add explicit waits
cy.get('button').should('be.visible').click()

// Set viewport in test
cy.viewport(1280, 720)
```

### Issue: "cypress is not recognized" error

**Solution:**
```bash
# Use npx
npx cypress open

# Or add to npm scripts (already included)
npm run cypress:open
```

---

## GitHub Actions Issues

### Issue: Workflow not running

**Check:**
1. Workflow file is in `.github/workflows/`
2. File has `.yml` extension
3. Branch name matches trigger branches
4. Actions are enabled in repo settings

**Solution:**
```bash
# Verify file location
ls -la .github/workflows/

# Check branch name
git branch

# Manually trigger workflow
# Go to Actions tab → Select workflow → Run workflow
```

### Issue: Tests fail only in GitHub Actions

**Common Causes:**
- Missing environment variables
- Different Node version
- Timing issues

**Solution:**

Add environment variables in workflow:
```yaml
env:
  CYPRESS_baseUrl: ${{ secrets.BASE_URL }}
  API_KEY: ${{ secrets.API_KEY }}
```

Specify Node version:
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'
```

### Issue: Artifacts not uploading

**Solution:**

Verify paths in workflow:
```yaml
- name: Upload screenshots
  uses: actions/upload-artifact@v4
  if: failure()
  with:
    name: cypress-screenshots
    path: cypress/screenshots
    if-no-files-found: ignore  # Important!
```

### Issue: Workflow timeout

**Solution:**

Add timeout to workflow:
```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    timeout-minutes: 30  # Add this
```

Or in Cypress config:
```javascript
defaultCommandTimeout: 10000,
responseTimeout: 30000,
```

---

## Browser Issues

### Issue: Chrome not found

**Solution:**
```bash
# Verify available browsers
npx cypress info

# Run with specific browser
npm run test:chrome
```

### Issue: Firefox tests fail

**Solution:**
Firefox can be stricter. Ensure:
- All waits are explicit
- No hardcoded timeouts
- Cross-browser compatible CSS

### Issue: Headless mode behaves differently

**Solution:**
```bash
# Test in headed mode locally
npx cypress run --headed --browser chrome

# Or use --no-exit to keep browser open
npx cypress run --headed --no-exit
```

---

## Network Issues

### Issue: API calls failing

**Solution:**
```javascript
// Add intercepts to debug
cy.intercept('GET', '/api/**', (req) => {
  console.log('Request:', req)
}).as('apiCall')

cy.visit('/')
cy.wait('@apiCall')
```

### Issue: CORS errors

**Note:** Cypress runs tests in the browser, so CORS applies.

**Solution:**
```javascript
// Use cy.request() for API testing (bypasses CORS)
cy.request('GET', 'https://api.example.com/data')

// Or configure baseUrl to same origin
```

### Issue: Slow test execution

**Solution:**
```javascript
// Reduce unnecessary waits
// Bad
cy.wait(5000)

// Good
cy.get('.element').should('be.visible')

// Stub slow API calls
cy.intercept('GET', '/slow-api', { fixture: 'quick-response.json' })
```

---

## Configuration Issues

### Issue: Environment variables not working

**Create `cypress.env.json`:**
```json
{
  "apiUrl": "https://api.example.com",
  "username": "testuser"
}
```

**Access in tests:**
```javascript
cy.visit(Cypress.env('apiUrl'))
```

**In GitHub Actions:**
```yaml
env:
  CYPRESS_apiUrl: ${{ secrets.API_URL }}
```

### Issue: Wrong base URL

**Solution:**
```javascript
// cypress.config.js
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',  // Update this
  },
})

// Or override in test
cy.visit('https://different-url.com')
```

### Issue: Screenshots/videos not generated

**Solution:**
```javascript
// cypress.config.js
module.exports = defineConfig({
  e2e: {
    video: true,              // Enable videos
    screenshotOnRunFailure: true,  // Enable screenshots
  },
})
```

---

## Common Error Messages

### "Timed out retrying"
- Element not found or not visible
- **Fix:** Use explicit waits, verify selectors

### "CypressError: cy.visit() failed"
- URL incorrect or server not running
- **Fix:** Check baseUrl, ensure server is running

### "can only call visit when prefixed with cy"
- Async/await issue
- **Fix:** Don't use async/await with Cypress commands

### "A command was already running"
- Command conflict
- **Fix:** Ensure commands run sequentially, not in parallel

---

## Debug Mode

### Enable Debug Output

```bash
# Verbose output
DEBUG=cypress:* npm test

# CLI debug
npx cypress run --headed --no-exit

# Browser console
# Use cy.debug() or cy.pause() in tests
```

### Debug in Tests

```javascript
// Pause test execution
cy.pause()

// Log values
cy.get('.element').then(($el) => {
  console.log('Element:', $el)
})

// Debug command
cy.debug()
```

---

## Getting More Help

### Check Logs

**Local:**
- Check terminal output
- Look in `cypress/screenshots/` and `cypress/videos/`

**GitHub Actions:**
- Go to Actions tab
- Click on failed workflow
- Check logs for each step
- Download artifacts

### Report Issues

Use the bug report template:
```bash
.github/ISSUE_TEMPLATE/bug_report.md
```

Include:
- Error message
- Steps to reproduce
- Environment (OS, Node version, Cypress version)
- Relevant logs

### Useful Commands

```bash
# Check Cypress version
npx cypress --version

# Check Node version
node --version

# Check npm version
npm --version

# Clear Cypress cache
npx cypress cache clear

# List Cypress cache
npx cypress cache list

# Verify installation
npx cypress verify

# Get system info
npx cypress info
```

---

## Best Practices to Avoid Issues

1. **Use data-testid attributes**
   ```html
   <button data-testid="submit-btn">Submit</button>
   ```
   ```javascript
   cy.get('[data-testid="submit-btn"]').click()
   ```

2. **Add explicit waits**
   ```javascript
   cy.get('.element').should('be.visible').click()
   ```

3. **Stub slow APIs**
   ```javascript
   cy.intercept('GET', '/slow-api', { fixture: 'fast.json' })
   ```

4. **Keep tests independent**
   - Each test should work in isolation
   - Use `beforeEach()` for setup

5. **Use meaningful assertions**
   ```javascript
   cy.get('.message').should('contain', 'Success')
   ```

---

## Still Having Issues?

1. Check [Cypress Documentation](https://docs.cypress.io)
2. Search [Cypress GitHub Issues](https://github.com/cypress-io/cypress/issues)
3. Create an issue in this repository
4. Check Cypress Discord/Community forums

---

**Remember:** Most issues are configuration-related. Double-check your settings first!
