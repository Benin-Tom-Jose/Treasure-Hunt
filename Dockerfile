FROM node:12.2.0-alpine as react_build 
#also say 
WORKDIR /app
#copy the react app to the container
COPY package.json ./

#prepare the container for building react 
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

COPY ./nginx ./nginx
COPY .env ./
COPY ./public ./public
COPY ./src ./src

RUN npm run build 

#prepare nginx
FROM nginx:1.16.0-alpine

COPY --from=react_build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

#fire up nginx
EXPOSE 80 
CMD ["nginx","-g","daemon off;"]