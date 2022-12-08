FROM node:16.15

WORKDIR /src
ADD . ./

RUN npm install
RUN npm run build

COPY . .

EXPOSE 1337

CMD ["npm","start"]
