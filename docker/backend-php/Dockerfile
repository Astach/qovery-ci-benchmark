# Typical backend, PHP: composer dependencies plus a Vite asset build, served by
# PHP-FPM behind nginx. This mirrors a real customer stack.
#
# Ordering matters here: manifests are copied before sources in both toolchains,
# so a source change does not reinstall composer or npm. Getting that wrong is
# the single most common cause of slow rebuilds we see.

FROM composer:2.8 AS vendor
WORKDIR /build
COPY composer.json ./
RUN composer install --no-dev --no-interaction --no-scripts --optimize-autoloader --ignore-platform-reqs

FROM node:22-alpine AS assets
WORKDIR /build
COPY package.json ./
RUN npm install --no-audit --no-fund
COPY vite.config.js ./
COPY src src
RUN npm run build

FROM php:8.3-fpm-alpine
WORKDIR /var/www/html
RUN apk add --no-cache nginx && docker-php-ext-install opcache pdo_mysql
COPY docker/nginx.conf /etc/nginx/http.d/default.conf
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
COPY public public
COPY src src
COPY --from=vendor /build/vendor vendor
COPY --from=assets /build/public/build public/build
EXPOSE 80
CMD ["entrypoint.sh"]
