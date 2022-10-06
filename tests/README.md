## Tests

It's not strictly necessary to run tests locally while developing. You can
always open a pull request and rely on the CI service to run tests for you,
but it's helpful to run tests locally before pushing your changes to
GitHub.

Tests are written using [jest](https://ghub.io/jest), a framework maintained
by Facebook and used by many teams at GitHub. 
Jest provides everything: a test runner, an assertion library, code coverage analysis,
custom reporters for different types of test output, etc.

### Install optional dependencies

We typically rely on CI to run our tests, so some large test-only
dependencies are considered **optional** (for example, puppeteer). To run the tests locally, you'll
need to make sure optional dependencies are installed by running:

```sh
npm ci --include=optional
```

If you run into the error "Could not find expected browser (chrome) locally", you may need to install the expected chromium version manually with:
```
node node_modules/puppeteer/install.js
```

### Running all the tests

Once you've followed the development instructions above, you can run the entire
test suite locally:

```sh
script/test # or `npm test`
```

### Watching all the tests

You can run a script that continually watches for changes and
re-runs the tests whenever a change is made. This command notifies you
when tests change to and from a passing or failing state, and it prints
out a test coverage report so you can see what files need testing.

```sh
npm run test-watch
```

### Running individual tests

You can run specific tests in two ways:

```sh
# The TEST_NAME can be a filename, partial filename, or path to a file or directory
npm test -- <TEST_NAME>

NODE_OPTIONS=--experimental-vm-modules npx jest tests/unit
```

### Failed Local Tests

If the tests fail locally with an error like this:

`Could not find a production build in the '/Users/username/repos/docs-internal/.next' directory.`

You may need to run this before every test run:

```sh
npx next build
```

### Linting

To validate all your JavaScript code (and auto-format some easily reparable mistakes),
run the linter:

```sh
npm run lint
```

### Keeping the server running

When you run `jest` tests that depend on making real HTTP requests
to `localhost:4000`, the `jest` tests have a hook that starts the
server before running all/any tests and stops the server when done.

You can disable this, which might make it easier when debugging tests
since the server won't need to start and stop every time you run tests.

In one terminal, type:

```sh
NODE_ENV=test PORT=4000 node server.js
```

In another terminal, type:

```sh
START_JEST_SERVER=false jest tests/rendering/foo/bar.js
```

Or whatever the testing command you use is. 

The `START_JEST_SERVER` environment variable needs to be set to `false`, or else `jest` will try to start
a server on `:4000` too.
