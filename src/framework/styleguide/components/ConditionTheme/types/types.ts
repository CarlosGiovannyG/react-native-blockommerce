export enum Verb {
    is = 'is',
    isNot = 'is-not',
    notContain = 'not-contain',
    all = 'all',
    any = 'any',
    none = 'none',
}

export type VerbType =
    | Verb.is
    | Verb.isNot
    | Verb.notContain
    | Verb.all
    | Verb.any
    | Verb.none;

export interface Condition {
    subject: string;
    verb: VerbType;
    object: string;
}

export interface Conditions {
    If: Condition[];
    ElseifContainer: Condition[][];
}