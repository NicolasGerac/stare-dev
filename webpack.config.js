const path = require("path");

module.exports = {
    entry: "./assets/application.js", // Chemin vers ton fichier JS d'entrée
    output: {
        filename: "bundle.js", // Nom du fichier de sortie
        path: path.resolve(__dirname, "assets"), // Répertoire de sortie
    },
    mode: "development", // Mode développement
    watch: true, // Activer le mode de surveillance pour les changements
};
