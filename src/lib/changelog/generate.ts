import type { ParsedCommit } from "../conventional/types";
import { formatCommitLine } from "./format";

export function generateChangelog(commits: ParsedCommit[], version: string): string {
    const features = commits.filter((commit) => commit.type === "feat");
    const fixes = commits.filter((commit) => commit.type === "fix");

    const parts = [`## ${version}`];

    if (features.length > 0) {
    parts.push(
        `### Features\n\n${features.map((commit) => formatCommitLine(commit)).join("\n")}`
    );
    }

    if (fixes.length > 0) {
    parts.push(
        `### Bug Fixes\n\n${fixes.map((commit) => formatCommitLine(commit)).join("\n")}`
    );
    }

    return parts.join("\n\n");
}