export class Logger {
    static debug(...params: unknown[]) {
        if (process.env.REACT_APP_DEBUG !== 'true') return;

        console.debug(...params);
    }

    static info(...params: unknown[]) {
        console.log(...params);
    }

    static error(...params: unknown[]) {
        console.error(...params);
    }
}
