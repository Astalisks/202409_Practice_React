# frontend/Dockerfile
FROM node:18-alpine

# コンテナ内の作業ディレクトリ
WORKDIR /app

# package.json と package-lock.json をコピーして依存をインストール
COPY package*.json ./
RUN npm install

# その後、残りのソースコードをコピー
COPY . .

# React の開発ポート
EXPOSE 3000

# コンテナ起動時に npm start
CMD ["npm", "start"]
