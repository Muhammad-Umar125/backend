
// const asyncHandler = (fn)=>{async (req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code||500).json({
//             success:false,
//             messagge:err.messagge
//         })
//     }
// }

// }

const asyncHandler = (reqHandler)=>{ 
       return (req,res,next) => {
        Promise.resolve(reqHandler(req,res,next)).catch((err)=>next(err))
    }

}

export {asyncHandler}