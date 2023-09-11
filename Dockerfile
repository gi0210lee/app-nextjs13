FROM node:lts

ADD ./ /app-nextjs13
WORKDIR /app-nextjs13/nextapp

RUN apt-get update
RUN npm config set registry http://registry.npmjs.org/
RUN npm install -g npm@10.0.0
RUN npm install
RUN npm run build
# RUN npx json-server --port 9999 --watch db.json

EXPOSE 3000

CMD ["npm", "run", "dev"]