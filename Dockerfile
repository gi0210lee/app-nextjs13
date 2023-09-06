FROM node:lts

WORKDIR /nextapp
COPY ./nextapp/ ./

RUN apt-get update

CMD ["npm", "run", "dev"]