import type { ParsedCommit } from "../conventional/types";

export type Bump = "major" | "minor" | "patch";

export function getBump(commits: ParsedCommit[]): Bump {
    if (commits.some((commit) => commit.breaking)) {
        return "major";
    }

    if (commits.some((commit) => commit.type === "feat")) {
        return "minor";
    }

    return "patch";
}