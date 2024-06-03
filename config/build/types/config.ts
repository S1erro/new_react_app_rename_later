export type BuildMode = "production" | "development"

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export class BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}