FROM node:9

RUN mkdir -p /usr/src/t1cg-io/

WORKDIR /usr/src/t1cg-io/

COPY . /usr/src/t1cg-io/

RUN npm i 

EXPOSE 4001

CMD ["npm", "start"]