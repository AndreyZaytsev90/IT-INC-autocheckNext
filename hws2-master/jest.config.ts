import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true, // Выводить подробный вывод в консоль о ходе выполнения тестов
  roots: ['<rootDir>/src'], // Корневые директории, где будут искаться тесты
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'], // Паттерны файлов тестов
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Преобразование TypeScript файлов с помощью ts-jest
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Расширения файлов модулей
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Путь к файлу tsconfig.json
    },
  },
};

export default config;
