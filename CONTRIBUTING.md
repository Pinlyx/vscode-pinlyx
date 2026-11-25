# Contributing

Small, focused pull requests are welcome.

1. `npm install`
2. `npm run compile` (must finish with no TypeScript errors)
3. Press F5 in VS Code to start an Extension Development Host and check the Pinlyx server shows up under MCP: List Servers.
4. `npm run package` builds the `.vsix`.

The extension only registers a remote MCP server definition. Tool behavior lives in the Pinlyx service, so tool requests belong at https://pinlyx.com/mcp.
