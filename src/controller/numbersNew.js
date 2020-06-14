const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

exports.add = (req, res) => {
  const num1 = Number(req.params.number1);
  const num2 = Number(req.params.number2);
  const added = add(num1, num2);
  return Number.isNaN(num1) || Number.isNaN(num2)
    ? res.sendStatus(400)
    : res.status(200).send({ result: added });
};

exports.subtract = (req, res) => {
  const num1 = req.params.number1;
  const num2 = req.params.number2;
  const subtracted = subtract(num2, num1);
  if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).send({ result: subtracted });
};

exports.multiply = (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(req.body.a, req.body.b) });
};

exports.divide = (req, res) => {
  const { a, b } = req.body;
  if (b === 0) {
    return res.status(400).send({ error: 'Unable to divide by 0.' });
  }

  if (!a || !b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }

  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  if (a === 0) {
    return res.status(200).send({ result: 0 });
  }
  res.status(200).json({ result: divide(a, b) });
};

exports.remainder = (req, res) => {
  const { a, b } = req.body;

  if (b === 0) {
    return res.status(400).send({ error: 'Unable to divide by 0.' });
  }

  if (!a || !b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  if (a === 0) {
    return res.status(200).send({ result: 0 });
  }
  res.status(200).send({ result: remainder(a, b) });
};