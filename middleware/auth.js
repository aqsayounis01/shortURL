const {getuser} =  require('../service/Auth.js');


async function restrictToLoggedInUserOnly(req,res,next)
{
    const suid = req.cookies?.uid;

    if(!suid) return res.redirect('/login');   // -> it means you are not logged in

    const user  = getuser(suid);
    if(!user) return res.redirect('/login')    // if session id is incorrect 

    //everything fine -> put the user in req object 
    req.user  = user;

    next();


}

async function checkAuth(req,res,next)   //not so restricted
{
    const suid = req.cookies?.uid;

    const user  = getuser(suid);
      
    //everything fine -> put the user in req object (if not then null)
    req.user  = user;   //we could have done this in the handlelogin function but it does not have next(), so the value of req.user will not transfer in / page 

    next();

}

module.exports ={
    restrictToLoggedInUserOnly,
    checkAuth
}