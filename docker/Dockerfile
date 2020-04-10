
FROM ubuntu:bionic as builder

RUN apt-get update
RUN apt-get install -y curl gnupg

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update
RUN apt-get install -y nodejs npm yarn

RUN apt-get install -y git
ARG tag
RUN git clone --branch $tag https://github.com/martkist/hub.git hub

WORKDIR /hub

RUN yarn install

ARG env
RUN if [ "$env" = "development" ] ; then yarn build:development ; else yarn build; fi

FROM node:stretch

COPY --from=builder /hub/build /hub

WORKDIR /hub

RUN yarn global add serve

ENTRYPOINT ["serve", "-s", "."] 