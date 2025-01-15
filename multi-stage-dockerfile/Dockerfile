FROM node:alpine AS node-build 

WORKDIR /app

# use regular expression to copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files from the astro@latest folder
COPY . .

# Run the build command to generate the dist folder
RUN npm run build

FROM nginx:alpine 

WORKDIR /usr/share/nginx/html

# Copy the dist folder from the node-build stage
COPY --from=node-build /app/dist .
