import Joi from "joi";

let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

const getAll = (req, res) => {
  res.status(200).json(planets);
};

const getOneById = (req, res) => {
  const { id } = req.params;
  const planet = planets.find(p => p.id === parseInt(id));
  res.status(200).json(planet);
};

const planetShema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

const create = (req, res) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  const validateNewPlanet = planetShema.validate(newPlanet);
  if (validateNewPlanet.error) {
    res.status(400).json({ msg: validateNewPlanet.error.details[0].message });
  } else {
    planets = [...planets, newPlanet];
    res.status(201).json({ msg: "the planet was created!" });
  }
};

const updateById = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map(p => (p.id === id ? { ...p, name } : p));
  res.status(200).json({ msg: "The planet was updated!" });
};

const deleteById = (req, res) => {
  const { id } = req.params;
  planets = planets.filter(p => p.id !== id);
  res.status(200).json({ msg: "The planet was deleted!" });
};

export { getAll, getOneById, create, updateById, deleteById };
