# ./backend/Dockerfile
FROM node:14

# アプリケーションディレクトリを作成する
WORKDIR /app

# アプリケーションの依存関係をインストールする
COPY package*.json ./
RUN npm install

# アプリケーションのソースをバンドルする
COPY . .

# アプリケーションを実行する
CMD [ "node", "server.js" ]
