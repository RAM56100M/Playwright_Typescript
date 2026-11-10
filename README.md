# Playwright TypeScript Automation

A day-by-day learning project for TypeScript and JavaScript fundamentals, with a foundation for browser automation exercises.

## Current topics

| Path | Topics |
| --- | --- |
| `Day1/` | Introductory JavaScript and TypeScript examples |
| `Day2/Comments.ts` | Single-line and multi-line comments |
| `Day2/Variables.ts` | `var`, `let`, and `const`; scope, declaration, reassignment, and hoisting |
| `Day3/Data_Types/` | TypeScript data types and JavaScript-versus-TypeScript examples |
| `Day4/OperatorsDemo.ts` | Arithmetic, comparison, logical, bitwise, and assignment operators |
| `Notes/Data_Types.md` | Reference notes on variables and TypeScript data types |
| `Daily_Progress.md` | Dated learning progress |

The current exercises focus on language fundamentals. Playwright automation examples can be added as the project develops.

## Getting started

Install the project dependencies:

```bash
npm install
```

Type-check the TypeScript examples without generating files:

```bash
npx tsc --noEmit --target ES2020 --module commonjs Day1/Intro.ts Day2/Comments.ts Day2/Variables.ts Day3/Data_Types/DataTypesDemo.ts Day3/Data_Types/Test.ts Day4/OperatorsDemo.ts
```

To compile and run the Day 3 data types demo:

```bash
npx tsc Day3/Data_Types/DataTypesDemo.ts --target ES2020 --module commonjs --outDir dist
node dist/DataTypesDemo.js
```

To compile and run the Day 4 operators demo:

```bash
npx tsc Day4/OperatorsDemo.ts --target ES2020 --module commonjs --outDir dist
node dist/OperatorsDemo.js
```
