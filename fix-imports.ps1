Get-ChildItem -Path "src\components\ui" -Filter "*.tsx" | ForEach-Object {
    $content = Get-Content $_.FullName
    $content = $content -replace '@[0-9.]+', ''
    Set-Content -Path $_.FullName -Value $content
    Write-Host "Fixed: $($_.Name)"
}
Write-Host "All imports fixed!"
