FROM node

USER node

RUN mkdir/home/node/code

WORKDIR /home/node/code

COPY --chown=node:node *.json .

RUN npm install

COPY --chown=node:node . .

CMD ["node", "server.js"]
