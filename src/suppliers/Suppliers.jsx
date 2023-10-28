import React, { useEffect, useState } from "react";
import "./Suppliers.scss"

export const Suppliers = () => {
  const [suppliers, setSuppliers] = useState();
  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((data) => data.json())
      .then((suppliersList) => setSuppliers(suppliersList))
  }, [])
  
  return (
    <div className="suppliers">
      <label htmlFor="supplier-dropdown" className="suppliers-list-label">
        Supplier:
        {' '}
      {suppliers && <select className="suppliers-list" name="supplier-dropdown">
        {suppliers.map((supplier) => <option key={`supplier-${supplier.id}`} className="suppliers-list-item">
          {supplier.name}
        </option>)}
      </select>}
      </label>
    </div>
  )
}