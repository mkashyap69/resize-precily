const Message = require('../model/MessageModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

const getMessages = catchAsync(async (req, res, next) => {
  const messages = await Message.find({});

  if (messages.length === 0) {
    return next(new AppError(401, 'No Messages Found'));
  }
  res.status(200).json({ status: 'Success', data: messages });
});

const addMessage = catchAsync(async (req, res, next) => {
  const { message } = req.body;

  const addedMessage = await Message.create({ message });

  if (!addedMessage) {
    return next(new AppError(401, 'Try Again'));
  }
  res.status(200).json({ status: 'Success', data: addedMessage });
});

const putMessage = catchAsync(async (req, res, next) => {
  const { messageId } = req.query;
  const { message } = req.body;

  const updatedMessage = await Message.findByIdAndUpdate(
    { _id: messageId },
    { message }
  );

  if (!updatedMessage) {
    return next(new AppError(401, 'Try Again'));
  }
  res.status(200).json({ status: 'Success', data: updatedMessage });
});

module.exports = { getMessages, addMessage, putMessage };
