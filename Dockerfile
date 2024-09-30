FROM mcr.microsoft.com/playwright:v1.38.0-focal
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

RUN mkdir -p test-results

RUN npx playwright install --with-deps
RUN npm run build || echo "No build script found, skipping build step"
CMD ["npx", "playwright", "test"]