export const Title = ({ Title, SubTitle }) => {
  return (
    <div className="section-title">
      <h2>
        {Title} <span>{SubTitle}</span>
      </h2>
    </div>
  );
};
