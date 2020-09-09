class ExampleController {
  static async exampleGetMethod(req, res) {
    try {
      const example = 'Example GET route';
      return res.status(200).json(example);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  static async examplePostMethod(req, res) {
    try {
      const example = 'Example POST route';
      return res.status(200).json(example);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
}

module.exports = ExampleController;
