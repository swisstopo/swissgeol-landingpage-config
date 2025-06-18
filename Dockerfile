# === Build stage ===
FROM node:22.5.1-slim AS build

RUN apt-get update && apt-get install -y \
  git python3 make g++ libvips-dev \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .

RUN npm ci --omit=dev \
  && npm run build

# === Production stage ===
FROM node:22.5.1-slim

WORKDIR /app

COPY --from=build /app /app

EXPOSE 3000
CMD ["npm", "start"]
