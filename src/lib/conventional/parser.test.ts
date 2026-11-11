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
  it("usa fallback para commit fora do padrão", () => {
    const result = parseCommit("fixed stuff");
    expect(result).toEqual({
      type: "other",
      scope: null,
      description: "fixed stuff",
      body: null,
      breaking: false,
      breakingNote: null,
      conventional: false,
    });
  });
  it("separa o corpo do cabeçalho em commits de várias linhas", () => {
    const result = parseCommit("feat: add login\n\nAdds Google sign-in.");
    expect(result).toEqual({
      type: "feat",
      scope: null,
      description: "add login",
      body: "Adds Google sign-in.",
      breaking: false,
      breakingNote: null,
      conventional: true,
    });
  });
})