@echo off
echo =========================================
echo Cypress Test Framework - GitHub Setup
echo =========================================
echo.

set /p REPO_URL="Enter your GitHub repository URL (e.g., https://github.com/username/repo.git): "

if "%REPO_URL%"=="" (
    echo Error: Repository URL cannot be empty
    exit /b 1
)

echo.
echo Setting up Git repository...

if exist .git (
    echo Git repository already initialized
) else (
    git init
    echo [32m√[0m Git repository initialized
)

echo.
echo Adding files to Git...
git add .
echo [32m√[0m Files added

echo.
set /p COMMIT_MSG="Enter commit message (default: 'Initial commit: Cypress test framework'): "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Initial commit: Cypress test framework

git commit -m "%COMMIT_MSG%"
echo [32m√[0m Changes committed

echo.
echo Adding remote repository...
git remote add origin "%REPO_URL%" 2>nul || git remote set-url origin "%REPO_URL%"
echo [32m√[0m Remote added

echo.
echo Pushing to GitHub...
git branch -M main
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo =========================================
    echo [32m√[0m Successfully pushed to GitHub!
    echo =========================================
    echo.
    echo Next steps:
    echo 1. Visit your repository on GitHub
    echo 2. Go to the 'Actions' tab
    echo 3. Watch your Cypress tests run automatically!
    echo.
) else (
    echo.
    echo Error: Failed to push to GitHub
    echo Please check your repository URL and try again
    exit /b 1
)

pause
