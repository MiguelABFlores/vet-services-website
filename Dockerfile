# Create Artifact LTS nodejs version
FROM node:21.1.0 as build

WORKDIR /app
COPY ./sve-app/package.json ./
RUN npm install
COPY ./sve-app ./
RUN npm run build

# Stage 2: Create the production image
FROM nginx:alpine-slim as release
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
