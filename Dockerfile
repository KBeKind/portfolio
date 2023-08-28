FROM node:20-alpine

WORKDIR /src/app

COPY . .

RUN npm install --omit=dev

RUN npm run build

CMD ["npm", "start"]

