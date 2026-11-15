import { describe, it, expect } from "vitest";
import { bumpVersion } from "./version";

describe("bumpVersion", () => {
    it("sobe o patch e mantém o resto", () => {
        expect(bumpVersion("1.2.3", "patch")).toBe("1.2.4");
    });
    it("sobe minor e mantém o resto", () => {
        expect(bumpVersion("1.2.3", "minor")).toBe("1.3.0");
    });
    it("sobe major e mantém o resto", () => {
        expect(bumpVersion("1.2.3", "major")).toBe("2.0.0");
    });
});