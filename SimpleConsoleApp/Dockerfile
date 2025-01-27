# Use the official .NET SDK image to build and publish the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /app

# Copy the source code
COPY *.csproj ./

# Restore dependencies
RUN dotnet restore

# Copy the rest of application code  
COPY . .

# Build the application 
RUN dotnet publish -c Release -o out

# Use the runtime-only image for the final stage
FROM mcr.microsoft.com/dotnet/runtime:8.0 AS runtime

WORKDIR /app

# Copy the build output to the runtime image
COPY --from=build /app/out .

# Set the entry point to the application
ENTRYPOINT ["dotnet", "SimpleConsoleApp.dll"]





 