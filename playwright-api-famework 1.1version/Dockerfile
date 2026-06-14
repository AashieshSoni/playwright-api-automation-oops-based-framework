FROM mcr.microsoft.com/playwright:v1.55.0-noble
WORKDIR /app
COPY . .
RUN npm install
CMD ["npx","playwright","test"]