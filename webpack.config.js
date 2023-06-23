const path = require("path"); // Importa o path do node e armazena na constante.

module.exports = {
  entry: "./src/scripts/script.js", // Arquivo de entrada.
  // Arquivo de saida.
  output: {
    path: path.resolve(__dirname, "./src/scripts"), // Caminho absoluto do arquivo de saida.
    filename: "main.js", // Nome do arquivo de saida.
  },

  // Configuração do babel.
  module: {
    // Regras.
    rules: [
      {
        test: /\.js$/, // Aplica a regra somente aos arquivos que tenham a extensão js.
        exclude: /node_modules/, // Exclui a pasta node_modules.
        use: {
          loader: "babel-loader", // Usa o babel-loader.
          // Opções do babel.
          options: {
            presets: ["@babel/preset-env"], // Presets do babel.
            plugins: ["@babel/plugin-transform-runtime"], // Plugins do babel.
          },
        },
      },
    ],
  },
};