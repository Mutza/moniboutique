@echo off
if "%~1"=="" (
    echo Usage: make commit message
    exit /b 1
)

git add .
git commit -m "%*"
git push origin main