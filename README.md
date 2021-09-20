# County Data Processing

**Description**: This project processes U.S. Census county data into a state-county map. CSV files for processing can be found under `/counties/totals` for each year range at [https://www2.census.gov/programs-surveys/popest/datasets/](https://www2.census.gov/programs-surveys/popest/datasets/).	

## Dependencies

This script uses node (v14).

## Installation

Clone this repo to run it locally.

## Usage

`node process-county-data.js <filename>`

The script requires a CSV file with a header row and `STNAME` and `CTYNAME` columns. It outputs a JSON file containing the state/county map to `./output/county-map.json`.

To run the script with a sample file found in `./sample_files/`:

`node process-county-data.js sample_files/co-est2020.csv`

----

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)

