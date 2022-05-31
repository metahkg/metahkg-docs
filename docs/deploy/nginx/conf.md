---
sidebar_position: 3
---

# Nginx configuration

Assuming you configured the app to run on port 3000.

## Configuration file

Create a nginx configuration file:

```bash
sudo nano /etc/nginx/sites-available/metahkg.conf
```

## Self signed certificate, or you already have a certificate

```nginx
# /etc/nginx/sites-available/metahkg.conf

server {
    server_name example.com;
    # replace example.com with your domain

    server_tokens off;

    listen 443 ssl;
    listen [::]:443 ssl;

    ssl_certificate /etc/ssl/certs/ssl-cert-snakeoil.pem;
    # replace with your certificate
    ssl_certificate_key /etc/ssl/private/ssl-cert-snakeoil.key;
    # replace with your private key

    
    location / {
        proxy_set_header Host $host;
        proxy_pass http://localhost:3000;
    }
}
server {
    server_name example.com;
    # replace with your domain

    server_tokens off;

    listen 80;
    listen [::]:80;

    return 301 https://$host$request_uri;
}
```

## Use Let's encrypt for certificate

```nginx
# /etc/nginx/sites-available/example.com.conf

server {
    server_name example.com;
    # replace example.com with your domain

    server_tokens off;

    listen 80;
    listen [::]:80;

    location / {
        proxy_set_header Host $host;
        proxy_pass http://localhost:3000;
    }
}
```

## Enable the site

```bash
$ ln -s /etc/nginx/sites-available/metahkg.conf /etc/nginx/sites-enabled/
# replace the filename with yours

$ sudo systemctl reload nginx
# reload nginx
```

Metahkg is now available at your domain.
If you use [let's encrypt](https://letsencrypt.org), follow the steps at [letsencrypt](../letsencrypt).
