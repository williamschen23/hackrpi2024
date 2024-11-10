import pandas as pd

df = pd.read_csv('Police_Department_Incident_Reports__2018_to_Present_20241109.csv')

df = df[df["Report Type Description"].str.contains("Initial")]

# Initial; Initial Supplement; Vehicle Initial; Vehicle Supplement; Coplogic Initial; Coplogic Supplement

df = df[["Incident Date", "Incident Category", "Latitude", "Longitude"]]

df.dropna(axis=0, how='any', inplace=True)

for e in df.keys():
    df = df.rename(columns={e: e.lower().replace(' ', '_')})

# print(len(df.incident_category.unique()))
# print(df.incident_category.unique())

df.to_pickle("unweighted_crimes.pkl")
