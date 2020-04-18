
FROM node:10-jessie as builder

RUN apt-get update
#RUN apt-get install -y curl gnupg

#RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
#RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

#RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -

#RUN apt-get update
#RUN apt-get install -y gcc g++ make
#RUN apt-get install -y nodejs npm yarn

RUN apt-get install -y git
ARG tag
RUN git clone --branch $tag https://github.com/martkist/hub.git hub

WORKDIR /hub

#RUN yarn install
RUN npm install

ARG env
#RUN if [ "$env" = "development" ] ; then yarn build:development ; else yarn build; fi
RUN if [ "$env" = "development" ] ; then npm run build:development ; else npm run build; fi

FROM node:10-jessie-slim

COPY --from=builder /hub/build /hub

WORKDIR /hub

#RUN yarn global add serve
RUN npm install -g serve

ENTRYPOINT ["serve", "-s", "."] 