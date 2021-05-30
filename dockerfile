FROM node:14-alpine
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm i -g @angular/cli
RUN npm install -g @angular-devkit/build-angular
COPY . .
CMD ["ng","serve","--host=0.0.0.0"]
