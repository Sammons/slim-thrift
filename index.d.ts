declare module 'thrift' {
    const Type: {
        STOP: 0,
        VOID: 1,
        BOOL: 2,
        BYTE: 3,
        I08: 3,
        DOUBLE: 4,
        I16: 6,
        I32: 8,
        I64: 10,
        STRING: 11,
        UTF7: 11,
        STRUCT: 12,
        MAP: 13,
        SET: 14,
        LIST: 15,
        UTF8: 16,
        UTF16: 17
    };
    const MessageType: {
        CALL: 1,
        REPLY: 2,
        EXCEPTION: 3,
        ONEWAY: 4
    }
    const TApplicationExceptionType: {
        UNKNOWN: 0,
        UNKNOWN_METHOD: 1,
        INVALID_MESSAGE_TYPE: 2,
        WRONG_METHOD_NAME: 3,
        BAD_SEQUENCE_ID: 4,
        MISSING_RESULT: 5,
        INTERNAL_ERROR: 6,
        PROTOCOL_ERROR: 7,
        INVALID_TRANSFORM: 8,
        INVALID_PROTOCOL: 9,
        UNSUPPORTED_CLIENT_TYPE: 10
    }
    class TException extends Error {
        constructor(message: string);
        public name: string;
        public message: string;
    }
    class ReadBeginResultType {
        ftype: typeof Type.STOP;
        fid: number;
    }
    class ReadError {
        public readStructBegin: (name: string) => ReadBeginResultType;
        public readFieldBegin: () => ReadBeginResultType;
        public readString: () => string;
        public readI32: () => number;
        public skip: (type) => null;
        public readFieldEnd: () => void;
        public readStructEnd: () => void;
    }
    class TApplicationException extends TException {
        constructor(type: number, message: string);
        public type: number | 0;
        public name: string;
        public message: string;
        public read: (input) => void;
        public write: (output) => void;
    }
    class TProtocolException extends Error {
        public name: string;
        public type: string;
        public message: string;
    }
    export const Thrift: {
        Type: typeof Type,
        MessageType: typeof MessageType,
        TException: typeof TException,
        TApplicationExceptionType: typeof TApplicationExceptionType,
        TApplicationException: typeof TApplicationException,
        TProtocolException: typeof TProtocolException
        objectLength: (obj) => number,
        inherits: (constructor, superConstructor) => void;
        copyMap: (obj, types) => Object;
        copyList: <T>(lst, types) => T[];
    }
    export class Connection {
        constructor(stream, options: {
            transport;
            protocol;
            debug: boolean;
            max_attempts: number;
            retry_max_delay: number;
            connect_timeout: number;
            timeout: number;
        });
    }
    export class Client {
        constructor(transport, protocol);
    }
    export const createClient: <T>(generatedClient: {Client: typeof Client}, connection: Connection) => T & Client;
    export const createConnection
    export const createSSLConnection
    export const createStdIOClient
    export const createStdIOConnection
    export const HttpConnection
    export const createHttpConnection
    export const createHttpClient
    export const WSConnection
    export const createWSConnection
    export const createWSClient
    export const XHRConnection
    export const createXHRConnection
    export const createXHRClient
    export const createServer
    export const createMultiplexServer
    export const createWebServer
    export const Int64
    export const Q
    export const Multiplexer
    export const MultiplexedProcessor
    export const TFramedTransport
    export const TBufferedTransport
    export const TBinaryProtocol
    export const TJSONProtocol
    export const TCompactProtocol
}