# Create Artifact LTS nodejs version
FROM node:21.1.0 as build

WORKDIR /artifacts
COPY package.json ./
RUN yarn install --frozen-lockfile && yarn cache clean
COPY . ./
RUN yarn build

# Stage 2: Create the production image
FROM nginx:latest-alpine as release
COPY --from=build /artifacts/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
