FROM node:12.2.0
WORKDIR /app
COPY package.json /app/package.json

RUN 
COPY . .
EXPOS 3000

CMD  "start"