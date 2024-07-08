
import express from 'express';
import 'express-async-error';
import morgan from 'morgan';

const app = express();
const port = 3000;


app.use(morgan("dev"));
app.use(express.json())


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


app.get('/api/planets', (req, res) => {
  res.status(200).json(planets);
});


app.get('/api/planets/:id', (req, res) => {
  const { id } = req.params;
  const planet = planets.find(p => p.id === parseInt(id)); 
  res.status(200).json(planet);
});

app.post('/api/planets', (req, res) => {
  const {id, name}= res.body
  const newPlanet= {id, name}
  planets= [...planets, newPlanet]
  res.status(201).json({msg :'the planet was created!'})
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
