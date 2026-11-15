import { describe, it, expect } from "vitest";
import { generateChangelog } from "./generate";
import { parseCommit } from "../conventional/parser";

describe("generateChangelog", () => {
    it("agrupa feat e fix em seções separadas", () => {
        const commits = [
        parseCommit("feat: add login"),
        parseCommit("fix(api): handle empty response"),
        ];

        expect(generateChangelog(commits, "1.3.0")).toBe(
        "## 1.3.0\n\n### Features\n\n- add login\n\n### Bug Fixes\n\n- **api:** handle empty response"
        );
    });
    it("omite a seção que não tem commits", () => {
        const commits = [
        parseCommit("fix: typo"),
        ];
        expect(generateChangelog(commits, "1.0.1")).toBe(
        "## 1.0.1\n\n### Bug Fixes\n\n- typo"
        );
    });
});
