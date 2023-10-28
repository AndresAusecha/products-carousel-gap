import React, { useEffect, useState } from "react";

export const Suppliers = () => {
  const [suppliers, setSuppliers] = useState();
  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((data) => data.json())
      .then((suppliersList) => setSuppliers(suppliersList))
    setSuppliers()
  }, [])
  console.log(suppliers);
  return (
    <div className="suppliers">

    </div>
  )
}