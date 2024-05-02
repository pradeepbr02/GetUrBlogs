// articleController.js

import Articles from "../models/Article.js";

const getArticle = async (req, res) => {
    const { name } = req.params;
    const { uid } = req.user;

    try {
        const art = await Articles.findOne({ name });
        if (art) {
            const upvoteIds = art.upvoteIds || [];
            art.canUpvote = uid && !upvoteIds.includes(uid);
            res.json(art);
        } else {
            res.sendStatus(404).send("Article not found");
        }
    } catch (error) {
        res.status(500).send("Internal server error");
    }
};

const upvoteArticle = async (req, res) => {
    const { name } = req.params;
    const { uid } = req.user;

    try {
        const article = await Articles.findOne({ name });
        if (article) {
            const upvoteIds = article.upvoteIds || [];
            const canUpvote = uid && !upvoteIds.includes(uid);
            if (canUpvote) {
                await Articles.updateOne({ name }, { $inc: { upvotes: 1 }, $push: { upvoteIds: uid } });
                const updatedArticle = await Articles.findOne({ name });
                res.json(updatedArticle);
            } else {
                res.status(400).send("Already upvoted");
            }
        } else {
            res.sendStatus(404).send("Article not found");
        }
    } catch (error) {
        res.status(500).send("Internal server error");
    }
};

const addComment = async (req, res) => {
    const { name } = req.params;
    const { email } = req.user;
    const { comment } = req.body;

    try {
        await Articles.updateOne({ name }, { $push: { comments: { postedBy: email, comment } } });
        const article = await Articles.findOne({ name });
        if (article) {
            res.json(article);
        } else {
            res.sendStatus(404).send("Article not found");
        }
    } catch (error) {
        res.status(500).send("Internal server error");
    }
};

export  { getArticle, upvoteArticle, addComment };
