FROM node:20-alpine

WORKDIR /src/app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

RUN npm run build

CMD ["npm", "start"]

