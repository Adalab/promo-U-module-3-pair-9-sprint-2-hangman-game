const Form = ({ handleChange, lastLetter }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleKeyDown = (ev) => {
    // Sabrías decir para qué es esta línea
    ev.target.setSelectionRange(0, 1);
  };

  const ValueInput = (ev) => {
    handleChange(ev.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="title" htmlFor="last-letter">
        Escribe una letra:
      </label>
      <input
        autoFocus
        autoComplete="off"
        className="form__input"
        maxLength="1"
        type="text"
        name="last-letter"
        id="last-letter"
        value={lastLetter}
        onKeyDown={handleKeyDown}
        onChange={ValueInput}
      />
    </form>
  );
};
export default Form;
