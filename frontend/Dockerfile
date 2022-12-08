FROM node:16.15

RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend

ADD . /usr/src/frontend

RUN npm install --production
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
