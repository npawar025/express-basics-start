const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "nilesh") {
    req.user = { name: "john", id: 1 };
    next();
  } else {
    return res.status(401).send("Unauthorized");
  }
  console.log("authorize");
  next();
};

export default authorize;
