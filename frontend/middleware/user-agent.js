/*
 * Copyright (c) Burak ERGEN 2022.
 */

export default function (context) {
    context.userAgent = process.server
        ? context.req.headers['user-agent']
        : navigator.userAgent;
}
