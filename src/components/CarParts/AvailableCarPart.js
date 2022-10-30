import classes from "./AvailableCarPart.module.css";
import Card from "../UI element/Card";
import CarPartItem from "./CardPartItem/CarPartItem";
//adding call to BE
const DUMMY_CarParts = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    key: 1,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    key: 2,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    key: 3,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    key: 4,
  },
];

const AvailableCarPart = () => {
  const carPartsList = DUMMY_CarParts.map((carPart) => (
    <CarPartItem
      key={carPart.key}
      name={carPart.name}
      description={carPart.description}
      price={carPart.price}
    />
  ));

  return (
    <section className={classes.carPart}>
      <Card>
        <ul>{carPartsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableCarPart;
