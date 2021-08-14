FROM node:latest
WORKDIR /questions-answers-api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "startStress.js"]