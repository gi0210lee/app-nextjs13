FROM node:lts

ADD ./ /json-server
WORKDIR /json-server

RUN npm install -g npm@10.0.0
RUN npm install -g json-server

EXPOSE 9999

CMD ["json-server", "--host", "0.0.0.0", "--port", "9999", "--watch", "db.json"]