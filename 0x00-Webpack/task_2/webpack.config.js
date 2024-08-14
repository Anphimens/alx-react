const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "/js/dashboard_main.js"),
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              disable: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
};
