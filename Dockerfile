FROM node:latest
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN yarn
RUN yarn bootstrap
RUN yarn build
EXPOSE 3000
CMD ["yarn","start:pokedex"]
