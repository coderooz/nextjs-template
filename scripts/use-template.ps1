param(
    [Parameter(Mandatory = $true)]
    [string]$TemplateName,
    [Parameter(Mandatory = $true)]
    [string]$TargetDir,
    [string]$AppName = ""
)

$TemplateDir = Join-Path (Split-Path $PSScriptRoot -Parent) "templates" $TemplateName

if (-not (Test-Path $TemplateDir)) {
    Write-Error "Template '$TemplateName' not found in templates/"
    exit 1
}

if (Test-Path $TargetDir) {
    Write-Error "Target directory '$TargetDir' already exists"
    exit 1
}

# Copy template
Write-Host "Copying template '$TemplateName' to '$TargetDir'..." -ForegroundColor Green
Copy-Item -Path $TemplateDir -Destination $TargetDir -Recurse -Force

# Update package.json name if provided
if ($AppName) {
    $PackageJson = Join-Path $TargetDir "package.json"
    if (Test-Path $PackageJson) {
        $Content = Get-Content $PackageJson -Raw | ConvertFrom-Json
        $Content.name = $AppName
        $Content | ConvertTo-Json -Depth 10 | Set-Content $PackageJson
    }
}

# Init git
Set-Location $TargetDir
git init

Write-Host "Template applied successfully!" -ForegroundColor Green
Write-Host "Run: cd $TargetDir && npm install && npm run dev" -ForegroundColor Yellow
