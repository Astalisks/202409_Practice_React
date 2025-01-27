# frontend/Dockerfile
FROM node:18-alpine

WORKDIR /app

# package.json と yarn.lock をコピーし、依存インストール
COPY package.json yarn.lock ./
RUN yarn install

# 残りのソースコードをコピー
COPY . .

EXPOSE 3000

# コンテナ起動時に yarn start (React の開発サーバ)
CMD ["yarn", "start"]
