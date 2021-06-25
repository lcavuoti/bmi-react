# pull official base image
FROM node:13.12.0-alpine
# add a bash shell to the image
RUN apk add --no-cache bash
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
RUN echo "Path: $PATH"
# install app dependencies
COPY package.json ./
#COPY package-lock.json ./
#RUN npm install --silent
#RUN npm install react-scripts@3.4.1 -g --silent
RUN yarn --silent
# add All to app
COPY . ./

# start app
#CMD ["npm", "start"]
# Best-Practice with ENTRYPOINT!
ENTRYPOINT ["yarn", "start"]
