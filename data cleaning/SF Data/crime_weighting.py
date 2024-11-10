import pandas as pd

crimes_and_scores = pd.read_csv("crime_list.csv").drop("index", axis=1)

crimes_and_scores["AVERAGE_DANGER_SCORE"] = crimes_and_scores[['DRIVE_DANGER_SCORE', 'WALK_DANGER_SCORE']].mean(axis=1)

weighted_crimes = pd.read_pickle("unweighted_crimes.pkl")

weighted_crimes = weighted_crimes.merge(crimes_and_scores[["crime_desc",
                                                           "DRIVE_DANGER_SCORE",
                                                           "WALK_DANGER_SCORE",
                                                           "AVERAGE_DANGER_SCORE"]],
                                        left_on="incident_category", right_on="crime_desc")

pd.set_option('display.max_columns', 7)

print(weighted_crimes)

weighted_crimes.to_csv("SF_weighted_crimes.csv")
