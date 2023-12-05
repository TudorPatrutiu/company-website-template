# Stage 1: Build the React application
FROM node:latest as build
WORKDIR /app
COPY act-before-react/package.json act-before-react/package-lock.json ./
RUN npm install
COPY act-before-react/ ./
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
