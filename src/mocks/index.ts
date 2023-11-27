export const messages = [
  { id: '1', isAi: false, message: 'Give me some typescript advices' },
  {
    id: '2',
    isAi: true,
    message:
      'Certainly! If you\'re using TypeScript with a `src` folder structure and want to configure aliases for your imports, you can use the `tsconfig.json` file. Here\'s an example configuration:\r\n\r\n```json\r\n{\r\n  "compilerOptions": {\r\n    "baseUrl": "./",\r\n    "paths": {\r\n      "@src/*": ["src/*"]\r\n    },\r\n    "target": "es5",\r\n    "module": "commonjs",\r\n    "strict": true,\r\n    // other compiler options...\r\n  },\r\n  "include": ["src/**/*.ts", "src/**/*.d.ts"],\r\n  "exclude": ["node_modules"]\r\n}\r\n```\r\n\r\nIn this example:\r\n\r\n- `baseUrl`: Specifies the base directory for resolving non-relative module names. This should be set to the root of your project.\r\n\r\n- `paths`: Allows you to specify module name aliases. In this case, `@src/*` is an alias for the `src/*` path.\r\n\r\n- `include`: Specifies the files to be included in the compilation. In this case, it includes all TypeScript files in the `src` directory and its subdirectories.\r\n\r\n- `exclude`: Specifies files and folders to be excluded from the compilation. Typically, you want to exclude the `node_modules` folder.\r\n\r\nAfter setting up this configuration, you can use import statements like the following in your TypeScript files:\r\n\r\n```typescript\r\nimport { SomeModule } from \'@src/someModule\';\r\n```\r\n\r\nRemember to adjust other compiler options according to your project requirements.',
  },
]

export const chats = [
  { id: '1', name: 'SVG Infinity Sign' },
  { id: '2', name: 'Interview Outcome: Gratitude & Future Consideration' },
  { id: '3', name: 'Random characters, user inquiry.' },
  { id: '4', name: 'Can not make it. Thanks!' },
  { id: '5', name: 'Enhance CV for Job' },
]
