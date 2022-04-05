/* eslint-disable @typescript-eslint/no-explicit-any */
export class Logger {
    static instance: Logger;

    static info(tag: string, message: string, context?: any) {
        if (process.env.REACT_APP_DEVELOPER_MODE !== 'true') {
            return;
        }
        console.log(`[${tag}] : ${message}`, { context });
    }

    static debug(tag: string, message: string, context?: any) {
        if (process.env.REACT_APP_DEVELOPER_MODE !== 'true') {
            return;
        }
        console.debug(`[${tag}] : ${message}`, { context });
    }
    static error(tag: string, message: string, context?: any) {
        if (process.env.REACT_APP_DEVELOPER_MODE !== 'true') {
            return;
        }
        console.error(`[${tag}] : ${message}`, { context });
    }
}
