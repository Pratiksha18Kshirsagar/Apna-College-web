module.exports = (fn)=>{ //async
    return function(req,res,next){ 
        fn(req,res,next).catch(err =>{ //async is executed here
            console.log(err);
            next(err);
        })
    }
}