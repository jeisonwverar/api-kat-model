export const checkRoleAuth = (roles) => async (req, res, next) => {
  const user = req.user;
  try {
    if (!user) {
      return res.status(401).end('user invalided');
    }

    if (!roles.includes(user.role)) {
      return res.status(403).end(`the role: ${user.role} is not authorized`);
    }

    next();
  } catch (error) {
    console.error('Error in checkRoleAuth middleware:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
