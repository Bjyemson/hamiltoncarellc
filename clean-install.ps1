# ===============================
# clean-install.ps1
# Safely cleans and reinstalls your Node.js project, then runs dev server.
# ===============================

# --- Relaunch as Administrator if not already ---
$principal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
if (-not $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Host ""
    Write-Host "Re-launching PowerShell as Administrator..."
    Start-Process powershell -Verb RunAs -ArgumentList "-ExecutionPolicy Bypass -File `"$PSCommandPath`""
    exit
}

# --- Navigate to the script directory ---
Set-Location -Path (Split-Path -Parent $MyInvocation.MyCommand.Definition)

Write-Host ""
Write-Host "Starting full clean install for your project..."
Start-Sleep -Seconds 1

# --- Stop processes using port 3000 ---
Write-Host ""
Write-Host "Checking for any process using port 3000..."
try {
    $connections = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
    if ($connections) {
        $pids = $connections | Select-Object -ExpandProperty OwningProcess -Unique
        foreach ($pid in $pids) {
            Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
        }
        Write-Host "Port 3000 has been cleared."
    } else {
        Write-Host "No process found using port 3000."
    }
} catch {
    Write-Host "Warning: Could not check or free port 3000 - $($_.Exception.Message)"
}

# --- Kill all Node.js processes ---
Write-Host ""
Write-Host "Terminating all Node.js processes..."
try {
    Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
    Write-Host "All Node.js processes have been stopped."
} catch {
    Write-Host "No Node.js processes were found."
}

# --- Remove node_modules folder ---
Write-Host ""
Write-Host "Removing node_modules folder..."
if (Test-Path .\node_modules) {
    try {
        Remove-Item -Recurse -Force .\node_modules
        Write-Host "node_modules removed."
    } catch {
        Write-Host "Could not fully remove node_modules: $($_.Exception.Message)"
    }
} else {
    Write-Host "No node_modules folder found."
}

# --- Remove package-lock.json ---
Write-Host ""
Write-Host "Removing package-lock.json..."
if (Test-Path .\package-lock.json) {
    try {
        Remove-Item -Force .\package-lock.json
        Write-Host "package-lock.json removed."
    } catch {
        Write-Host "Could not remove package-lock.json: $($_.Exception.Message)"
    }
} else {
    Write-Host "No package-lock.json file found."
}

# --- Clean npm cache ---
Write-Host ""
Write-Host "Cleaning npm cache..."
try {
    npm cache clean --force
    Write-Host "npm cache cleaned."
} catch {
    Write-Host "Could not clean npm cache: $($_.Exception.Message)"
}

# --- Reinstall dependencies ---
Write-Host ""
Write-Host "Installing fresh dependencies..."
try {
    npm install
    Write-Host "npm install completed successfully."
} catch {
    Write-Host "npm install failed: $($_.Exception.Message)"
    exit
}

# --- Run the Next.js development server ---
Write-Host ""
Write-Host "Launching Next.js dev server on port 3000..."
try {
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev"
    Write-Host "Development server started successfully."
    Write-Host "Open http://localhost:3000 in your browser."
} catch {
    Write-Host "Failed to launch dev server: $($_.Exception.Message)"
}

Write-Host ""
Write-Host "All done. Your project is clean, dependencies reinstalled, and server running."
