FROM node:16-alpine
USER root
WORKDIR /opt/app-root

RUN mkdir ./ezpays-backend-test
WORKDIR /opt/app-root/ezpays-backend-test
COPY ./package.json ./package.json
RUN npm install
COPY . ./

RUN chgrp -R 0 ./ \
&& chmod -R g=u ./ 

RUN npm run build

USER 1001
EXPOSE 8087

CMD [ "npm", "run", "start" ]