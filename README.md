[![npm](https://img.shields.io/github/package-json/v/mikelgo/ts-guava?style=flat-square)](https://www.npmjs.com/package/mikelgo/ts-utils)
[![npm](https://img.shields.io/circleci/build/github/mikelgo/ts-guava/master?style=flat-square&token=9bb3fb5d157d1879a923930910ee034891bf15a9)](https://www.npmjs.com/package/mikelgo/ts-guava)
[![npm](https://img.shields.io/npm/l/@mikelgo/ts-guava?style=flat-square)](https://www.npmjs.com/package/mikelgo/ts-guava)
[![codecov](https://codecov.io/gh/mikelgo/ts-guava/branch/master/graph/badge.svg)](https://codecov.io/gh/mikelgo/ts-guava)

# Ts-guava

Ts-guava is a small library providing some TypeScript utility functions to deal with objects and arrays. The libraries aim is
to provide the Google Guava utilities to the TypeScript world.

## Installation

Use npm to install:

```bash
    $ npm i @mikelgo/ts-guava
```

## Usage

Just import the util-function you want to use by importing it from the lib.

Example:

```typescript
import {isValid} from '@mikelgo/ts-guava/common-utils'

    if(isValid(somethingToCheck){
        // ...execute some code
    })
```

## Overview

Currently the library does support 12 utility-functions.

### Common utils

- `isValid`
- `isNotValid`
- `isObject`
- `isNotObject`
- `isObjectOrArray`
- `isNotObjectOrArray`
- `noNullValues`
- `notNull`
- `assignValid`

### Array utils

- `isArray`
- `isNotArray`
- `isEmptyArray`
- `isNotEmptyArray`
- `allValuesInArrayAreEqual`
- `allValuesInArrayAreNotEqual`

For the full documentation see:

- [Object utils doc](./src/common/README.md)
- [Array utils doc](./src/array/README.md)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
