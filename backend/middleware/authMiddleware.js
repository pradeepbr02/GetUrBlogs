// authMiddleware.js

import admin from 'firebase-admin';

const authMiddleware = async (req, res, next) => {
    const { authToken } = req.headers;
    if (authToken) {
        try {
            req.user = await admin.auth().verifyIdToken(authToken);
        } catch (e) {
            return res.sendStatus(400);
        }
    }
    req.user = req.user || {};
    next();
};

export default authMiddleware;
