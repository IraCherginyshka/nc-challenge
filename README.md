# NcChallenge

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.0.

## Development server

To start a local development server, run:

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component components/component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run with folder structure:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.


## Testing notes

To make it easy to test the loading of the quote, I added a 3s delay for quote loading from the API in `services/quote.ts:16`.
```
.pipe(delay(3000))
```


## Suggestions
- Update Sass usage since @import rules are deprecated and will be removed in Dart Sass 3.0.0.
- Use BreakpointObserver from @angular/cdk/layout to observe current orientation to programmatically hide components whet it is needed. Avoid fetching the Quote API when the component is not visible.
- Sort imports for consistency.
- Improve file naming by using file types.
- Explore Angular Material more deeply — I didn’t have enough time to investigate and use all its benefits.
- Fix the ResizeObserver console error.
