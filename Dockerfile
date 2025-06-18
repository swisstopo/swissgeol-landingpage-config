FROM node:22.5.1-alpine

ARG APP_VERSION
ENV APP_VERSION=${APP_VERSION}

RUN apk add --no-cache git

WORKDIR /app
COPY . .

# GitHub Secret für private Pakete
RUN --mount=type=secret,id=github_token \
    GITHUB_TOKEN=$(cat /run/secrets/github_token) \
    npm install --ignore-scripts

# Production optimierung (wenn nötig)
RUN npm run build --omit=dev

EXPOSE 3000

CMD ["npm", "start"]
