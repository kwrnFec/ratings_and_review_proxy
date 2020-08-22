const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 4000;

app.use(express.static('public'));

app.use('/rrmodule', createProxyMiddleware({ target: 'http://ec2-54-172-55-163.compute-1.amazonaws.com', changeOrigin: true }));
app.use('/qa', createProxyMiddleware({ target: 'http://ec2-18-224-182-50.us-east-2.compute.amazonaws.com', changeOrigin: true }));
// app.use('/rrmodule', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));

app.listen(port, () => {
  console.log(`Server is listening on port  ${port}`);
});