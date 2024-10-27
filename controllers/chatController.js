const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.postMessage = async (req, res) => {
    const { user, message } = req.body;
    const newMessage = new Message({ user, message });

    try {
        await newMessage.save();
        res.status(200).json(newMessage);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
