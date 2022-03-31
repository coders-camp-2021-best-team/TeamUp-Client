/* eslint-disable @typescript-eslint/no-explicit-any */
export class Logger {
    static instance: Logger;

    static getInstance() {
        if (!this.instance) {
            this.instance = new Logger();
        }
        return this.instance;
    }
    info(tag: string, message: string, context?: any) {
        console.log(`[${tag}] : ${message}`, { context });
    }

    debug(tag: string, message: string, context?: any) {
        console.debug(`[${tag}] : ${message}`, { context });
    }
    error(tag: string, message: string, context?: any) {
        console.error(`[${tag}] : ${message}`, { context });
    }
}
