---
title: "Big Data Analytics"
summary: "Data analysis on large data set"
date: "June 11 2019"
draft: false
tags:
- Pig
- Hive
- Hadoop
---

- Employed the MapReduce framework to conduct extensive data analysis on geographical datasets, prioritizing efficient retrieval and processing. Leveraged Hadoop's distributed file system and parallel processing capabilities to manage and process vast amounts of data across multiple nodes. 
- Utilized Pig for its high-level data flow scripting language, facilitating seamless data processing and transformation tasks. 
- Additionally, integrated Hive for SQL-based querying and data summarization, enabling quick and flexible data analysis. This comprehensive approach with Hadoop, Pig, and Hive ensured optimized data analysis, empowering informed decision-making and insights generation. 
- Technologies used: Hadoop, Pig, Hive.

### Hadoop MapReduce Example:

Let's say we want to count the number of occurrences of each word in a large text file.

```java
// Mapper class
public class WordCountMapper extends Mapper<LongWritable, Text, Text, IntWritable> {
    private final static IntWritable one = new IntWritable(1);
    private Text word = new Text();

    public void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
        String[] words = value.toString().split("\\s+");
        for (String w : words) {
            word.set(w);
            context.write(word, one);
        }
    }
}

// Reducer class
public class WordCountReducer extends Reducer<Text, IntWritable, Text, IntWritable> {
    private IntWritable result = new IntWritable();

    public void reduce(Text key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {
        int sum = 0;
        for (IntWritable val : values) {
            sum += val.get();
        }
        result.set(sum);
        context.write(key, result);
    }
}
```

### Pig Example:

Using Pig Latin to process and analyze the population data:

```pig
population_data = LOAD 'input_population_data.csv' USING PigStorage(',') AS (region:chararray, population:int);
region_population = GROUP population_data BY region;
population_totals = FOREACH region_population GENERATE group AS region, SUM(population_data.population) AS total_population;
```

### Hive Example:

Creating and querying a Hive table to analyze population data:

```hive
CREATE TABLE population_data (region STRING, population INT);
LOAD DATA INPATH '/path/to/input_population_data.csv' INTO TABLE population_data;
SELECT region, SUM(population) AS total_population FROM population_data GROUP BY region;
```
*These examples illustrate how you can use Hadoop MapReduce, Pig, and Hive to perform large-scale data analysis on geographical datasets efficiently. The MapReduce framework handles the distributed processing of data, Pig simplifies data processing tasks, and Hive provides a SQL-like interface for querying and analyzing data stored in Hadoop.*
