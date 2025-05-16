const fs = require('fs');
const path = require('path');

// Define the source directory (parent directory where the HTML files are)
const sourceDir = path.join(__dirname, '..', '..');

// Process a single file
function processFile(filename) {
    const oldFilePath = path.join(sourceDir, filename);
    
    // Extract the book name (remove number prefix and extension)
    const bookName = filename.replace(/^\d+\.\s+/, '').replace('.html', '').toLowerCase();
    const newFilename = `biblio-cmt-${bookName}.md`;
    const newFilePath = path.join(sourceDir, newFilename);
    
    console.log(`Processing: ${filename} -> ${newFilename}`);
    
    // Read the old file
    fs.readFile(oldFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${filename}:`, err);
            return;
        }

        // Split the content into lines
        const lines = data.split('\n');

        // Remove the top 7 lines
        let contentLines = lines.slice(7);
        
        // Find the last </div> line
        let divIndex = -1;
        for (let i = contentLines.length - 1; i >= 0; i--) {
            if (contentLines[i].includes('</div>')) {
                divIndex = i;
                break;
            }
        }
        
        // Keep everything up to and including the </div> line
        if (divIndex !== -1) {
            contentLines = contentLines.slice(0, divIndex + 1);
        }
        
        const newContent = contentLines.join('\n');

        // Write the new content to the new file, overriding if it exists
        fs.writeFile(newFilePath, newContent, { flag: 'w' }, (err) => {
            if (err) {
                console.error(`Error writing ${newFilename}:`, err);
                return;
            }
            console.log(`✅ Successfully converted: ${filename} -> ${newFilename}`);
        });
    });
}

// Process all HTML files or a specific file if provided as argument
function processFiles() {
    // If a specific file is provided as command-line argument
    if (process.argv.length > 2) {
        const filename = process.argv[2];
        if (filename.endsWith('.html')) {
            processFile(filename);
        } else {
            console.error('Error: File must have .html extension');
        }
        return;
    }

    // Process all HTML files in the directory
    fs.readdir(sourceDir, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        const htmlFiles = files.filter(file => file.endsWith('.html'));
        
        if (htmlFiles.length === 0) {
            console.log('No HTML files found in directory');
            return;
        }
        
        console.log(`Found ${htmlFiles.length} HTML files to process`);
        htmlFiles.forEach(processFile);
    });
}

// Start processing
processFiles();