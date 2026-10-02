export type FileStatus = 'added' | 'modified' | 'deleted' | 'renamed' | 'unknown';
export type ChangedFile = { path: string; status: FileStatus; additions: number; deletions: number; patch: string };
export type Risk = { ruleId: string; severity: 'low' | 'medium' | 'high'; title: string; evidence: string; recommendation: string };
export type RiskReport = { schemaVersion: 1; sourceUrl: string; title: string; files: ChangedFile[]; additions: number; deletions: number; score: number; verdict: 'low' | 'review' | 'high'; risks: Risk[] };
