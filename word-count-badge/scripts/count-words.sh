#!/bin/bash

# Directory containing the markdown files
THEOLOGICUS_DIR="/Users/jlouthan/Projects/Books/theologicus"
SRC_DIR="$THEOLOGICUS_DIR/src"

# Path to the README file
README_PATH="$THEOLOGICUS_DIR/README.md"

# Calculate total word count excluding blockquotes
TOTAL_WORD_COUNT=$(find "$SRC_DIR" -name "*.md" -exec sh -c 'grep -v "^[[:space:]]*>" "$1" | wc -w' sh {} \; | awk '{total += $1} END {print total}')

# Generate the shields.io badge URL
BADGE_URL="https://img.shields.io/badge/Word%20Count-$TOTAL_WORD_COUNT-brightgreen"

echo "Word count: $TOTAL_WORD_COUNT"
echo "Badge URL: $BADGE_URL"

# Update the README with the new badge
# This uses sed to replace the existing badge line or add it if not present
if grep -q "!\[Word Count\]" $README_PATH; then
  # Replace existing badge
  sed -i '' "s|!\[Word Count\](https://img.shields.io/badge/Word%20Count-[0-9]*-brightgreen)|![Word Count]($BADGE_URL)|g" $README_PATH
else
  # Add badge to the beginning of the file (after the title)
  sed -i '' "1s/^/# Word Count Badge\\n\\n![Word Count]($BADGE_URL)\\n\\n/" $README_PATH
fi

echo "README updated with new word count badge"