const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    globalObject: "this",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], 
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
      ],
      },
    ],
  },
  externals: {
    react: "commonjs react",
  },
  target: "node",
  plugins: [
    new CopyWebpackPlugin({
        patterns: [
            { from: 'src/app/globals.css', to: 'app/' },
        ],
    }),
],
};
