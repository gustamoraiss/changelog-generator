import type { Bump } from "./bump";

export function bumpVersion(version: string, bump: Bump): string {
    const [major, minor, patch] = version.split(".").map(Number);

    if (bump === "major") {
        return `${major + 1}.0.0`;
    }

    if (bump === "minor") {
        return `${major}.${minor + 1}.0`;
    }

    return `${major}.${minor}.${patch + 1}`;
}