---
title: Analyzing databases with the CodeQL CLI
shortTitle: Analyzing databases
intro: 'You can run queries against a {% data variables.product.prodname_codeql %} database extracted from a codebase.'
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
---

{% data reusables.codeql-cli.codeql-site-migration-note %}

## About analyzing databases with the {% data variables.product.prodname_codeql_cli %}

To analyze a codebase, you run queries against a CodeQL
database extracted from the code.

{% data variables.product.prodname_codeql %} analyses produce [interpreted results](https://codeql.github.com/docs/codeql-overview/about-codeql/#interpret-query-results) that can be displayed as alerts or paths in source code.
For information about writing queries to run with `database analyze`, see “[Using custom queries with the {% data variables.product.prodname_codeql_cli %}](/code-security/code-scanning/using-the-codeql-cli/using-custom-queries-with-the-codeql-cli).”

{% note %}

**Other query-running commands**

Queries run with `database analyze` have strict [metadata requirements](/code-security/code-scanning/using-custom-queries-with-the-codeql-cli/#including-query-metadata). You can also execute queries using the following
plumbing-level subcommands:

* [`database run-queries`](https://codeql.github.com/docs/codeql-cli/manual/database-run-queries/), which
    outputs non-interpreted results in an intermediate binary format called [BQRS](https://codeql.github.com/docs/codeql-overview/codeql-glossary/#bqrs-file)

* [`query run`](https://codeql.github.com/docs/codeql-cli/manual/query-run/), which will output BQRS files, or print
    results tables directly to the command line. Viewing results directly in
    the command line may be useful for iterative query development using the CLI.

Queries run with these commands don't have the same metadata requirements.
However, to save human-readable data you have to process each BQRS results
file using the [`bqrs decode`](https://codeql.github.com/docs/codeql-cli/manual/bqrs-decode/) plumbing
subcommand. Therefore, for most use cases it's easiest to use `database
analyze` to directly generate interpreted results.

{% endnote %}

Before starting an analysis you must:

* [Set up the {% data variables.product.prodname_codeql_cli %}](/code-security/code-scanning/using-the-codeql-cli//getting-started-with-the-codeql-cli) to run commands locally.
* [Create a {% data variables.product.prodname_codeql %} database](/code-security/code-scanning/using-the-codeql-cli/creating-codeql-databases) for the source code you want to analyze.

The simplest way to run `codeql database analyze` is using {% data variables.product.prodname_codeql %} packs. You can also
run the command using queries from a local checkout of the {% data variables.product.prodname_codeql %} repository,
which you may want to do if you want to customize the {% data variables.product.prodname_codeql %} core queries.

## Running `codeql database analyze`

When you run `database analyze`, it:

1. Optionally downloads any referenced {% data variables.product.prodname_codeql %} packages that are not available locally.
2. Executes one or more query files, by running them over a {% data variables.product.prodname_codeql %} database.
3. Interprets the results, based on certain query metadata, so that alerts can be
displayed in the correct location in the source code.
4. Reports the results of any diagnostic and summary queries to standard output.

You can analyze a database by running the following command:

```
codeql database analyze <database> --format=<format> --output=<output> <query-specifiers>...
```

You must specify:


* `<database>`: the path to the {% data variables.product.prodname_codeql %} database you want to analyze.
* `--format`: the format of the results file generated during analysis. A
number of different formats are supported, including CSV, [SARIF](https://codeql.github.com/docs/codeql-overview/codeql-glossary/#sarif-file), and graph formats. For more information about CSV and SARIF,
see [Results](#results). To find out which other results formats are
supported, see the [database analyze reference](https://codeql.github.com/docs/codeql-cli/manual/database-analyze/).
* `--output`: the output path of the results file generated during analysis.

You can also specify:

* `<query-specifiers>...`: a space-separated list of queries to run over your database. This
is a list of arguments, where each argument can be:
  * a path to a query file
  * a path to a directory containing query files
  * a path to a query suite file
  * the name of a {% data variables.product.prodname_codeql %} query pack 
       * with an optional version range
        * with an optional path to a query, directory, or query suite inside the pack

  If omitted, the default query suite for the language of the analyzed database will be used. For the complete syntax of query specifiers, see “Specifying which queries to run in a {% data variables.product.prodname_codeql %} pack”.

* `--sarif-category`: an identifying category for the results. Used when
you want to upload more than one set of results for a commit.
For example, when you use  `github upload-results` to send results for more than one
language to the {% data variables.product.prodname_dotcom %} code scanning API. For more information about this use case, see [Configuring {% data variables.product.prodname_codeql_cli %} in your CI system](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system).

* `--sarif-add-query-help`: (supported in version 2.7.1 onwards) adds any custom query help written
in markdown to SARIF files (v2.1.0 or later) generated by the analysis. Query help stored in `.qhelp` files must be
converted to `.md` before running the analysis. For further information,
see “Including query help for custom {% data variables.product.prodname_codeql %} queries in SARIF files.”

* `--download`: a boolean flag that will allow the CLI to download  any referenced {% data variables.product.prodname_codeql %} packages that are not available locally.
If this flag is missing and a referenced {% data variables.product.prodname_codeql %} package is not available locally, the command will fail.

{% note %}

**Upgrading databases**

For databases that were created by {% data variables.product.prodname_codeql_cli %} v2.3.3 or earlier, you will need to explicitly upgrade the database before you can run an analysis with a newer
version of the {% data variables.product.prodname_codeql_cli %}. If this step is necessary, then you will see a message telling you
that your database needs to be upgraded when you run `database analyze`.

For databases that were created by {% data variables.product.prodname_codeql_cli %} v2.3.4 or later, the CLI will implicitly run any
required upgrades. Explicitly running the upgrade command is not necessary.

{% endnote %}

For full details of all the options you can use when analyzing databases, see
the [database analyze reference documentation](https://codeql.github.com/docs/codeql-cli/manual/database-analyze/).

## Specifying which queries to run in a {% data variables.product.prodname_codeql %} pack

Query specifiers are used by `codeql database analyze` and other commands that operate on a set of queries.
The complete form of a query specifier is `scope/name@range:path`, where:


* `scope/name` is the qualified name of a {% data variables.product.prodname_codeql %} pack.


* `range` is a [semver range](https://docs.npmjs.com/cli/v6/using-npm/semver#ranges).


* `path` is a file system path to a single query, a directory containing queries, or a query suite file.

When you specify a `scope/name`, the `range` and `path` are
optional. If you omit a `range` then the latest version of the
specified pack is used. If you omit a `path` then the default query suite
of the specified pack is used.

The `path` can be one of: a `.ql` query file, a directory
containing one or more queries, or a `.qls` query suite file. If
you omit a pack name, then you must provide a `path`,
which will be interpreted relative to the working directory
of the current process. Glob patterns are not supported.

If you specify both a `scope/name` and `path`, then the `path` cannot
be absolute. It is considered relative to the root of the {% data variables.product.prodname_codeql %}
pack.

### Example query specifiers


* `codeql/python-queries` - All the queries in the default query suite of the latest version of the `codeql/python-queries` pack.

* `codeql/python-queries@1.2.3` - All the queries in the default query suite of version `1.2.3` of the `codeql/python-queries` pack.

* `codeql/python-queries@~1.2.3` - All the queries in the default query suite of the latest version of the `codeql/python-queries` pack that is >= `1.2.3` and < `1.3.0`.

* `codeql/python-queries:Functions` - All queries in the `Functions` directory in the latest version of the `codeql/python-queries` pack.

* `codeql/python-queries@1.2.3:Functions` - All queries in the `Functions` directory in version 1.2.3 of the `codeql/python-queries` pack.

* `codeql/python-queries@1.2.3:codeql-suites/python-code-scanning.qls` - All queries in the `codeql-suites/python-code-scanning.qls` directory in version 1.2.3 of the `codeql/python-queries` pack.

* `suites/my-suite.qls` - All queries in the `suites/my-suite.qls` file relative to the current working directory.

{% note %}

**Tip**

The default query suite of the standard {% data variables.product.prodname_codeql %} query packs are `codeql-suites/<lang>-code-scanning.qls`. Several other useful query suites can also be found in the `codeql-suites` directory of each pack. For example, the `codeql/cpp-queries` pack contains the following query suites:

* `cpp-code-scanning.qls` - Standard Code Scanning queries for C++. The default query suite for this pack.

* `cpp-security-extended.qls` - Queries from the default  `cpp-code-scanning.qls` suite for C++, plus lower severity and precision queries.

* `cpp-security-and-quality.qls` - Queries from `cpp-security-extended.qls`, plus maintainability and reliability queries.

You can see the sources for these query suites in the [{% data variables.product.prodname_codeql %} repository](https://github.com/github/codeql/tree/main/cpp/ql/src/codeql-suites). Query suites for other languages are similar.

{% endnote %}

## Examples of running database analyses

The following examples show how to run `database analyze` using {% data variables.product.prodname_codeql %} packs, and how to use a local checkout of the {% data variables.product.prodname_codeql %} repository. These examples assume your {% data variables.product.prodname_codeql %} databases have been created in a directory that is a sibling of your local copies of the {% data variables.product.prodname_codeql %} repository.

{% ifversion codeql-packs %}
### Running a {% data variables.product.prodname_codeql %} query pack

{% note %}

**Note**

The {% data variables.product.prodname_codeql %} package management functionality, including {% data variables.product.prodname_codeql %} packs, is currently available as a beta release and is subject to change. During the beta release, {% data variables.product.prodname_codeql %} packs are available only using {% data variables.product.prodname_registry %} - the {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registry %}. To use this beta functionality, install the latest version of the {% data variables.product.prodname_codeql_cli %} bundle from: https://github.com/github/codeql-action/releases.

{% endnote %}

To run an existing {% data variables.product.prodname_codeql %} query pack from the {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registry %}, you can specify one or more
pack names:

```
codeql database analyze <database> microsoft/coding-standards@1.0.0 github/security-queries --format=sarifv2.1.0 --output=query-results.sarif --download
```

This command runs the default query suite of two {% data variables.product.prodname_codeql %} query packs: `microsoft/coding-standards` version 1.0.0 and the latest version of `github/security-queries` on the specified database. For further information about default suites, see “[Publishing and using {% data variables.product.prodname_codeql %} packs](/code-security/code-scanning/using-the-codeql-cli/creating-codeql-databases/publishing-and-using-codeql-packs/#publishing-and-using-codeql-packs)”.

The `--download` flag is optional. Using it will ensure the query pack is downloaded if it isn’t yet available locally.
{% endif %}

### Running a single query

To run a single query over a {% data variables.product.prodname_codeql %} database for a JavaScript codebase,
you could use the following command from the directory containing your database:

```
codeql database analyze --download <javascript-database> codeql/javascript-queries:Declarations/UnusedVariable.ql --format=csv --output=js-analysis/js-results.csv
```

This command runs a simple query that finds potential bugs related to unused
variables, imports, functions, or classes—it is one of the JavaScript
queries included in the {% data variables.product.prodname_codeql %} repository. You could run more than one query by
specifying a space-separated list of similar paths.

The analysis generates a CSV file (`js-results.csv`) in a new directory (`js-analysis`).

Alternatively, if you have the {% data variables.product.prodname_codeql %} repository checked out, you can execute the same queries by specifying the path to the query directly:

```
codeql database analyze <javascript-database> ../ql/javascript/ql/src/Declarations/UnusedVariable.ql --format=csv --output=js-analysis/js-results.csv
```

You can also run your own custom queries with the `database analyze` command.
For more information about preparing your queries to use with the {% data variables.product.prodname_codeql_cli %},
see “[Using custom queries with the {% data variables.product.prodname_codeql_cli %}](/code-security/code-scanning/using-the-codeql-cli/using-custom-queries-with-the-codeql-cli).”

### Running all queries in a directory

You can run all the queries located in a directory by providing the directory
path, rather than listing all the individual query files. Paths are searched
recursively, so any queries contained in subfolders will also be executed.

{% note %}

**Important**

You should avoid specifying the root of a core {% data variables.product.prodname_codeql %} query pack when executing `database analyze`
as it might contain some special queries that aren’t designed to be used with
the command. Rather, run the query pack to include the
pack’s default queries in the analysis, or run one of the
code scanning query suites.

{% endnote %}

For example, to execute all Python queries contained in the `Functions` directory in the
`codeql/python-queries` query pack you would run:

```
codeql database analyze <python-database> codeql/python-queries:Functions --format=sarif-latest --output=python-analysis/python-results.sarif --download
```

Alternatively, if you have the {% data variables.product.prodname_codeql %} repository checked out, you can execute the
same queries by specifying the path to the directory directly:

```
codeql database analyze <python-database> ../ql/python/ql/src/Functions/ --format=sarif-latest --output=python-analysis/python-results.sarif
```

When the analysis has finished, a SARIF results file is generated. Specifying `--format=sarif-latest` ensures
that the results are formatted according to the most recent SARIF specification
supported by {% data variables.product.prodname_codeql %}.

{% ifversion codeql-packs %}
### Running a subset of queries in a {% data variables.product.prodname_codeql %} pack

If you are using {% data variables.product.prodname_codeql_cli %} v2.8.1 or later, you can include a path at the end of a pack specification to run a subset of queries inside the pack. This applies to any command that locates or runs queries within a pack.

The complete way to specify a set of queries is in the form `scope/name@range:path`, where:


* `scope/name` is the qualified name of a {% data variables.product.prodname_codeql %} pack.


* `range` is a [semver range](https://docs.npmjs.com/cli/v6/using-npm/semver#ranges).


* `path` is a file system path to a single query, a directory containing queries, or a query suite file.

When you specify a `scope/name`, the `range` and `path` are
optional. If you omit a `range` then the latest version of the
specified pack is used. If you omit a `path` then the default query suite
of the specified pack is used.

The `path` can be one of a `\*.ql` query file, a directory
containing one or more queries, or a `.qls` query suite file. If
you omit a pack name, then you must provide a `path`,
which will be interpreted relative to the working directory
of the current process.

If you specify a `scope/name` and `path`, then the `path` cannot
be absolute. It is considered relative to the root of the {% data variables.product.prodname_codeql %}
pack.

To analyze a database using all queries in the `experimental/Security` folder within the `codeql/cpp-queries` {% data variables.product.prodname_codeql %} pack you can use:

```
codeql database analyze --format=sarif-latest --output=results <db> \
    codeql/cpp-queries:experimental/Security
```

To run the `RedundantNullCheckParam.ql` query in the `codeql/cpp-queries` {% data variables.product.prodname_codeql %} pack use:

```
codeql database analyze --format=sarif-latest --output=results <db> \
    'codeql/cpp-queries:experimental/Likely Bugs/RedundantNullCheckParam.ql'
```

To analyze your database using the `cpp-security-and-quality.qls` query suite from a version of the `codeql/cpp-queries` {% data variables.product.prodname_codeql %} pack that is >= 0.0.3 and < 0.1.0 (the highest compatible version will be chosen) you can use:

```
codeql database analyze --format=sarif-latest --output=results <db> \
   'codeql/cpp-queries@~0.0.3:codeql-suites/cpp-security-and-quality.qls'
```

If you need to reference a query file, directory, or suite whose path contains a literal `@` or `:`, you can prefix the query specification with path: like so:

```
codeql database analyze --format=sarif-latest --output=results <db> \
    path:C:/Users/ci/workspace@2/security/query.ql
```

For more information about {% data variables.product.prodname_codeql %} packs, see [About {% data variables.product.prodname_codeql %} Packs](/code-security/code-scanning/codeql-cli-reference/about-codeql-packs).
{% endif %}

### Running query suites

To run a query suite on a {% data variables.product.prodname_codeql %} database for a C/C++ codebase,
you could use the following command from the directory containing your database:

```
codeql database analyze <cpp-database> codeql/cpp-queries:codeql-suites/cpp-code-scanning.qls --format=sarifv2.1.0 --output=cpp-results.sarif --download
```

This command downloads the `codeql/cpp-queries` {% data variables.product.prodname_codeql %} query pack, runs the analysis, and generates a file in the SARIF version 2.1.0 format that is supported by all versions of {% data variables.product.prodname_dotcom %}. This file can be uploaded to {% data variables.product.prodname_dotcom %} by executing `codeql github upload-results` or the code scanning API.
For more information, see "[Analyzing a {% data variables.product.prodname_codeql %} database](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#analyzing-a-codeql-database)"
or "[Code scanning API](/rest/reference/code-scanning)".

{% data variables.product.prodname_codeql %} query suites are `.qls` files that use directives to select queries to run
based on certain metadata properties. The standard {% data variables.product.prodname_codeql %} packs have metadata that specify
the location of the query suites used by code scanning, so the {% data variables.product.prodname_codeql_cli %} knows where to find these
suite files automatically, and you don’t have to specify the full path on the command line.
For more information, see “[Creating {% data variables.product.prodname_codeql %} query suites](/code-security/code-scanning/using-the-codeql-cli/creating-codeql-databases/creating-codeql-query-suites/#creating-codeql-query-suites)".

For information about creating custom query suites, see "[Creating
{% data variables.product.prodname_codeql %} query suites](/code-security/code-scanning/using-the-codeql-cli/creating-codeql-query-suites)."

#### Diagnostic and summary information

When you create a {% data variables.product.prodname_codeql %} database, the extractor stores diagnostic data in the database. The code scanning query suites include additional queries to report on this diagnostic data and calculate summary metrics. When the `database analyze` command completes, the CLI generates the results file and reports any diagnostic and summary data to standard output. If you choose to generate SARIF output, the additional data is also included in the SARIF file.

If the analysis found fewer results for standard queries than you expected, review the results of the diagnostic and summary queries to check whether the {% data variables.product.prodname_codeql %} database is likely to be a good representation of the codebase that you want to analyze.

### Integrating a {% data variables.product.prodname_codeql %} pack into a code scanning workflow in {% data variables.product.prodname_dotcom %}

You can use {% data variables.product.prodname_codeql %} query packs in your code scanning setup. This allows you to select query packs published by various sources and use them to analyze your code.
For more information, see “[Using {% data variables.product.prodname_codeql %} query packs in the {% data variables.product.prodname_codeql %} action](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-codeql-query-packs/)” or “[Downloading and using {% data variables.product.prodname_codeql %} query packs in your CI system](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#downloading-and-using-codeql-query-packs).”

### Including query help for custom {% data variables.product.prodname_codeql %} queries in SARIF files

If you use the {% data variables.product.prodname_codeql_cli %} to run code scanning analyses on third party CI/CD systems,
you can include the query help for your custom queries in SARIF files generated during an analysis.
After uploading the SARIF file to {% data variables.product.prodname_dotcom %}, the query help is shown in the code scanning UI for any
alerts generated by the custom queries.

From {% data variables.product.prodname_codeql_cli %} v2.7.1 onwards, you can include markdown-rendered query help in SARIF files
by providing the `--sarif-add-query-help` option when running
`codeql database analyze`.
For more information, see [Configuring {% data variables.product.prodname_codeql_cli %} in your CI system](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#analyzing-a-codeql-database).

You can write query help for custom queries directly in a markdown file and save it alongside the
corresponding query. Alternatively, for consistency with the standard {% data variables.product.prodname_codeql %} queries,
you can write query help in the `.qhelp` format. Query help written in `.qhelp`
files can’t be included in SARIF files, and they can’t be processed by code
scanning so must be converted to markdown before running
the analysis. For more information, see [“Query help files”](https://codeql.github.com/docs/writing-codeql-queries/query-help-files/#query-help-files)
and “[Testing query help files](/code-security/code-scanning/using-the-codeql-cli/testing-query-help-files).”

## Results

You can save analysis results in a number of different formats, including SARIF
and CSV.

The SARIF format is designed to represent the output of a broad range of static
analysis tools. For more information, see [SARIF output](/code-security/code-scanning/codeql-cli-reference/sarif-output).

If you choose to generate results in CSV format, then each line in the output file
corresponds to an alert. Each line is a comma-separated list with the following information:

**Property**|**Description**|**Example**
:-----:|:-----:|:-----:
Name | Name of the query that identified the result. | `Inefficient regular expression`
Description | Description of the query.| `A regular expression that requires exponential time to match certain inputs can be a performance bottleneck, and may be vulnerable to denial-of-service attacks.`
Severity | Severity of the query.| `error`
Message | Alert message.| `This part of the regular expression may cause exponential backtracking on strings containing many repetitions of '\\\\'.`
Path | Path of the file containing the alert. | `/vendor/codemirror/markdown.js`
Start line | Line of the file where the code that triggered the alert begins. | `617`
Start column | Column of the start line that marks the start of the alert code. Not included when equal to 1. | `32`
End line | Line of the file where the code that triggered the alert ends. Not included when the same value as the start line. | `64`
End column | Where available, the column of the end line that marks the end of the alert code. Otherwise the end line is repeated. | `617`

Results files can be integrated into your own code-review or debugging
infrastructure. For example, SARIF file output can be used to highlight alerts
in the correct location in your source code using a SARIF viewer plugin for your
IDE.

## Further reading

* [“Analyzing your projects in {% data variables.product.prodname_codeql %} for VS Code”](https://codeql.github.com/docs/codeql-for-visual-studio-code/analyzing-your-projects/#analyzing-your-projects)
