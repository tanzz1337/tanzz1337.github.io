@echo off
setlocal enabledelayedexpansion
set i=1
for %%a in (*.jpeg) do (
    ren "%%a" "!i!.jpeg"
    set /a i+=1
)
endlocal
