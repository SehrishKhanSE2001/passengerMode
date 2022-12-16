FROM node:current-alpine    
WORKDIR /index

COPY package*.json ./
RUN npm install

EXPOSE 3001
COPY . .
CMD ["node", "index.js"]