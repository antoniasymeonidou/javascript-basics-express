const { sayHello } = require('../lib/strings');
const { uppercase } = require('../lib/strings');
const { lowercase } = require('../lib/strings');
const { firstCharacters } = require('../lib/strings');

exports.hello = (req, res) => {
  const { string } = req.params;
  res.json({ result: sayHello(string) });
};

exports.upper = (req, res) => {
  const { string } = req.params;
  res.json({ result: uppercase(string) });
};

exports.lower = (req, res) => {
  const { string } = req.params;
  res.json({ result: lowercase(string) });
};

exports.firstCharacters = (req, res) => {
  const { string } = req.params;
  const length = req.query.length || 1;
  res.json({ result: firstCharacters(string, length) });
};
