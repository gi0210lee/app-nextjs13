FROM node:lts

ADD ./ /app-nextjs13
WORKDIR /app-nextjs13/nextapp

RUN apt-get update
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]