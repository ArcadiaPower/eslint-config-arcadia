# Arcadia Power Engineering's ESLint configuration.

Our ESLint configuration is a modified version of [AirBNB's excellent config](https://github.com/airbnb/javascript).

## Usage

### Installation
1. Make sure you have [Node v8](https://nodejs.org/dist/v8.9.4/node-v8.9.4.pkg) or higher installed.
2. Connect to Gemfury's [private npm](https://manage.fury.io/dashboard/arcadiapower/intro?kind=js)
  ```
    npm config list    # check userconfig
    npm config set registry https://npm-proxy.fury.io/<private-token>/arcadiapower/
    npm config set ca ""
  ```
3. Install the npm package
  ```
    npm install --save-dev eslint-config-arcadia
  ```

## Publishing
The config is hosted as an NPM package on Gemfury.

1. In your pull request, bump the version.
2. After merging, pull master and run `npm pack`
3. Upload the resulting package on the [Gemfury dashboard](https://manage.fury.io/dashboard/arcadiapower).
