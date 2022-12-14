# Stage 1 - Create react image from node image
FROM node:latest as build-stage
# Working directory path in container
WORKDIR /app
# Copies files from local computer (first path, which is relative to context set) to location in container (second path) relative to workdir set above
COPY . .
# Install packages in container
RUN npm install

# run webpack prod build
RUN npm run build

# Stage 2 - Launch image with nginx
# Copy the react act build above in nginx
FROM nginx:alpine
# copy nginx config file to default place in container so that refresh works
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=build-stage app/dist .
# Containers run nginx with global directives and daemon off
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
