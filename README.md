# blog.vararu.org [![CircleCI](https://circleci.com/gh/tvararu/blog.vararu.org.svg?style=svg)](https://circleci.com/gh/tvararu/blog.vararu.org)

Install the required version of `node` using `nvm`:

```bash
nvm
```

Install dependencies:

```bash
yarn
```

Run locally:

```bash
yarn now dev
open http://localhost:3000
```

Deploy:

```bash
yarn deploy
```

Run cypress end to end tests:

```bash
yarn cypress open # Interactive test runner
# or
yarn cypress run # Headless
```

## License

[MIT](LICENSE.txt).
