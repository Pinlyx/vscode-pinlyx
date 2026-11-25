# Pinlyx for VS Code

Adds the Pinlyx MCP server to VS Code in one step, so your AI assistant can read your omnichannel inbox, contacts, deals and tasks.

## Why it exists

Pinlyx already runs a remote MCP server at `https://api.pinlyx.com/mcp`. Adding it by hand means editing `mcp.json`, finding the right URL and working out the auth. This extension registers the server with the editor for you. There is no API key to copy: sign-in uses OAuth 2.1 with dynamic client registration.

## Install

- VS Code: search for "Pinlyx" in the Extensions view (needs VS Code 1.101 or newer).
- Cursor, Windsurf, VSCodium and other editors that use Open VSX: install "Pinlyx" from their extension view, or install a downloaded `.vsix` with `code --install-extension pinlyx-0.1.0.vsix`.
- From source: clone the repo, run `npm install && npm run package`, then install the generated `.vsix`.

## Quick start

1. Install the extension. The "Pinlyx" server appears under `MCP: List Servers`.
2. Start it, or ask your assistant something that needs it (for example "list my open Pinlyx conversations").
3. The first time, your browser opens a Pinlyx sign-in page. Log in and approve access. The editor stores the grant; no key lands in your settings.
4. Run `Pinlyx: Open dashboard` from the Command Palette to open https://app.pinlyx.com.

## What you get

| Plan | Access through MCP |
| --- | --- |
| Free | Read-only tools (search contacts, read conversations, deals, tasks, reports) |
| Pro and above | Write tools as well (send messages, create deals and tasks, schedule posts) |

The tools act on the one workspace you sign in to. Call `crm_whoami` to see your plan and which tools your grant can use.

## How it works and limits

- The extension contributes an MCP server definition provider and returns one HTTP definition for `https://api.pinlyx.com/mcp` (Streamable HTTP). It does not proxy traffic or run any local process.
- Authentication, tool execution and data access all happen in the Pinlyx service. The extension never sees your token or your data.
- It needs an editor that implements the MCP server definition provider API (VS Code 1.101+). Editors that only read `mcp.json` can use the same URL directly.
- Other than opening the dashboard in your browser on request, the extension makes no network calls itself.

## Privacy

See https://pinlyx.com/privacy. This extension collects no telemetry.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Issues and pull requests go to https://github.com/Pinlyx/vscode-pinlyx.

## License

MIT, see [LICENSE](LICENSE).

Built and maintained by [Pinlyx](https://pinlyx.com/?utm_source=github&utm_medium=readme&utm_campaign=vscode-pinlyx), the omnichannel inbox and AI agent for Telegram, WhatsApp, Instagram, Messenger, X, email and live chat.
