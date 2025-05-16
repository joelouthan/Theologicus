# HTML to Markdown Converter

This project provides a simple utility to convert HTML files into Markdown format. The main functionality is encapsulated in the `src/convert.js` script, which performs the following operations:

1. Renames the file `20. Proverbs.html` to `biblio-cmt-proverbs.md`, overriding any existing file with the same name.
2. Removes the top 7 lines from the HTML file to clean up unnecessary metadata or headers.
3. Strips the closing tags `</body>` and `</html>` from the bottom of the file, ensuring that `</div>` remains as the last line for proper Markdown formatting.

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Usage

To execute the conversion, run the following command:

```
node src/convert.js
```

Make sure to have Node.js installed on your machine.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.