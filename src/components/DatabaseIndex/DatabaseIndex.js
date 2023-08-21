import React, { useState, useEffect, useContext } from "react";
import Overlay from "../../common/Overlay";
import { HeroContext } from "../Context/Context";
import { fetchIndexData, fetchIndexDataDesc } from "../api/api";

function DatabaseIndex() {
  const { isLoading, setIsLoading } = useContext(HeroContext);
  const [heroes, setHeroes] = useState([]);
  const [noresult, setNoresult] = useState(null);
  const [order, setOrder] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (order) {
      fetchIndexDataDesc()
        .then((res) => {
          setHeroes(res.data);
          setIsLoading(false);
        })
        .catch((e) => setNoresult(true));
    } else {
      fetchIndexData()
        .then((res) => {
          setHeroes(res.data);
          setIsLoading(false);
        })
        .catch((e) => setNoresult(true));
    }
  }, [order]);

  return (
    <div>
      <Overlay isLoading={isLoading}>
        <div className="container pt-3">
          {heroes && (
            <div className="text-center">
              <h4>Database of Heroes and Villains</h4>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>
                        <button onClick={() => setOrder(!order)}>
                          Sort Order
                        </button>
                        ID
                      </th>
                      <th>Name</th>
                      <th>History</th>
                      <th>Power Description</th>
                      <th>Superpowers</th>

                      <th>First Appearance</th>
                      <th>Creator</th>
                      <th>Occupation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {heroes.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name && item.name}</td>
                        <td>
                          {item.history_text &&
                            item.history_text.slice(0, 20) + "..."}
                        </td>
                        <td>
                          {item.powers_text &&
                            item.powers_text.split(",").slice(0, 10) + "..."}
                        </td>
                        <td>
                          {item.superpowers.length > 0 &&
                            item.superpowers.split(",").slice(0, 20) + "..."}
                        </td>

                        <td>
                          {item.first_appearance && item.first_appearance}
                        </td>
                        <td>{item.creator && item.creator}</td>
                        <td>{item.occupation && item.occupation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {noresult && (
            <div className="alert alert-primary" role="alert">
              Could not load database information
            </div>
          )}
        </div>
      </Overlay>
    </div>
  );
}

export default DatabaseIndex;
