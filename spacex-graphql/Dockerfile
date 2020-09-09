FROM node:12.18.2

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm i -s
RUN npm i -s -g @angular/cli@9.1.7 --unsafe

COPY . .

CMD ng serve --host 0.0.0.0
