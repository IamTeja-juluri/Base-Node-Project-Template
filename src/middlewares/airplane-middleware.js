const { StatusCodes }=require('http-status-codes');

const {ErrorResponse}=require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message='Something went wrong while creating an airplane';
        new AppError(['Model Number not found in the incoming request in the correct form',StatusCodes.BAD_REQUEST]);
        ErrorResponse.error={explanation:'Model Number not found in the incoming request in the correct form'};
        return res
              .status(StatusCodes.BAD_REQUEST)
              .json(ErrorResponse);
    }
    next();  //controller is the next middleware
};

module.exports={
    validateCreateRequest
}