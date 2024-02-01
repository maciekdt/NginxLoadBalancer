FROM nginx:latest

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the SSL certificate and key
COPY cert/certificate.pem /etc/nginx/ssl/certificate.pem
COPY cert/private.key /etc/nginx/ssl/private.key

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]