If `autobuild` fails, or you want to analyze a different set of source files from those built by the `autobuild` process, you'll need to remove the `autobuild` step from the workflow, and manually add build steps. For C/C++, C#, Go, and Java projects, {% data variables.product.prodname_codeql %} will analyze whatever source code is built by your specified build steps.

