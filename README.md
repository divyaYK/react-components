# React Components from scratch

A demo library developed to understand how scalable react components are written.

## Steps to run the project

```bash
yarn install
yarn add --peer react react-dom styled-components
yarn storybook
```

## Steps to install the package

```bash
yarn add @divyaYK/react-components
# or
npm install @divyaYK/react-components
```

## Usage

### Components

The following components are available:

- Avatar
- Badge
- Button
- Cards
- Checkbox
- Dropdown
- Input
- Navbar
- Rating
- Tabs
- Header & Text

### Example

```typescript
import { Button } from "@divyaYK/react-components";

const Component = () => <Button>Click Me!</Button>;

export default Component;
```