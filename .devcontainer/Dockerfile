FROM php:8.5-cli

RUN apt-get update && apt-get install -y \
    bash \
    git \
    unzip \
    libzip-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libwebp-dev \
    libicu-dev \
    libyaml-dev \
    libexif-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install -j$(nproc) \
        zip \
        gd \
        intl \
        exif

RUN pecl install apcu && docker-php-ext-enable apcu
RUN pecl install yaml && docker-php-ext-enable yaml

RUN curl -L https://getgrav.org/download/core/grav/latest -o /tmp/grav.zip \
    && unzip /tmp/grav.zip -d /var/www/html \
    && mv /var/www/html/grav/* /var/www/html/ \
    && rm -rf /var/www/html/grav /tmp/grav.zip

RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html \
    && chsh -s /bin/bash www-data
    
WORKDIR /var/www/html
RUN bin/gpm install devtools

RUN ln -s /workspace/ada-theme /var/www/html/user/themes/ada-theme

# remove Gravs default config and replace with the local one
RUN rm /var/www/html/user/config/system.yaml
RUN ln -s /workspace/system.yaml /var/www/html/user/config/system.yaml

# remove Gravs default pages and replace with the local ones
RUN rm -r /var/www/html/user/pages
RUN ln -s /workspace/pages /var/www/html/user/pages

WORKDIR /workspace
USER www-data

