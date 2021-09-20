# County Data Processing

**Description**: This project processes U.S. Census county data into a state-county map. CSV files for processing can be found under `/counties/totals` for each year range at [https://www2.census.gov/programs-surveys/popest/datasets/](https://www2.census.gov/programs-surveys/popest/datasets/).	

## Dependencies

- node (v14).

## Installation

Clone the repo to run it locally.

## Usage

The script requires a CSV file with a header row and `STNAME` and `CTYNAME` columns. It outputs a JSON file containing the state/county map to `./output/county-map.json`.

To run:

`node process-county-data.js <filename>`


A sample Census csv containing county data from 2020 can be found in `./sample_files/`. To run with sample file:

`node process-county-data.js sample_files/co-est2020.csv`

----

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)

