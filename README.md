# PR Risk Lens

PR Risk Lens is a local-only Chrome side-panel extension that turns a GitHub pull request patch into an explainable change-risk report.

## Features

- Parses unified Git diffs and counts files/additions/deletions
- Flags authentication, authorization, migration, dependency and deployment changes
- Detects large diffs and source changes without test-file changes
- Produces stable rule IDs, evidence and review recommendations
- Copies Markdown or exports versioned JSON
- No GitHub token, API request or model call required

## Development

```bash
pnpm install
pnpm test -- --run
pnpm lint
pnpm build
```

Load `dist/` from `chrome://extensions`, open a GitHub `.patch` URL or a page containing a unified diff, then click **Scan PR**.

## Engineering narrative

The analyzer is a pure parser and rule engine separated from the Chrome adapter. The risk score is explainable: each point comes from a named rule with evidence and a recommended review action. The design can later consume GitHub Checks or SARIF without changing the core contract.

## Limits

This is a heuristic review assistant, not an approval gate or vulnerability scanner. It does not inspect runtime behavior, dependency advisories or repository permissions.

## License

MIT
