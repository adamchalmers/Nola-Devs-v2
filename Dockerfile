FROM node:20

WORKDIR /app

COPY . /app

RUN npm install && npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]
