export  class ErrorResponse extends Error {
     statusCode
     message
   
    constructor(status,message) {
     super(message);
     this.statusCode = status;
     this.message = message;
    }
   
    static badRequest(msg) {
     return new ErrorResponse(400, msg || "Bad Request");
    }
   
    static unauthorized(msg) {
     return new ErrorResponse(401, msg || "Unauthorized");
    }
   
    static forbidden(msg) {
     return new ErrorResponse(403, msg || "Forbidden");
    }
   
    static notFound(msg){
     return new ErrorResponse(404, msg || "Not Found");
    }
    static conflict(msg) {
     return new ErrorResponse(409, msg || "Conflict");
    }
   
    static internalError(msg) {
     return new ErrorResponse(500, msg || "internal Server Error");
    }
   }