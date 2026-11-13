import { describe, it, expect } from "vitest";
import { getBump } from "./bump";
import { parseCommit } from "../conventional/parser";

describe("getBump", () => {
    it("sugere minor quando há feat e nenhum breaking", () => {
    const commits = [
        parseCommit("feat: add login"),
        parseCommit("fix: typo"),
    ];

        expect(getBump(commits)).toBe("minor");
    });
    it("sugere major quando há breaking, mesmo depois de um feat", () => {
        const commits = [
            parseCommit("feat: add login"),
            parseCommit("fix!: change error format"),
        ];

        expect(getBump(commits)).toBe("major")
    });
    it("sugere patch quando há só fix", () => {
        const commits = [
        parseCommit("fix: typo"),
        parseCommit("fix: wrong label"),
        ];

        expect(getBump(commits)).toBe("patch")
    });
    it("sugere patch quando há só docs e chore", () => {
        const commits = [
        parseCommit("docs: update readme"),
        parseCommit("chore: bump deps"),
        ];

        expect(getBump(commits)).toBe("patch")
    });
});