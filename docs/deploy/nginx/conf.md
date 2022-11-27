---
sidebar_position: 3
---

# Nginx configuration

Assuming you configured the app to run on port 3000.

## Configuration file

Create a nginx configuration file:

```bash
sudo nano /etc/nginx/conf.d/metahkg.conf
```

In the following examples, replace the domains

- example.com -> you main metahkg domain / subdomain
- i.example.com -> you domain / subdomain for the [image proxy](https://github.com/willnorris/imageproxy)
- l.example.com -> you domain / subdomain for the [link shortening server](https://gitlab.com/metahkg/metahkg-links)
- rlp.example.com -> you domain / subdomain for the [link preview proxy](https://gitlab.com/metahkg/rlp-proxy-rewrite)

## Self signed certificate, or you already have a certificate

```nginx title=/etc/nginx/conf.d/metahkg.conf
server {
    server_name example.com l.example.com i.example.com rlp.example.com;
    # replace with your domains

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
    server_name example.com l.exmaple.com i.example.com rlp.example.com;
    # replace with your domain

    server_tokens off;

    listen 80;
    listen [::]:80;

    return 301 https://$host$request_uri;
}
```

## Use [Let's encrypt](https://letsencrypt.org) for certificate

```nginx title=/etc/nginx/conf.d/metahkg.conf
server {
    server_name example.com l.example.com i.example.com rlp.example.com;
    # replace with your domains

    server_tokens off;

    listen 80;
    listen [::]:80;

    location / {
        proxy_set_header Host $host;
        proxy_pass http://localhost:3000;
    }
}
```

## Reload nginx

```bash
sudo systemctl reload nginx
```

Metahkg is now available at your domain.
If you want to use [let's encrypt](https://letsencrypt.org) for ssl certificate, follow the steps at [letsencrypt](./letsencrypt).
