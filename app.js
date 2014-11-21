with(new JavaImporter(
  java.lang,
  Packages.spark
)) {

  SparkBase.staticFileLocation("public");

  Spark.head('/', function(request, response) {
  });

  Thread.currentThread().join();
}

// vim:et:ff=unix:sw=2:ts=2:
