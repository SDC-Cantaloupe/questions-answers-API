FROM node:latest
WORKDIR /questions-answers-api
COPY . /questions-answers-api
RUN npm install
CMD ["node", "startStress.js"]