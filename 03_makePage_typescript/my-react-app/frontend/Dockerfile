# ベースイメージを指定
FROM node:18

# 作業ディレクトリを作成
WORKDIR /app

# 必要なファイルをコンテナにコピー
COPY package.json yarn.lock ./

# 依存関係をインストール
RUN yarn install

RUN yarn list --pattern "react"            | tee /app/react-list.log && \
    yarn list --pattern "typescript"       | tee -a /app/react-list.log && \
    yarn list --pattern "@types/react"     | tee -a /app/react-list.log && \
    yarn list --pattern "@types/react-dom" | tee -a /app/react-list.log && \
    yarn add --exact react-scripts@latest

# ソースコードをコピー
COPY . .

# コンテナ内でサーバーを起動
CMD ["yarn", "start"]
