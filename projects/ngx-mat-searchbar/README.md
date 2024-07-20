# NgxMatSearchbar

https://github.com/hncleary/ngx-mat-searchbar

[![npm version](https://img.shields.io/npm/v/ngx-mat-searchbar.svg?style=flat-square)](https://www.npmjs.com/package/ngx-mat-searchbar)
[![npm downloads total](https://img.shields.io/npm/dt/ngx-mat-searchbar.svg?style=flat-square)](https://www.npmjs.com/package/ngx-mat-searchbar)
[![npm downloads monthly](https://img.shields.io/npm/dm/ngx-mat-searchbar.svg?style=flat-square)](https://www.npmjs.com/package/ngx-mat-searchbar)

## What does it do?

Angular Material component providing an input field for searching / filtering. Includes prefixed search icon + suffixed clear button.

![image](/projects/ngx-mat-searchbar/src/assets/searchbar.png)

## Try It

- Clone the source repository and run `npm run start` to serve a demo of the component

![image](/projects/ngx-mat-searchbar/src/assets/options.png)
![image](/projects/ngx-mat-searchbar/src/assets/demo.png)

## How to use it?

Install `ngx-mat-searchbar` in your project

```bash
npm install ngx-mat-searchbar
```

Import the `NgxMatSearchbarModule` e.g. in your `app.module.ts`:

```typescript
import { MatSelectModule } from '@angular/material';
import { NgxMatSearchbarModule } from 'ngx-mat-searchbar';

@NgModule({
  imports: [
    ...
    MatSelectModule,
    NgxMatSearchbarModule
  ],
})
export class AppModule {}
```

Use the `ngx-mat-searchbar` component, and trigger events on its change event

```html
<ngx-mat-searchbar (change)="onFilterChange($event)"></ngx-mat-searchbar>
```

See the example in https://github.com/hncleary/ngx-mat-searchbar/tree/main/src/app

## Inputs

```typescript
  /** Text to display as the placeholder of the material form field */
  @Input() public placeholder = 'Search';
  /** Disable form input if true */
  @Input() public disabled = false;
  /** Time in milliseconds to debounce the change emit output */
  @Input() public debounce = 250;
  /** Material icon to display as a prefix to the search input */
  @Input() public matIconSearch = 'search';
  /** Material icon to display as a clear button suffix to the search input */
  @Input() public matIconClear = 'cancel';
  /** Appearance of search input form field */
  @Input() public appearance: 'fill' | 'outline' = 'fill';
```

## Development

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Library Build / NPM Package

Run `npm run build-lib` to build the library and generate an NPM package.
The build artifacts will be stored in the `dist/ngx-mat-searchbar/` folder.

### Running unit tests

Run `npm run tes-lib` to execute the library unit tests via [Karma](https://karma-runner.github.io)
