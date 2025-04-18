# Word Count Badge

This project provides a way to display the word count of Markdown files in your repository using a dynamic badge from shields.io. The badge updates automatically through a GitHub Actions workflow that runs a script to calculate the word count.

## Features

- Automatically calculates the total word count from all Markdown files in a specified directory.
- Generates a dynamic badge that displays the current word count.
- Integrates with GitHub Actions for automatic updates.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/word-count-badge.git
   cd word-count-badge
   ```

2. **Configure the script:**
   - Modify the `scripts/count-words.sh` file to specify the directory containing your Markdown files.

3. **Set up GitHub Actions:**
   - The workflow is defined in `.github/workflows/update-word-count.yml`. Ensure that it is correctly configured to run the word count script on a schedule or on push events.

4. **Add the badge to your README:**
   - Use the following Markdown snippet to include the badge in your README:
     ```markdown
     ![Word Count](https://img.shields.io/badge/Word%20Count-<count>-blue)
     ```
   - Replace `<count>` with the dynamic value generated by the script.

## Usage

- The word count badge will automatically update based on the configuration in the GitHub Actions workflow. You can manually trigger the workflow or wait for it to run on the defined schedule.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.