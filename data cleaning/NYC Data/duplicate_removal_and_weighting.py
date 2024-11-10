import pandas as pd
import numpy as np
from pprint import pprint

pre_duplicates = {115: [115, 234, 356],
                  117: [117, 235],
                  118: [118, 236],
                  119: [119, 347],
                  121: [121, 351],
                  122: [122, 350, 571],
                  126: [126, 678],
                  111: [111, 232],
                  116: [116, 233]}

duplicates = {float(subE): e for e, l in pre_duplicates.items() for subE in l}


if __name__ == "__main__":
    cleaned_crimes = pd.read_pickle("cleaned_crimes.pkl")
    for num in cleaned_crimes.KY_CD.unique():
        if num not in duplicates.keys():
            duplicates[num] = num

    scores = pd.read_pickle("crimes_scores.pkl")

    crime_key_to_crime = dict(zip(cleaned_crimes.KY_CD, cleaned_crimes.OFNS_DESC))

    cleaned_crimes.KY_CD = cleaned_crimes.KY_CD.map(duplicates)

    cleaned_crimes.OFNS_DESC = cleaned_crimes.KY_CD.map(crime_key_to_crime)

    cleaned_crimes = cleaned_crimes.merge(scores[["CODE", "DRIVE_DANGER_SCORE", "WALK_DANGER_SCORE"]], left_on="KY_CD", right_on="CODE")

    cleaned_crimes.drop("KY_CD", axis=1, inplace=True)

    cleaned_crimes = cleaned_crimes[(cleaned_crimes.DRIVE_DANGER_SCORE > 0) | (cleaned_crimes.WALK_DANGER_SCORE > 0)]

    cleaned_crimes["AVERAGE_DANGER_SCORE"] = cleaned_crimes[['DRIVE_DANGER_SCORE', 'WALK_DANGER_SCORE']].mean(axis=1)

    cleaned_crimes.to_csv("NYC_crimes_cleaned.csv")
