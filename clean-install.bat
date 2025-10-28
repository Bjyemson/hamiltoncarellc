@echo off
:: ==============================================================
::  Hamilton Care Ready - Clean Install Script
::  Safely clears dependencies, kills stuck processes,
::  and reinstalls everything fresh.
:: ==============================================================

:: Check for Administrator privileges
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo.
    echo =====================================================
    echo  This script needs Administrator privileges.
    echo  Please approve the prompt to continue.
    echo =====================================================
    echo.
    powershell -Command "Start-Process '%~f0' -Verb RunAs"
    exit /b
)

:: Enable color
color 0A
echo =====================================================
echo       🧹 HAMILTON CARE READY - CLEAN INSTALL
echo =====================================================
echo.

:: Stop any running Node.js processes
echo Stopping any running Node.js processes...
taskkill /F /IM node.exe >nul 2>&1
echo Done.
echo.

:: Remove node_modules folder
echo Removing node_modules folder...
if exist node_modules (
    rmdir /s /q node_modules
    echo node_modules folder removed.
) else (
    echo node_modules folder not found, skipping.
)
echo.

:: Remove package-lock.json
echo Removing package-lock.json...
if exist package-lock.json (
    del /f /q package-lock.json
    echo package-lock.json removed.
) else (
    echo No package-lock.json found, skipping.
)
echo.

:: Clean npm cache (just in case)
echo Cleaning npm cache...
npm cache clean --force
echo.

:: Reinstall dependencies
echo Installing dependencies fresh...
call npm install
echo.

:: Finish
echo =====================================================
echo ✅ CLEAN INSTALL COMPLETE!
echo You can now run your project with:
echo     npm run dev
echo =====================================================
pause
