FROM ubuntu:16.04


RUN apt-get update \
    && apt-get install -y gcc build-essential \
    && apt-get clean 

# copy and install nginx
COPY nginx-0.8.41.tar.gz /tmp/nginx-0.8.41.tar.gz
RUN cd /tmp \
        && tar -xvf nginx-0.8.41.tar.gz \
        && cd nginx-0.8.41 \
        && ./configure --without-http_rewrite_module --without-http-cache --without-http_gzip_module \
        && make \
        && make install

RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
    && echo "daemon off;" >> /usr/local/nginx/conf/nginx.conf

# ADD default /etc/nginx/sites-available/default

EXPOSE 80
CMD ["/usr/local/nginx/sbin/nginx"]
