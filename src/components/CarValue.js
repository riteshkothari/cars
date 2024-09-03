import { useSelector } from "react-redux";
import { useMemo } from "react";

function CarValue() {
  const { data, searchTerm } = useSelector((state) => state.cars);

  const totalCost = useMemo(() => {
    return data
      .filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .reduce((acc, car) => acc + car.cost, 0);
  }, [data, searchTerm]);

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
