library(tidyverse)
library(lubridate)

data <- read.csv("Traffic_Crashes_Resulting_in_Injury_20241109.csv")


data_filtered <- data %>% select(tb_latitude, tb_longitude, collision_severity, type_of_collision, mviw, ped_action)

write.csv(data_filtered, 'Filtered_Traffic_Crashes_San_Fransico.csv')

data <- read.csv("Motor_Vehicle_Collisions_-_Crashes_20241109.csv")
data$CRASH.DATE <- as.Date(data$CRASH.DATE, "%m/%d/%Y")

data_date_filtered <- data %>% filter(CRASH.DATE > '2019-01-01')
data_filtered <- data_date_filtered %>% select(LATITUDE, LONGITUDE, NUMBER.OF.PERSONS.INJURED, NUMBER.OF.PERSONS.KILLED, NUMBER.OF.PEDESTRIANS.INJURED, NUMBER.OF.PEDESTRIANS.KILLED)
data_filtered <- na.omit(data_filtered)

write.csv(data_filtered, "Filtered_Traffic_Crashes_New_York.csv")
