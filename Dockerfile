# Build Stage
FROM node:alpine as builder
WORKDIR /
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# Production Stage
FROM nginx:alpine
COPY --from=builder /build /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf


CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'