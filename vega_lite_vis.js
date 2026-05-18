const embedOptions = { actions: false };

const charts = [
  ['#dimension_bar', 'vis/01_dimension_bar.vg.json'],
  ['#trend_line', 'vis/02_access_digital_ability_trend_line.vg.json'],
  ['#state_map', 'vis/03_state_choropleth_map.vg.json'],
  ['#state_ranking', 'vis/04_state_territory_ranking_bar.vg.json'],
  ['#metro_regional_dumbbell', 'vis/05_metro_regional_dumbbell.vg.json'],
  ['#age_bar', 'vis/06_age_group_ordered_bar.vg.json'],
  ['#income_lollipop', 'vis/07_income_affordability_lollipop.vg.json'],
  ['#education_bar', 'vis/08_education_ordered_bar.vg.json'],
  ['#social_groups_dotplot', 'vis/09_social_disadvantage_grouped_dot_plot.vg.json'],
  ['#at_risk_ranking', 'vis/10_most_at_risk_highlighted_ranking.vg.json']
];

charts.forEach(([selector, spec]) => {
  vegaEmbed(selector, spec, embedOptions).catch(console.error);
});
