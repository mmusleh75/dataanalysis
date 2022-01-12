import pandas as pd

from pyspark import SparkContext, SparkConf
from pyspark.sql import SparkSession, SQLContext
from pyspark.sql import types as sparktypes

context = SparkContext()
spark = SparkSession.builder.appName('abc').getOrCreate()
#spark = SparkSession(context)
#spark.conf.set("spark.sql.shuffle.partitions", "5")

pdf = pd.read_csv('insurance.csv')

sqlcontext = SQLContext(context)

insurance_df = sqlcontext.createDataFrame(pdf)


print(insurance_df.rdd.getNumPartitions())

print("done")
