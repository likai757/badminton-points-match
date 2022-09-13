FROM alpine
ADD server/ /usr/local/node-server
WORKDIR /usr/local/node-server
RUN apk add nodejs npm && npm install -g cnpm --registry=https://registry.npm.taobao.org && cnpm i && npm run tsc
CMD ["npm","start"]