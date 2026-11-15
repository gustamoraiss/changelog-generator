import type { ParsedCommit } from "../conventional/types";

export function formatCommitLine(commit: ParsedCommit): string {
    if (commit.scope) {
        return `- **${commit.scope}:** ${commit.description}`;
    }

    return `- ${commit.description}`;
}