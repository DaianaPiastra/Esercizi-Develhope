import Joi from "joi";
import pgPromise from "pg-promise";
const psg= pgPromise()
const db = psg(
  "postgres://postgres:Chitarrablu@localhost:5432/postgres"
);

const setupDb = async () => {
        await db.none(`
         DROP TABLE IF EXISTS planets;

        CREATE TABLE planets(
        id SERIAL NOT NULL PRIMARY KEY
        NAME TEXT NOT NULL
        )
        `);
   await db.none(`INSERT INTO planets (name) VALUE ('Earth')`)     
   await db.none(`INSERT INTO planets (name) VALUE ('Mars')`)   
};

setupDb()



const getAll = async (req, res) => {
  const planet = await db.manyOrNone(`SELECT * FROM planets`)
  res.status(200).json(planet);
};

const getOneById = async (req, res) => {
  const { id } = req.params;
  const planet = await db.oneOrNone(`SELECT * FROM planets WHERE id=$1`, id)

  res.status(200).json(planet);
};

const planetShema = Joi.object({
  name: Joi.string().required(),
});

const create = async (req, res) => {
  const { name } = req.body;
  const newPlanet = { name };
  const validateNewPlanet = planetShema.validate(newPlanet);
  if (validateNewPlanet.error) {
    res.status(400).json({ msg: validateNewPlanet.error.details[0].message });
  } else {

    await db.none( `INSERT INTO planets (name) VALUE ($1)`, name)
    res.status(201).json({ msg: "the planet was created!" });
  }
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await db.none(`UPDATE planets SET name=$2 WHERE id= $1`, [id, name] )
  res.status(200).json({ msg: "The planet was updated!" });
};

const deleteById = async (req, res) => {
  const { id } = req.params;
await db.none(`DELETE FROM planets WHERE id=$1`, id)
  res.status(200).json({ msg: "The planet was deleted!" });
};

export { getAll, getOneById, create, updateById, deleteById };
