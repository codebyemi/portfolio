function StackItem({ group, entersFrom, items }) {
  return (
    <div
      className={`
      stack-item 
      ${group} 
      enters-from-${entersFrom}
    `}
    >
      <h4>{group}</h4>
      <ul>
        {items.map((item) => {
          return (
            <li key={item}>
              <img src={item} alt={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StackItem;
