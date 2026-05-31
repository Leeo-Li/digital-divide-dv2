# Who Is Left Behind in Australia's Digital Life?

This project is my FIT2179 Data Visualisation 2 submission. It explores digital inclusion and digital inequality in Australia using the Australian Digital Inclusion Index 2024.

The visualisation focuses on one main question:

**Who is most at risk of being left behind in Australia's digital life?**

## Project Overview

Australia has become increasingly digital, but access to digital life is not equal for everyone. This visualisation tells a data-driven story about how digital inclusion differs across states, regions, age groups, income levels, education levels and disadvantaged communities.

The intended audience is the average Australian reader. The goal is to make the digital divide easier to understand through clear visual comparisons, maps, annotations and concise explanatory text.

## Data Sources

This project uses publicly available real-world data from:

1. **Australian Digital Inclusion Index 2024**
   Used for national scores, dimension scores, state and territory scores, demographic groups, income groups, education groups and social disadvantage groups.

2. **Australian Bureau of Statistics ASGS State/Territory Boundary Data**
   Used to create the geographic map of Australian states and territories.

## Visualisations

The webpage includes 12 Vega-Lite visualisations:

1. Digital inclusion dimension comparison
2. Dimension profile chart
3. National trend line chart
4. State and territory choropleth map
5. State and territory ranking chart
6. Metro vs regional dumbbell chart
7. Age group comparison chart
8. Income affordability lollipop chart
9. Education digital ability dot plot
10. Demographic gap small multiples
11. Social disadvantage grouped dot plot
12. At-risk group bubble matrix

These visualisations are arranged as a single scrolling story. The page combines maps, charts, text and annotations to guide the reader through the main findings.

## Design Rationale

The project uses a storytelling structure rather than an expert dashboard. Each section answers a smaller question and leads the reader toward the final conclusion about which groups are most at risk.

Different visual idioms were chosen for different analytical tasks:

* A choropleth map is used to show geographic variation between states and territories.
* Ranking charts are used to compare ordered values clearly.
* Dumbbell and lollipop charts are used to highlight gaps between groups.
* Dot plots and small multiples are used to compare demographic differences without overusing bar charts.
* A bubble matrix is used to summarise different types of risk across vulnerable groups.

## Tools Used

* HTML
* CSS
* JavaScript
* Vega-Lite
* GitHub Pages

## References

Thomas, J., McCosker, A., Parkinson, S., Hegarty, K., Featherstone, D., Kennedy, J., Ormond-Parker, L., Morrison, K., Rea, H. and Ganley, L., 2025. Measuring Australia’s Digital Divide: 2025 Australian Digital Inclusion Index. Melbourne: ARC Centre of Excellence for Automated Decision-Making and Society, RMIT University, Swinburne University of Technology, and Telstra. DOI: 10.60836/mtsq-at22. Data exported from the ADII interactive data dashboards.Available at: https://dashboard.digitalinclusionindex.org.au/Total.aspx [Accessed 31 May 2026].

Australian Bureau of Statistics, 2021. *Australian Statistical Geography Standard (ASGS) Edition 3: Digital Boundary Files*. Available at: https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs-edition-3/jul2021-jun2026/access-and-downloads/digital-boundary-files [Accessed 31 May 2026].

## AI Acknowledgement

Generative AI was used to assist with wording, debugging and visualisation refinement. Final design decisions, data selection, data interpretation and implementation were reviewed and completed by the author.

## Author

Zhichun Li
Monash University
May 2026
