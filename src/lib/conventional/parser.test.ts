import { describe, it, expect } from "vitest";
import { parseCommit } from "./parser";

describe("parseCommit", () => {
  it("entende um feat simples", () => {
    const result = parseCommit("feat: add login");

    expect(result).toEqual({
      type: "feat",
      scope: null,
      description: "add login",
      body: null,
      breaking: false,
      breakingNote: null,
      conventional: true,
    });
  });
  it("entende um fix com escopo", () => {
    const result = parseCommit("fix(api): handle empty response");

    expect(result).toEqual({
      type: "fix",
      scope: "api",
      description: "handle empty response",
      body: null,
      breaking: false,
      breakingNote: null,
      conventional: true,
    });
  });
});