FROM node:16
ENV NODE_ENV=production

RUN mkdir /code/
WORKDIR /code
ADD ./package.json .
ADD ./package-lock.json .

RUN npm install

ADD . /code/

RUN npm run build

FROM nginx:latest
COPY --from=0 /code/dist/ /usr/share/nginx/html/

ADD ./docker/nginx.conf /etc/nginx/nginx.conf
