import pandas as pd

crime_keys = """101
102
103
104
105
106
107
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
230
231
232
233
234
235
236
237
238
250
340
341
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
359
360
361
362
363
364
365
455
571
572
575
577
578
672
675
676
677
678
685
880
881
882
995""".split()

df = pd.read_csv("NYPD_Arrests.csv")

df = df[df.ARREST_DATE.notnull()]
df = df[df.KY_CD.notnull()]
df = df[df.ARREST_DATE.notnull()]
df = df[df.Latitude.notnull()]
df = df[df.Longitude.notnull()]
df = df[df.OFNS_DESC.notnull()]
df = df[df.PD_DESC.notnull()]

df.ARREST_DATE = pd.to_datetime(df.ARREST_DATE)
df = df[df.ARREST_DATE > pd.to_datetime("01/01/2019")]


# print(df.head())

temp = df[["ARREST_DATE", "OFNS_DESC", "KY_CD", "Latitude", "Longitude"]]

temp.to_pickle("cleaned_crimes.pkl")

crimes_scores = pd.read_csv("crime_scores.csv")

crimes_scores.to_pickle("crimes_scores.pkl")
