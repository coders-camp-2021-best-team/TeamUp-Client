export class Logger {
    static debug(tag: string, message: string, context?: unknown) {
        if (process.env.REACT_APP_DEBUG !== 'true') {
            return;
        }
        console.debug(`[${tag}] : ${message}`, { context });
    }

    static info(tag: string, message: string, context?: unknown) {
        console.log(`[${tag}] : ${message}`, { context });
    }

    static error(tag: string, message: string, context?: unknown) {
        console.error(`[${tag}] : ${message}`, { context });
    }
}
