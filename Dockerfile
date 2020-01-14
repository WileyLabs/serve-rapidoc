FROM node:13.6.0

WORKDIR /install

COPY . .

RUN npm i -g .

WORKDIR /specs

ENTRYPOINT ["/usr/local/bin/serve-rapidoc"]
