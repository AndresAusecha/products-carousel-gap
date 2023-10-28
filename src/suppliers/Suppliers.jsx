import React, { useEffect, useState } from "react";
import "./Suppliers.scss"

export const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    fetch("https://gorest.co.in/public/v2/users")
      .then((data) => data.json())
      .then((suppliersList) => setSuppliers(suppliersList))
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="suppliers">
      {error ?
        <div className="suppliers-error-container">
          <p>Error: the suppliers list could not be loaded</p>
        </div>
        : isLoading
          ? <p>Loading...</p>
          : (
            <label htmlFor="supplier-dropdown" className="suppliers-list-label">
              Supplier: {' '}
              <select className="suppliers-list" name="supplier-dropdown">
                {suppliers.map((supplier) => (
                  <option key={`supplier-${supplier.id}`} className="suppliers-list-item">
                    {supplier.name}
                  </option>
                ))}
              </select>
            </label>
          )}
    </div>
  )
}