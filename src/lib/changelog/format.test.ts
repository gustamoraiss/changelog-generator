import { describe, it, expect } from "vitest";
import { formatCommitLine } from "./format";
import { parseCommit } from "../conventional/parser";

describe("formatCommitLine", () => {
    it("formata um commit sem escopo", () => {
        const commit = parseCommit("feat: add login");
        expect(formatCommitLine(commit)).toBe("- add login");
    });
    it("formata um commit com escopo", () => {
        const commit = parseCommit("fix(api): handle empty response");
        expect(formatCommitLine(commit)).toBe("- **api:** handle empty response");
    });
});