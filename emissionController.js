const db = require('../firebase');

exports.addEmission = async (req, res) => {
  try {
    const { category, amount, scope } = req.body;

    const emission = {
      category,
      amount,
      scope,
      createdAt: new Date(),
    };

    await db.collection('emissions').add(emission);

    res.status(201).json({
      message: 'Emission added successfully',
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEmissions = async (req, res) => {
  try {
    const snapshot = await db.collection('emissions').get();

    const emissions = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(emissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
