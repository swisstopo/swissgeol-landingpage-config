# === Build stage ===
FROM node:22.5.1-slim AS build

ARG APP_VERSION

ENV NODE_ENV=production
ENV APOS_RELEASE_ID=${APP_VERSION}

RUN apt-get update && apt-get install -y \
  git python3 make g++ libvips-dev \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .

RUN npm version ${APP_VERSION} --no-commit-hooks --no-git-tag-version \
 && npm install \
 && npm run build --omit=dev

# === Production stage ===
FROM node:22.5.1-slim

ARG APP_VERSION

ENV NODE_ENV=production
ENV APOS_RELEASE_ID=${APP_VERSION}

WORKDIR /app


COPY --from=build /app /app

EXPOSE 3000
CMD ["npm", "start"]
