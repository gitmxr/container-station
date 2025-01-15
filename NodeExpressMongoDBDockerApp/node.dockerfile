FROM        node:alpine

WORKDIR     /var/www
COPY        package*.json ./
RUN         npm install

COPY        . .

# to expose your website to the given port
EXPOSE      3000

ENTRYPOINT  ["npm", "start"]