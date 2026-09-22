# Typical frontend: Vite + React + TypeScript SPA, built then served by nginx.
# The dependency install dominates, which is the point - that is the layer a
# better cache backend would remove.
FROM node:22-alpine AS build
WORKDIR /app
# Manifest first so a source change does not reinstall the tree.
COPY package.json ./
RUN npm install --no-audit --no-fund
COPY tsconfig.json vite.config.ts index.html ./
COPY src src
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
