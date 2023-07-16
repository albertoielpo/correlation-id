FROM node:18.16.1-alpine
# RUN apt-get update && apt-get install -y python make g++ git ca-certificates curl wget gnupg dirmngr xz-utils && rm -rf /var/lib/apt/lists/*
RUN rm -rf /var/lib/apt/lists/*
WORKDIR /opt/app
COPY package.json package-lock.json tsconfig.json tsconfig.build.json nest-cli.json .eslintrc.js ./
# npm cache clear --force
RUN npm install
COPY src src
COPY test test
RUN npm run build
EXPOSE 3000
CMD npm run start