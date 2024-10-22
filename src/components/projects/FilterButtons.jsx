export default function FilterButtons({ filterButtons, onFilterChange }) {
  return (
    <div className="filter_buttons">
      {filterButtons.map((button) => (
        <button
          key={button.id}
          className="filter_btn"
          data-filter={button.filterValue}
          onClick={() => onFilterChange(button.filterValue)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
