module.exports = authCheck;
function authCheck(req, res, next) {
  console.log('req user:', req.user);
  console.log('req admin:', req.admin);
  console.log('req.isAuthenticated', req.isAuthenticated());
  // console.log('req headers cookie: ', req.headers);
  if (!req.user) {
    res.status(401).json({ message: 'Invalid Credentials. Please Log In' });
  } else {
    next();
  }
}

// PSUEDO - implement later for profile
// router.post("/authcheck",() => {
//   return res.json({isloggedIn:req.isAuthenticated()})
// })
// router.post("/me",(req,res) => {
//   if(req.isAuthenticated()){
//     res.json({me:req.user})
//   } else {
//     res.json({me:null})
//   }
// })
// psuedo implement on the fe to check if user auth
// axios.post("/authcheck").then((res) => {
// if(res.data.isloggedIn){
//   render <Component>
// } else {

// }
// })
