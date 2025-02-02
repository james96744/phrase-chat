name: phrase-chat
region: us-east-1
yamlVersion: 2
backend:
  path: ./server  # Replace with your actual backend directory if different
  language:
    name: js
  functions:
    - name: phrase-chat-function  # Replace with your actual function name
      path: ./src  # Replace with the directory containing your function code
      handler: handlerFunction  # Replace with your actual function handler
      entry: index.js  # Replace with your actual entry point
frontend:
  path: ./client  # Replace with your actual frontend directory
  publish: ./dist  # The directory to publish (after building your frontend)
  scripts:
    deploy: npm install
    build: npm run build