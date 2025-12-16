#!/bin/bash

echo "========================================="
echo "Cypress Test Framework - GitHub Setup"
echo "========================================="
echo ""

read -p "Enter your GitHub repository URL (e.g., https://github.com/username/repo.git): " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "Error: Repository URL cannot be empty"
    exit 1
fi

echo ""
echo "Setting up Git repository..."

if [ -d ".git" ]; then
    echo "Git repository already initialized"
else
    git init
    echo "✓ Git repository initialized"
fi

echo ""
echo "Adding files to Git..."
git add .
echo "✓ Files added"

echo ""
read -p "Enter commit message (default: 'Initial commit: Cypress test framework'): " COMMIT_MSG
COMMIT_MSG=${COMMIT_MSG:-"Initial commit: Cypress test framework"}

git commit -m "$COMMIT_MSG"
echo "✓ Changes committed"

echo ""
echo "Adding remote repository..."
git remote add origin "$REPO_URL" 2>/dev/null || git remote set-url origin "$REPO_URL"
echo "✓ Remote added"

echo ""
echo "Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================="
    echo "✓ Successfully pushed to GitHub!"
    echo "========================================="
    echo ""
    echo "Next steps:"
    echo "1. Visit your repository on GitHub"
    echo "2. Go to the 'Actions' tab"
    echo "3. Watch your Cypress tests run automatically!"
    echo ""
else
    echo ""
    echo "Error: Failed to push to GitHub"
    echo "Please check your repository URL and try again"
    exit 1
fi
