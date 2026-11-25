import * as vscode from 'vscode';

/** Must match contributes.mcpServerDefinitionProviders[0].id in package.json. */
const PROVIDER_ID = 'pinlyx.mcp';

/** Remote MCP server (Streamable HTTP, OAuth 2.1 with dynamic client registration). */
const MCP_URL = 'https://api.pinlyx.com/mcp';

const DASHBOARD_URL = 'https://app.pinlyx.com';

export function activate(context: vscode.ExtensionContext): void {
  const version = (context.extension.packageJSON as { version?: string }).version ?? '0.0.0';

  // No headers and no API key: the editor runs the OAuth flow in the browser
  // the first time a Pinlyx tool is used.
  const provider: vscode.McpServerDefinitionProvider = {
    provideMcpServerDefinitions: () => [
      new vscode.McpHttpServerDefinition('Pinlyx', vscode.Uri.parse(MCP_URL), {}, version),
    ],
  };

  context.subscriptions.push(
    vscode.lm.registerMcpServerDefinitionProvider(PROVIDER_ID, provider),
    vscode.commands.registerCommand('pinlyx.openDashboard', () =>
      vscode.env.openExternal(vscode.Uri.parse(DASHBOARD_URL)),
    ),
  );
}

export function deactivate(): void {}
