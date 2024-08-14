const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "./js/dashboard_main.js"), // Corrected entry path
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
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              disable: false, // Enable image optimization
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
          {
            loader: "file-loader", // This ensures images are bundled properly
            options: {
              name: "[path][name].[ext]",
              outputPath: "images",
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
