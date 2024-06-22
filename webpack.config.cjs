const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.ts', // Arquivo de entrada do seu aplicativo
  output: {
    path: path.resolve(__dirname, 'dist'), // Pasta de saída
    filename: 'bundle.js', // Nome do arquivo de saída
    libraryTarget: 'umd', // Define o formato de biblioteca para suportar diferentes ambientes (Node.js, navegador, etc.)
    globalObject: 'this', // Ajusta o objeto global usado para definir a biblioteca
    umdNamedDefine: true, // Usa a definição nomeada UMD
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Extensões de arquivo que o Webpack deve resolver
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./src/app/globals.css",
    }),
  ],
};
