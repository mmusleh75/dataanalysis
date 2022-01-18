
echo off
echo Setting up the necessary environment variables

set javaPath="C:\Program Files\Java\jdk-15.0.1"
set /p javaPath=Full path for java folder  (default - %javaPath%)?:

SET JAVA_HOME=%javaPath%\bin

echo %JAVA_HOME%