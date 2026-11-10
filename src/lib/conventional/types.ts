export type ParsedCommit = {
    type: string;
    scope: string | null;
    description: string;
    body: string | null;
    breaking: boolean;
    breakingNote: string | null;
    conventional: boolean;
};