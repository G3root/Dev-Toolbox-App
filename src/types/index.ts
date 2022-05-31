import { routesData } from "../routes";

export type InferPath<T> = T extends Array<{ path: infer L }> ? L : never;

export type UnionPath = InferPath<typeof routesData>;
