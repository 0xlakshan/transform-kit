# Transform-kit

A smart, dependency aware CLI tool that helps you **safely migrate**, **upgrade**, and **modernize** your JavaScript/TypeScript projects powered by codemods.

## ✨ Features

- **Automatic package analysis**  
  Scans your `package.json` and detects installed dependencies.

- **Codemod suggestions**  
  Shows available codemods relevant to your dependencies.  
  _Example:_ Migrate from **Yup** to **Zod v4** with a single command.

- **Safe upgrades**  
  Identifies deprecated packages and guides you through safe, step by step migrations.

- **Interactive CLI**  
  Choose codemods and upgrade paths through a friendly, interactive prompt.

- **Future support for monorepos**  
  Planned support for large scale migrations across multiple packages in a monorepo.

## 🚀 Getting Started

### Installation
```bash
npm install -g transform-kit
```
- Install once, use across all projects.
- Queries the Codemod Registry to list available migrations.
- Detects and applies relevant codemods for your project.
- Built for efficiency with minimal setup.
