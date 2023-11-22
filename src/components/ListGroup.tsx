import { useState } from "react";
function ListGroup() {
  const items = [
    "About",
    "Machine Learning",
    "Software and Computers",
    "Space",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>Menu</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No items found</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
