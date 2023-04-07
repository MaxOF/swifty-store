FROM node:16-alpine3.14 as base

WORKDIR /app

COPY ["./package.json", "./yarn.lock", "./"]

RUN yarn install --pure-lockfile \
    && yarn cache clean

COPY . .

ARG APPLICATION=auth-service
ARG ENVIRONMENT=development

ENV APPLICATION=${APPLICATION}
ENV NODE_ENV=${ENVIRONMENT}

FROM base as development

ENTRYPOINT yarn start:dev ${APPLICATION}