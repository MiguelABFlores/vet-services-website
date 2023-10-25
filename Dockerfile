# Create Artifact LTS nodejs version
FROM node:21.1.0 as build

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2: Create the production image
FROM nginx:latest as release
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
